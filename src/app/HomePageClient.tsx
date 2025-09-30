'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/cards/ProjectCard';
import ServiceCard from '@/components/cards/ServiceCard';
import TestimonialCard from '@/components/cards/TestimonialCard';
import { plausible } from '@/lib/analytics/plausible';
import { Code, Smartphone, Palette, Search, ArrowRight } from 'lucide-react';

export default function HomePageClient() {
  // Projets phares
  const featuredProjects = [
    {
      title: "Plateforme E-commerce pour Détaillant Mode",
      description: "Développement d'une plateforme e-commerce responsive avec filtrage avancé des produits et passerelle de paiement sécurisée.",
      image: "/images/project-ecommerce.jpg",
      href: `/case-studies/ecommerce-platform`,
      tags: ["React", "Next.js", "Stripe"]
    },
    {
      title: "Application Bancaire Mobile",
      description: "Création d'une application bancaire mobile sécurisée avec authentification biométrique et transactions en temps réel.",
      image: "/images/project-banking.jpg",
      href: `/case-studies/mobile-banking`,
      tags: ["React Native", "Node.js", "PostgreSQL"]
    },
    {
      title: "Dashboard SaaS d'Analytics",
      description: "Construction d'un tableau de bord analytique complet avec visualisation de données en temps réel et rapports personnalisés.",
      image: "/images/project-saas.jpg",
      href: `/case-studies/saas-dashboard`,
      tags: ["Vue.js", "TypeScript", "D3.js"]
    }
  ];

  // Services principaux
  const services = [
    {
      icon: Code,
      title: "Développement Web",
      description: "Applications web modernes et performantes avec React, Next.js et TypeScript",
      features: ["Sites vitrine", "Applications web", "E-commerce", "SaaS"]
    },
    {
      icon: Smartphone,
      title: "Développement Mobile",
      description: "Applications mobiles natives et cross-platform pour iOS et Android",
      features: ["React Native", "Applications iOS", "Applications Android", "PWA"]
    },
    {
      icon: Palette,
      title: "Design & UX/UI",
      description: "Interfaces utilisateur intuitives et expériences utilisateur optimisées",
      features: ["Design UI/UX", "Prototypage", "Design System", "Accessibilité"]
    },
    {
      icon: Search,
      title: "Optimisation & SEO",
      description: "Performance, référencement et optimisation pour les moteurs de recherche",
      features: ["SEO technique", "Performance", "Analytics", "Conversion"]
    }
  ];

  // Témoignages clients
  const testimonials = [
    {
      quote: "Nathan a développé notre plateforme e-commerce en respectant parfaitement nos délais et notre budget. Son expertise technique et sa communication claire ont fait la différence.",
      author: "Marie Dubois",
      role: "Directrice Marketing, FashionCorp",
      avatar: "MD"
    },
    {
      quote: "L'application mobile que Nathan a créée pour notre banque a dépassé toutes nos attentes. L'interface est intuitive et la sécurité est au rendez-vous.",
      author: "Jean-Pierre Martin",
      role: "CTO, BankSecure",
      avatar: "JPM"
    },
    {
      quote: "Collaboration exceptionnelle ! Nathan a su transformer notre vision en réalité avec un dashboard d'analytics performant et évolutif.",
      author: "Sarah Chen",
      role: "Product Manager, DataFlow",
      avatar: "SC"
    }
  ];

  return (
    <div>
      {/* Section Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-a-base/5 to-accent-b-base/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">
              Développeur Web & Mobile
              <span className="block text-accent-a-base">Créons ensemble votre prochain projet digital</span>
            </h1>
            <p className="text-lead mb-8 text-ink-subtle max-w-2xl mx-auto">
              Spécialisé en React, Next.js et React Native, je transforme vos idées en solutions digitales performantes et évolutives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button size="lg" asChild onClick={() => plausible('CTA Click', { props: { location: 'Hero Primary' } })}>
                <Link href="/contact">
                  Discutons de votre projet
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild onClick={() => plausible('CTA Click', { props: { location: 'Hero Secondary' } })}>
                <Link href="/projects">
                  Voir mes réalisations
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets Phares */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Projets Phares</h2>
            <p className="text-lead text-ink-subtle max-w-2xl mx-auto">
              Découvrez quelques-unes de mes réalisations récentes et les technologies utilisées.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">
                Voir tous les projets
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Services & Expertise</h2>
            <p className="text-lead text-ink-subtle max-w-2xl mx-auto">
              Un accompagnement complet pour tous vos besoins digitaux.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Processus */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Mon Processus</h2>
            <p className="text-lead text-ink-subtle max-w-2xl mx-auto">
              Une méthode éprouvée pour mener à bien vos projets digitaux.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Découverte", description: "Analyse de vos besoins et définition des objectifs" },
              { step: "02", title: "Conception", description: "Création des maquettes et architecture technique" },
              { step: "03", title: "Développement", description: "Codage avec les meilleures pratiques et technologies" },
              { step: "04", title: "Tests", description: "Tests rigoureux et optimisation des performances" },
              { step: "05", title: "Livraison", description: "Mise en ligne et formation à l'utilisation" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent-a-base text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-ink-subtle">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Ce que disent mes clients</h2>
            <p className="text-lead text-ink-subtle max-w-2xl mx-auto">
              La satisfaction client est au cœur de mon travail.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA Final */}
      <section className="py-16 lg:py-24 bg-accent-a-base text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-white">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discutons de vos besoins et créons ensemble une solution digitale qui fait la différence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-accent-a-base hover:bg-gray-50"
              asChild
              onClick={() => plausible('CTA Click', { props: { location: 'Final CTA Primary' } })}
            >
              <Link href="/contact">
                Commencer maintenant
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-accent-a-base"
              asChild
              onClick={() => plausible('CTA Click', { props: { location: 'Final CTA Secondary' } })}
            >
              <a href="https://wa.me/33123456789" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}