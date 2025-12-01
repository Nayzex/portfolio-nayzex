import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { rateLimit } from '@/lib/rate-limit';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

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
    const identifier = request.ip ?? request.headers.get('x-forwarded-for') ?? 'anonymous';
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

    // Send email via Resend
    if (process.env.RESEND_API_KEY) {
      const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact <noreply@nayzex.com>',
        to: ['nayzex.dev@gmail.com'],
        subject: emailSubject,
        text: emailContent,
        html: emailContent.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
        reply_to: validatedData.email,
      });

      if (error) {
        console.error('Resend error:', error);
        return NextResponse.json(
          { error: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer.' },
          { status: 500 }
        );
      }

      console.log('Email sent successfully:', data);
    } else {
      // Development mode - log to console
      console.log('Contact form submission (dev mode):');
      console.log('Subject:', emailSubject);
      console.log('Content:', emailContent);
    }

    // Send confirmation email to user
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Nathan - Portfolio <noreply@nayzex.com>',
        to: [validatedData.email],
        subject: 'Merci pour votre message !',
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #8B5CF6;">Merci pour votre message !</h2>
            <p>Bonjour ${validatedData.firstName},</p>
            <p>J'ai bien reçu votre message et je vous remercie pour votre intérêt. Je reviendrai vers vous sous 24-48 heures pour discuter de votre projet.</p>
            <p>En attendant, n'hésitez pas à consulter mes <a href="${process.env.NEXT_PUBLIC_APP_URL}/fr/projects" style="color: #8B5CF6;">projets récents</a> pour mieux comprendre mon approche.</p>
            <p>À très bientôt,<br>Nathan</p>
            <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e5e7eb; font-size: 0.875rem; color: #6b7280;">
              <p>Nathan Siwek - Développeur Web & Mobile<br>
              Email: hello@nayzex.com<br>
              Portfolio: <a href="${process.env.NEXT_PUBLIC_APP_URL}" style="color: #8B5CF6;">${process.env.NEXT_PUBLIC_APP_URL}</a></p>
            </div>
          </div>
        `,
      });
    }

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
          details: error.errors.map(err => ({ field: err.path.join('.'), message: err.message }))
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
