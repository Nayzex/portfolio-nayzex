'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactPageClient() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: 'var(--color-surface)' }}>
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
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quick Contact Options */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: 'var(--color-surface)' }}>
              <h2 className="mb-6">Contacts rapides</h2>
              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-start space-x-4 p-6 rounded-lg" style={{ backgroundColor: 'var(--color-bg)' }}>
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
                    <Button asChild className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300">
                      <a 
                        href="https://wa.me/33123456789" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-black hover:text-violet-600"
                      >
                        Ouvrir WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-6 rounded-lg" style={{ backgroundColor: 'var(--color-bg)' }}>
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
                    <Button asChild className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300">
                      <a href="mailto:contact@nayzex.dev" className="text-black hover:text-violet-600">
                        contact@nayzex.dev
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 p-6 rounded-lg" style={{ backgroundColor: 'var(--color-bg)' }}>
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
                    <Button asChild className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300">
                      <a href="tel:+33123456789" className="text-black hover:text-violet-600">
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
            <div className="p-8 rounded-xl" style={{ backgroundColor: 'var(--color-surface)' }}>
              <h2 className="mb-6">Formulaire de contact</h2>
              <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--color-bg)' }}>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white text-black"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white text-black"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white text-black"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white text-black"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                      Type de projet *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white text-black"
                    >
                      <option value="">Sélectionnez un type de projet</option>
                      <option value="website">Site web</option>
                      <option value="webapp">Application web</option>
                      <option value="mobile">Application mobile</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Budget estimé
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white text-black"
                    >
                      <option value="">Sélectionnez une fourchette</option>
                      <option value="<5000">Moins de 5 000€</option>
                      <option value="5000-10000">5 000€ - 10 000€</option>
                      <option value="10000-25000">10 000€ - 25 000€</option>
                      <option value="25000-50000">25 000€ - 50 000€</option>
                      <option value=">50000">Plus de 50 000€</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                      Délai souhaité
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white text-black"
                    >
                      <option value="">Sélectionnez un délai</option>
                      <option value="asap">Dès que possible</option>
                      <option value="1month">Dans 1 mois</option>
                      <option value="3months">Dans 3 mois</option>
                      <option value="6months">Dans 6 mois</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white text-black resize-none"
                      placeholder="Décrivez votre projet, vos objectifs et toute information pertinente..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="mt-1 w-4 h-4 text-violet-600 border-gray-300 rounded focus:ring-violet-500"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      J'accepte que mes données soient utilisées pour répondre à ma demande. *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300"
                  >
                    Envoyer le message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-accent-a-base)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12 text-white">Questions fréquentes</h2>
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
                <div key={index} className="border-b border-white/20 pb-6">
                  <h3 className="font-semibold mb-3 text-white">{faq.question}</h3>
                  <p className="text-white/80">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}