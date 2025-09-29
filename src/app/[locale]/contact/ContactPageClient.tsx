'use client';

import { Button } from '@/components/ui/button';
import ContactForm from '@/components/common/ContactForm';
import { plausible } from '@/lib/analytics/plausible';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function ContactPageClient() {
  const handleWhatsAppClick = () => {
    plausible.trackWhatsAppClick('contact_page');
  };

  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6">Contact</h1>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              Prêt à donner vie à votre projet ? Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h2>
            <ContactForm />
          </div>

          {/* Contact Info & Quick Contact */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Informations de contact</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-accent-a-subtle)' }}
                  >
                    <Mail className="w-6 h-6" style={{ color: 'var(--color-accent-a-base)' }} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:hello@nayzex.com"
                      className="hover:text-[var(--color-accent-a-base)] transition-colors"
                      style={{ color: 'var(--color-ink-subtle)' }}
                      onClick={() => plausible.trackExternalLink('mailto:hello@nayzex.com', 'Email Contact')}
                    >
                      hello@nayzex.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-accent-a-subtle)' }}
                  >
                    <Phone className="w-6 h-6" style={{ color: 'var(--color-accent-a-base)' }} />
                  </div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <a 
                      href="tel:+33612345678"
                      className="hover:text-[var(--color-accent-a-base)] transition-colors"
                      style={{ color: 'var(--color-ink-subtle)' }}
                      onClick={() => plausible.trackExternalLink('tel:+33612345678', 'Phone Contact')}
                    >
                      +33 6 12 34 56 78
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-accent-a-subtle)' }}
                  >
                    <MapPin className="w-6 h-6" style={{ color: 'var(--color-accent-a-base)' }} />
                  </div>
                  <div>
                    <p className="font-medium">Localisation</p>
                    <p style={{ color: 'var(--color-ink-subtle)' }}>
                      Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Contact */}
            <div 
              className="p-6 rounded-xl border"
              style={{ 
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-stroke)'
              }}
            >
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 mr-3" style={{ color: 'var(--color-accent-b-base)' }} />
                <h3 className="text-lg font-semibold">Contact rapide</h3>
              </div>
              <p className="text-body mb-4" style={{ color: 'var(--color-ink-subtle)' }}>
                Besoin d'une réponse rapide ? Contactez-moi directement sur WhatsApp.
              </p>
              <Button 
                asChild
                className="w-full"
                style={{ backgroundColor: 'var(--color-accent-b-base)', color: 'white' }}
                onClick={handleWhatsAppClick}
              >
                <a
                  href="https://wa.me/33612345678?text=Bonjour%20Nathan%2C%20j%27aimerais%20discuter%20d%27un%20projet%20avec%20vous."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ouvrir WhatsApp
                </a>
              </Button>
            </div>

            {/* Response Time */}
            <div 
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'var(--color-accent-a-subtle)' }}
            >
              <p className="text-sm font-medium" style={{ color: 'var(--color-accent-a-base)' }}>
                💡 Temps de réponse moyen : 2-4 heures en semaine
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
