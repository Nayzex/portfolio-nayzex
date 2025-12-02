import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { rateLimit } from '@/lib/rate-limit';

// Contact form validation schema
const contactSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  company: z.string().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  privacy: z.boolean().refine(val => val === true, 'Vous devez accepter le traitement de vos données'),
  captchaToken: z.string().min(1, 'Le CAPTCHA est requis'),
  // Honeypot field to catch bots
  website: z.string().optional().refine(val => !val, 'Bot detected')
});

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const identifier = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? 'anonymous';
    const { success } = await rateLimit.limit(identifier);

    if (!success) {
      return NextResponse.json(
        { error: 'Trop de tentatives. Veuillez réessayer dans quelques minutes.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Verify Turnstile CAPTCHA token
    if (process.env.TURNSTILE_SECRET_KEY) {
      const captchaResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: validatedData.captchaToken,
        }),
      });

      const captchaData = await captchaResponse.json() as { success: boolean; score?: number };

      if (!captchaData.success) {
        return NextResponse.json(
          { error: 'Validation CAPTCHA échouée. Veuillez réessayer.' },
          { status: 400 }
        );
      }
    } else {
      console.warn('TURNSTILE_SECRET_KEY not set - CAPTCHA validation skipped in development');
    }

    // Prepare email content
    const emailSubject = `Nouveau message de ${validatedData.firstName} ${validatedData.lastName}`;
    const emailContent = `
Nouveau message reçu depuis le portfolio :

**Informations de contact :**
- Nom : ${validatedData.firstName} ${validatedData.lastName}
- Email : ${validatedData.email}
- Entreprise : ${validatedData.company || 'Non renseignée'}
- Type de projet : ${validatedData.projectType || 'Non renseigné'}
- Budget : ${validatedData.budget || 'Non renseigné'}
- Délai souhaité : ${validatedData.timeline || 'Non renseigné'}

**Message :**
${validatedData.message}

---
Envoyé depuis le formulaire de contact du portfolio
    `;

    // Log contact form submission to console
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log('Subject:', emailSubject);
    console.log('From:', validatedData.email);
    console.log('Content:', emailContent);
    console.log('===================================');

    return NextResponse.json(
      { 
        message: 'Message envoyé avec succès ! Je vous répondrai sous 24-48 heures.',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Données invalides',
          details: error.issues.map(err => ({ field: err.path.join('.'), message: err.message }))
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Erreur interne du serveur. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
