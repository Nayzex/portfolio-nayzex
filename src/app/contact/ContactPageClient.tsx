'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactPageClient() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4">Parlons de votre projet</h1>
            <p className="text-lead mb-6 text-ink-subtle">
              Vous avez un projet en tête ? Discutons-en ensemble. Je suis là pour vous accompagner dans la réalisation de vos ambitions digitales.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact & Form */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quick Contact Options */}
            <div>
              <h2 className="mb-6">Contacts rapides</h2>
              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-start space-x-4 p-6 bg-surface rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">WhatsApp</h3>
                    <p className="text-ink-subtle mb-4">
                      Pour une discussion rapide et directe
                    </p>
                    <Button asChild>
                      <a 
                        href="https://wa.me/33123456789" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Ouvrir WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-6 bg-surface rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-a-base rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-ink-subtle mb-4">
                      Pour une demande détaillée
                    </p>
                    <Button variant="outline" asChild>
                      <a href="mailto:contact@nayzex.dev">
                        contact@nayzex.dev
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 p-6 bg-surface rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-b-base rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Téléphone</h3>
                    <p className="text-ink-subtle mb-4">
                      Disponible du lundi au vendredi, 9h-18h
                    </p>
                    <Button variant="outline" asChild>
                      <a href="tel:+33123456789">
                        +33 1 23 45 67 89
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Info complémentaires */}
              <div className="mt-8 p-6 bg-accent-a-base/5 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-accent-a-base mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-2">Temps de réponse</h4>
                    <p className="text-sm text-ink-subtle">
                      Je réponds généralement sous 24h. Pour les urgences, contactez-moi directement par WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-6 bg-accent-b-base/5 rounded-lg">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent-b-base mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-2">Localisation</h4>
                    <p className="text-sm text-ink-subtle">
                      Basé en France, je travaille avec des clients du monde entier. Disponible pour des rendez-vous en visioconférence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="mb-6">Formulaire de contact</h2>
              <div className="bg-surface p-8 rounded-lg">
                <p className="text-center text-ink-subtle">
                  Formulaire de contact en cours d'intégration.<br/>
                  En attendant, utilisez les moyens de contact ci-contre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Questions fréquentes</h2>
            <div className="space-y-8">
              {[
                {
                  question: "Quel est votre processus de travail ?",
                  answer: "Je commence toujours par une phase de découverte pour comprendre vos besoins, puis je conçois la solution, développe avec des points de contrôle réguliers, teste rigoureusement et livre avec formation."
                },
                {
                  question: "Combien de temps prend un projet ?",
                  answer: "Cela dépend de la complexité : un site vitrine prend 2-4 semaines, une application web 6-12 semaines, une app mobile 8-16 semaines. Je fournis toujours un planning détaillé."
                },
                {
                  question: "Proposez-vous de la maintenance ?",
                  answer: "Oui, je propose des contrats de maintenance pour assurer la sécurité, les mises à jour et le support technique de vos projets après livraison."
                },
                {
                  question: "Travaillez-vous avec des équipes ?",
                  answer: "Absolument ! Je collabore régulièrement avec des designers, des marketeurs et d'autres développeurs selon les besoins du projet."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-stroke pb-6">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-ink-subtle">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}