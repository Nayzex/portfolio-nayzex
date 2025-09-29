'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { plausible } from '@/lib/analytics/plausible';
import { Loader2, Send, CheckCircle } from 'lucide-react';

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  consent: z.boolean().refine(val => val === true, 'Vous devez accepter le traitement de vos données'),
  // Honeypot field (hidden)
  website: z.string().optional()
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      consent: false,
      website: '' // Honeypot field
    }
  });

  const watchConsent = watch('consent');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erreur lors de l\'envoi du message');
      }

      // Success
      setIsSubmitted(true);
      reset();
      
      // Track successful form submission
      plausible.trackContactFormSubmit('contact_page');
      
      toast.success('Message envoyé avec succès !', {
        description: 'Je vous répondrai sous 24-48 heures.',
        duration: 5000,
      });

    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('Erreur lors de l\'envoi', {
        description: error instanceof Error ? error.message : 'Une erreur inattendue s\'est produite',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8 rounded-xl" style={{ backgroundColor: 'var(--color-surface)' }}>
        <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--color-accent-a-base)' }} />
        <h3 className="text-xl font-semibold mb-2">Message envoyé !</h3>
        <p className="text-body mb-4" style={{ color: 'var(--color-ink-subtle)' }}>
          Merci pour votre message. Je vous répondrai sous 24-48 heures.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSubmitted(false)}
        >
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        {...register('website')}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Prénom *</Label>
          <Input
            id="firstName"
            {...register('firstName')}
            placeholder="Votre prénom"
            disabled={isSubmitting}
          />
          {errors.firstName && (
            <p className="text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Nom *</Label>
          <Input
            id="lastName"
            {...register('lastName')}
            placeholder="Votre nom"
            disabled={isSubmitting}
          />
          {errors.lastName && (
            <p className="text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="votre.email@example.com"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Company */}
      <div className="space-y-2">
        <Label htmlFor="company">Entreprise</Label>
        <Input
          id="company"
          {...register('company')}
          placeholder="Nom de votre entreprise (optionnel)"
          disabled={isSubmitting}
        />
      </div>

      {/* Budget */}
      <div className="space-y-2">
        <Label htmlFor="budget">Budget du projet</Label>
        <Select onValueChange={(value) => setValue('budget', value)} disabled={isSubmitting}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez votre budget (optionnel)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-5k">Moins de 5 000€</SelectItem>
            <SelectItem value="5k-10k">5 000€ - 10 000€</SelectItem>
            <SelectItem value="10k-25k">10 000€ - 25 000€</SelectItem>
            <SelectItem value="25k-50k">25 000€ - 50 000€</SelectItem>
            <SelectItem value="50k-plus">Plus de 50 000€</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          {...register('message')}
          rows={6}
          placeholder="Décrivez votre projet, vos objectifs et vos contraintes..."
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Consent */}
      <div className="flex items-start space-x-2">
        <Checkbox
          id="consent"
          checked={watchConsent}
          onCheckedChange={(checked) => setValue('consent', !!checked)}
          disabled={isSubmitting}
        />
        <div className="space-y-1">
          <Label htmlFor="consent" className="text-sm font-normal cursor-pointer">
            J'accepte que mes données soient utilisées pour répondre à ma demande *
          </Label>
          {errors.consent && (
            <p className="text-sm text-red-600">{errors.consent.message}</p>
          )}
        </div>
      </div>

      {/* Privacy notice */}
      <div 
        className="p-4 rounded-lg text-sm"
        style={{ backgroundColor: 'var(--color-surface)' }}
      >
        <p style={{ color: 'var(--color-ink-subtle)' }}>
          🔒 Vos données sont traitées de manière confidentielle et ne seront jamais partagées avec des tiers. 
          Elles sont utilisées uniquement pour répondre à votre demande.
        </p>
      </div>

      {/* Submit button */}
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting || !watchConsent}
        className="w-full md:w-auto"
        style={{ backgroundColor: 'var(--color-accent-a-base)', color: 'white' }}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Envoyer le message
          </>
        )}
      </Button>
    </form>
  );
}
