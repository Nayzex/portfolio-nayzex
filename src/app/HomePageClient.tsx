'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/cards/ProjectCard';
import ServiceCard from '@/components/cards/ServiceCard';
import TestimonialCard from '@/components/cards/TestimonialCard';
import { Code, Smartphone, Palette, Search, ArrowRight } from 'lucide-react';
export default function HomePageClient() {

        // Mock data for featured projects
        const featuredProjects = [
          {
            id: "fs-auto",
            title: "FS-Auto - Plateforme de Présentation Automobiles",
            description: "Plateforme web complète combinant présentation de l'entreprise et système de consultation du stock de véhicules.",
            image: "/images/projects/fs-auto/logo.png",
            href: "/case-studies/fs-auto",
            tags: ["React", "Next.js", "TypeScript", "Node.js"],
            status: "En pause",
            year: "2025"
          },
          {
            id: "ctmhb-handball-management",
            title: "CTMHB - Gestion de Club de Handball",
            description: "Application web complète pour la gestion d&apos;un club de handball : équipes, matchs, planning, emplacements et administration du club.",
            image: "/images/projects/ctmhb-handball-management/CTMHB logo.png",
            href: "/case-studies/ctmhb-handball-management",
            tags: ["Angular", "Symfony", "PostgreSQL"],
            status: "Terminé",
            year: "2024"
          },
        ];

  // Mock data for services
  const services = [
    {
      title: "Développement Web",
      description: "Création de sites web et applications web performants et sur mesure.",
      icon: <Code className="w-8 h-8" />,
      color: "var(--color-accent-a-base)",
    },
    {
      title: "Applications Mobile",
      description: "Conception et développement d'applications iOS et Android natives ou hybrides.",
      icon: <Smartphone className="w-8 h-8" />,
      color: "var(--color-accent-b-base)",
    },
    {
      title: "Design UI/UX",
      description: "Expériences utilisateur intuitives et interfaces esthétiques.",
      icon: <Palette className="w-8 h-8" />,
      color: "#8B5CF6",
    },
    {
      title: "Optimisation & SEO",
      description: "Performance, référencement et optimisation pour les moteurs de recherche.",
      icon: <Search className="w-8 h-8" />,
      color: "#10B981",
    },
  ];

  // Mock data for testimonials
  const testimonials = [
    {
      quote: "Nathan a réalisé un travail qui correspondait parfaitement à mes attentes. Vous pouvez le contacter les yeux fermés.",
      author: "Romaric",
      role: "Patron",
      company: "Amorinfo",
      avatar: "R",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center text-center" style={{ background: 'linear-gradient(to bottom right, #FFFFFF, #808080, #000000)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-clamp-hero-title mb-4 animate-fade-in-up">
            Développeur Web & Mobile <br className="hidden sm:inline" />
            qui transforme vos idées en succès digital
          </h1>
          <p className="text-lead text-ink-subtle mb-8 animate-fade-in-up animation-delay-200">
            Spécialisé en React, Next.js et React Native, je conçois et développe des solutions performantes et intuitives pour propulser votre présence en ligne.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button 
              size="lg" 
              asChild 
              className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300"
            >
              <Link href="/contact" className="text-black hover:text-violet-600">
                Discutons de votre projet
              </Link>
            </Button>
            <Button 
              size="lg" 
              asChild 
              className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300"
            >
              <Link href="/projects" className="text-black hover:text-violet-600">
                Voir mes réalisations
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: '#1a1d23' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-6 md:mb-8">Projets Récents</h2>
          <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button 
              size="lg" 
              asChild 
              className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300"
            >
              <Link href="/projects" className="text-black hover:text-violet-600 flex items-center">
                Voir tous les projets
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-8 md:mb-12">Mes Services</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 items-stretch">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              asChild 
              className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300"
            >
              <Link href="/services-and-stack" className="text-black hover:text-violet-600 flex items-center">
                Découvrir tous les services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#1a1d23' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Mon Processus de Travail</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline centrale - desktop et mobile */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-violet-600 z-0"></div>

              <div className="space-y-8 md:space-y-16">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-start md:items-center relative">
                  {/* Cercle - visible sur mobile et desktop */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div className="w-full md:w-1/2 md:pr-8 pl-20 md:pl-0 md:text-right mb-0 md:mb-0">
                    <div className="p-5 md:p-6 rounded-xl border border-gray-700" style={{ backgroundColor: '#343a40' }}>
                      <h3 className="mb-2 text-white text-base md:text-xl">1. Découverte & Stratégie</h3>
                      <p className="text-gray-300 text-sm md:text-base">Comprendre vos besoins, vos objectifs et votre marché pour définir une stratégie claire.</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2 md:pl-8"></div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-start md:items-center relative">
                  {/* Cercle - visible sur mobile et desktop */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div className="hidden md:block md:w-1/2 md:pr-8 order-2 md:order-1"></div>
                  <div className="w-full md:w-1/2 md:pl-8 pl-20 md:pl-8 md:text-left mb-0 md:mb-0 order-1 md:order-2">
                    <div className="p-5 md:p-6 rounded-xl border border-gray-700" style={{ backgroundColor: '#343a40' }}>
                      <h3 className="mb-2 text-white text-base md:text-xl">2. Conception UI/UX</h3>
                      <p className="text-gray-300 text-sm md:text-base">Création de wireframes, maquettes et prototypes pour une expérience utilisateur optimale.</p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-start md:items-center relative">
                  {/* Cercle - visible sur mobile et desktop */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div className="w-full md:w-1/2 md:pr-8 pl-20 md:pl-0 md:text-right mb-0 md:mb-0">
                    <div className="p-5 md:p-6 rounded-xl border border-gray-700" style={{ backgroundColor: '#343a40' }}>
                      <h3 className="mb-2 text-white text-base md:text-xl">3. Développement Agile</h3>
                      <p className="text-gray-300 text-sm md:text-base">Développement itératif avec des sprints courts et des retours réguliers pour une flexibilité maximale.</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2 md:pl-8"></div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-start md:items-center relative">
                  {/* Cercle - visible sur mobile et desktop */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div className="hidden md:block md:w-1/2 md:pr-8 order-2 md:order-1"></div>
                  <div className="w-full md:w-1/2 md:pl-8 pl-20 md:pl-8 md:text-left mb-0 md:mb-0 order-1 md:order-2">
                    <div className="p-5 md:p-6 rounded-xl border border-gray-700" style={{ backgroundColor: '#343a40' }}>
                      <h3 className="mb-2 text-white text-base md:text-xl">4. Tests & Recettes</h3>
                      <p className="text-gray-300 text-sm md:text-base">Tests rigoureux pour garantir la qualité, la performance et la compatibilité sur tous les appareils.</p>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col md:flex-row items-start md:items-center relative">
                  {/* Cercle - visible sur mobile et desktop */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                    <span className="text-white font-bold text-lg">5</span>
                  </div>
                  <div className="w-full md:w-1/2 md:pr-8 pl-20 md:pl-0 md:text-right mb-0 md:mb-0">
                    <div className="p-5 md:p-6 rounded-xl border border-gray-700" style={{ backgroundColor: '#343a40' }}>
                      <h3 className="mb-2 text-white text-base md:text-xl">5. Déploiement & Suivi</h3>
                      <p className="text-gray-300 text-sm md:text-base">Mise en ligne sécurisée et accompagnement post-lancement pour assurer le succès à long terme.</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2 md:pl-8"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              asChild 
              className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300"
            >
              <Link href="/process" className="text-black hover:text-violet-600 flex items-center">
                En savoir plus sur mon processus
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Ce que mes clients disent</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              asChild 
              className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300"
            >
              <Link href="/testimonials" className="text-black hover:text-violet-600 flex items-center">
                Lire tous les témoignages
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-accent-a-base)' }}>
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="mb-6 text-white">Prêt à démarrer votre prochain projet ?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contactez-moi dès aujourd&apos;hui pour discuter de vos idées et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300"
            >
              <Link href="/contact" className="text-black hover:text-violet-600">
                Travailler avec moi
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300"
            >
              <Link href="/services-and-stack" className="text-black hover:text-violet-600">
                Mes services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}