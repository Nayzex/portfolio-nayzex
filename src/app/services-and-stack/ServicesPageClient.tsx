'use client';

import { Code, Smartphone, Palette, Users, Zap, Shield, Globe, Database, Cloud, Layout, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServicesPageClient() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Développement Web",
      description: "Applications web modernes avec React et Next.js",
      features: [
        "Sites web responsive et performants",
        "Applications web complexes (SaaS, dashboards)",
        "E-commerce et plateformes de paiement",
        "Progressive Web Apps (PWA)"
      ],
      color: "bg-blue-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Applications Mobile",
      description: "Apps natives et cross-platform avec React Native",
      features: [
        "Applications iOS et Android",
        "Cross-platform avec code partagé",
        "Intégration API et services cloud",
        "Publication sur App Store et Google Play"
      ],
      color: "bg-green-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design UI/UX",
      description: "Interfaces intuitives et expériences optimisées",
      features: [
        "Conception d'interfaces modernes",
        "Prototypage et wireframing",
        "Design system et composants réutilisables",
        "Tests d'utilisabilité"
      ],
      color: "bg-purple-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consulting",
      description: "Conseils techniques et choix d'architecture",
      features: [
        "Audit technique et code review",
        "Architecture et choix technologiques",
        "Optimisation des performances",
        "Formation et accompagnement"
      ],
      color: "bg-orange-500"
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      technologies: [
        { name: "React", level: "Avancé" },
        { name: "Angular", level: "Avancé" },
        { name: "Next.js", level: "Intermédiaire" },
        { name: "Tailwind CSS", level: "Avancé" },
      ]
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: [
        { name: "Kotlin", level: "Avancé" },
        { name: "React Native", level: "Intermédiaire" },
        { name: "Swift", level: "Intermédiaire" }
      ]
    },
    {
      category: "Backend",
      icon: <Database className="w-6 h-6" />,
      technologies: [
        { name: "C#", level: "Avancé" },
        { name: "Symfony", level: "Avancé" },
        { name: "SQL server", level: "Avancé" },
        { name: "PostgreSQL", level: "Intermédiaire" },
      ]
    },
    {
      category: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      technologies: [
        { name: "Vercel", level: "Expert" },
        { name: "AWS", level: "Intermédiaire" },
        { name: "Docker", level: "Débutant" },
        { name: "GitHub Actions", level: "Avancé" }
      ]
    },
    {
      category: "Outils & Design",
      icon: <Zap className="w-6 h-6" />,
      technologies: [
        { name: "Figma", level: "Avancé" },
        { name: "Git & GitHub", level: "Avancé" },
        { name: "Postman", level: "Avancé" },
        { name: "VS Code", level: "Expert" }
      ]
    },
    {
      category: "Qualité & Tests",
      icon: <Shield className="w-6 h-6" />,
      technologies: [
        { name: "Jest", level: "Avancé" },
        { name: "React Testing Library", level: "Avancé" },
        { name: "Cypress", level: "Intermédiaire" },
        { name: "ESLint", level: "Expert" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-green-100 text-green-700';
      case 'Avancé': return 'bg-blue-100 text-blue-700';
      case 'Intermédiaire': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: '#1a1d23' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4">Services & Technologies</h1>
            <p className="text-lead mb-6 text-ink-subtle">
              Un accompagnement complet pour tous vos besoins digitaux avec les technologies les plus modernes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Mes Services</h2>
            <p className="text-lead text-ink-subtle max-w-2xl mx-auto">
              Du concept à la mise en ligne, je vous accompagne dans toutes les étapes de votre projet digital.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-4 md:p-6 rounded-xl border border-gray-700 hover:shadow-lg transition-shadow" style={{ backgroundColor: '#343a40' }}>
                {/* Icon */}
                <div className={`w-12 h-12 md:w-14 md:h-14 ${service.color} rounded-lg flex items-center justify-center mb-3 md:mb-4 text-white`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold mb-2 text-white">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm">{service.description}</p>

                {/* Features */}
                <ul className="space-y-1.5 md:space-y-2">
                  {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs md:text-sm text-gray-300">
                      <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-green-400 mr-1.5 md:mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#1a1d23' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="mb-3 md:mb-4">Technologies Maîtrisées</h2>
            <p className="text-sm md:text-lead text-ink-subtle max-w-2xl mx-auto">
              Un stack technique moderne pour des solutions performantes et évolutives.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {techStack.map((stack, index) => (
              <div key={index} className="p-3 md:p-6 rounded-xl border border-gray-700" style={{ backgroundColor: '#343a40' }}>
                {/* Category Header */}
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-700 rounded-lg flex items-center justify-center mr-2 md:mr-3 text-white">
                    <div className="w-4 h-4 md:w-6 md:h-6">
                      {stack.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm md:text-lg text-white">{stack.category}</h3>
                </div>

                {/* Technologies List */}
                <div className="space-y-2 md:space-y-3">
                  {stack.technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-1">
                      <span className="text-gray-200 font-medium text-xs md:text-base truncate">{tech.name}</span>
                      <span className={`text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded-full ${getLevelColor(tech.level)} whitespace-nowrap flex-shrink-0`}>
                        {tech.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-accent-a-base)' }}>
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Globe className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="mb-6 text-white">Prêt à transformer votre idée en réalité ?</h2>
          <p className="text-lg mb-8 opacity-90">
            Discutons de votre projet et voyons ensemble comment je peux vous aider à atteindre vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white hover:bg-white text-black hover:text-black border border-gray-300"
              asChild
            >
              <Link href="/contact" className="text-black hover:text-black">
                Démarrer un projet
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-white hover:bg-white text-black hover:text-black border border-gray-300"
              asChild
            >
              <Link href="/projects" className="text-black hover:text-black">
                Voir mes réalisations
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
