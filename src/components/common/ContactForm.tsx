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
import { Loader2, Send, CheckCircle } from 'lucide-react';

// Schema de validation
const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.enum(['web', 'mobile', 'both', 'other']),
  budget: z.enum(['<5k', '5k-15k', '15k-50k', '>50k', 'not-sure']),
  timeline: z.enum(['asap', '1-3months', '3-6months', '6months+', 'not-sure']),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  newsletter: z.boolean().default(false),
  privacy: z.boolean().refine(val => val === true, 'Vous devez accepter la politique de confidentialité')
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const newsletter = watch('newsletter');
  const privacy = watch('privacy');

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message envoyé avec succès !', {
          description: 'Je vous répondrai dans les plus brefs délais.'
        });
        setIsSubmitted(true);
        reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
      toast.error('Erreur lors de l\'envoi', {
        description: 'Veuillez réessayer ou me contacter directement.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Message envoyé !</h3>
        <p className="text-ink-subtle mb-4">
          Merci pour votre message. Je vous répondrai dans les plus brefs délais.
        </p>
        <Button onClick={() => setIsSubmitted(false)}>
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Informations personnelles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nom complet *</Label>
          <Input
            id="name"
            {...register('name')}
            placeholder="Votre nom"
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="votre@email.com"
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="company">Entreprise (optionnel)</Label>
          <Input
            id="company"
            {...register('company')}
            placeholder="Nom de votre entreprise"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Téléphone (optionnel)</Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone')}
            placeholder="+33 1 23 45 67 89"
          />
        </div>
      </div>

      {/* Détails du projet */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Détails du projet</h3>
        
        <div className="space-y-2">
          <Label htmlFor="projectType">Type de projet *</Label>
          <Select onValueChange={(value) => setValue('projectType', value as ContactForm['projectType'])}>
            <SelectTrigger className={errors.projectType ? 'border-red-500' : ''}>
              <SelectValue placeholder="Sélectionnez le type de projet" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web">Site web / Application web</SelectItem>
              <SelectItem value="mobile">Application mobile</SelectItem>
              <SelectItem value="both">Web + Mobile</SelectItem>
              <SelectItem value="other">Autre</SelectItem>
            </SelectContent>
          </Select>
          {errors.projectType && (
            <p className="text-sm text-red-500">{errors.projectType.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="budget">Budget approximatif *</Label>
            <Select onValueChange={(value) => setValue('budget', value as ContactForm['budget'])}>
              <SelectTrigger className={errors.budget ? 'border-red-500' : ''}>
                <SelectValue placeholder="Fourchette de budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="<5k">Moins de 5k €</SelectItem>
                <SelectItem value="5k-15k">5k - 15k €</SelectItem>
                <SelectItem value="15k-50k">15k - 50k €</SelectItem>
                <SelectItem value=">50k">Plus de 50k €</SelectItem>
                <SelectItem value="not-sure">Je ne sais pas encore</SelectItem>
              </SelectContent>
            </Select>
            {errors.budget && (
              <p className="text-sm text-red-500">{errors.budget.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Délai souhaité *</Label>
            <Select onValueChange={(value) => setValue('timeline', value as ContactForm['timeline'])}>
              <SelectTrigger className={errors.timeline ? 'border-red-500' : ''}>
                <SelectValue placeholder="Quand lancer le projet ?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">Dès que possible</SelectItem>
                <SelectItem value="1-3months">Dans 1-3 mois</SelectItem>
                <SelectItem value="3-6months">Dans 3-6 mois</SelectItem>
                <SelectItem value="6months+">Dans plus de 6 mois</SelectItem>
                <SelectItem value="not-sure">Pas encore défini</SelectItem>
              </SelectContent>
            </Select>
            {errors.timeline && (
              <p className="text-sm text-red-500">{errors.timeline.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Décrivez votre projet *</Label>
          <Textarea
            id="message"
            {...register('message')}
            placeholder="Décrivez votre projet, vos objectifs, vos besoins spécifiques..."
            rows={5}
            className={errors.message ? 'border-red-500' : ''}
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>
      </div>

      {/* Options et consentements */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="newsletter"
            checked={newsletter}
            onCheckedChange={(checked) => setValue('newsletter', !!checked)}
          />
          <Label htmlFor="newsletter" className="text-sm">
            Je souhaite recevoir des conseils et actualités sur le développement web/mobile
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="privacy"
            checked={privacy}
            onCheckedChange={(checked) => setValue('privacy', !!checked)}
            className={errors.privacy ? 'border-red-500' : ''}
          />
          <Label htmlFor="privacy" className="text-sm">
            J&apos;accepte la politique de confidentialité et le traitement de mes données *
          </Label>
        </div>
        {errors.privacy && (
          <p className="text-sm text-red-500">{errors.privacy.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Envoyer le message
          </>
        )}
      </Button>

      <p className="text-xs text-ink-subtle text-center">
        Vos données sont protégées et ne seront jamais partagées avec des tiers.
      </p>
    </form>
  );
}