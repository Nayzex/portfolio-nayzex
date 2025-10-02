import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, Clock, Users, Lightbulb, Code, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mon Processus - Portfolio Nayzex',
  description: 'Découvrez ma méthodologie de développement en 5 étapes pour mener vos projets au succès',
};

const processSteps = [
  {
    number: 1,
    title: "Découverte & Planification",
    duration: "1 à 2 semaines",
    icon: Lightbulb,
    description: "Comprendre vos objectifs et exigences.",
    details: [
      "Entretiens avec les parties prenantes et collecte des exigences",
      "Recherche utilisateur et analyse concurrentielle", 
      "Planification de l'architecture technique",
      "Définition du calendrier et des jalons du projet",
      "Évaluation des risques et stratégies d'atténuation"
    ],
    deliverables: [
      "Brief projet et document d'exigences",
      "Spécification technique",
      "Calendrier et jalons du projet",
      "Estimation budgétaire et proposition"
    ]
  },
  {
    number: 2,
    title: "Design & Prototypage",
    duration: "1 à 2 semaines",
    icon: Users,
    description: "Créer des wireframes et prototypes pour visualiser la solution.",
    details: [
      "Design d'expérience utilisateur (UX) et cartographie du parcours utilisateur",
      "Design d'interface utilisateur (UI) avec des principes de design modernes",
      "Prototypes interactifs pour les tests utilisateur",
      "Création d'un système de design avec des composants cohérents",
      "Considérations d'accessibilité et d'utilisabilité"
    ],
    deliverables: [
      "Wireframes et diagrammes de flux utilisateur",
      "Maquettes de design haute fidélité",
      "Prototype interactif",
      "Système de design et guide de style"
    ]
  },
  {
    number: 3,
    title: "Développement & Tests",
    duration: "4 à 5 semaines",
    icon: Code,
    description: "Construire et tester rigoureusement l'application.",
    details: [
      "Développement agile avec des sprints hebdomadaires",
      "Code propre et maintenable suivant les meilleures pratiques",
      "Tests complets (unitaire, intégration, e2e)",
      "Optimisation des performances et implémentation de la sécurité",
      "Mises à jour régulières du progrès et sessions de démonstration"
    ],
    deliverables: [
      "Application entièrement fonctionnelle",
      "Rapports de couverture de tests",
      "Rapports d'optimisation des performances",
      "Résultats d'audit de sécurité"
    ]
  },
  {
    number: 4,
    title: "Déploiement & Lancement",
    duration: "1 à 2 semaines",
    icon: Rocket,
    description: "Assurer un lancement en douceur avec des réseaux sécurisés.",
    details: [
      "Configuration et mise en place de l'environnement de production",
      "Implémentation du pipeline CI/CD si besoin",
      "Configuration du monitoring et des analytics",
      "Certificats SSL et configurations de sécurité",
      "Procédures de sauvegarde et de récupération d'urgence"
    ],
    deliverables: [
      "Déploiement de l'application en direct",
      "Configuration du tableau de bord de monitoring",
      "Certificats de sécurité et configurations",
      "Liste de contrôle de lancement et documentation"
    ]
  },
  {
    number: 5,
    title: "Maintenance & Support",
    duration: "Continu",
    icon: Clock,
    description: "Fournir un support et des mises à jour continus.",
    details: [
      "Maintenance régulière et mises à jour de sécurité",
      "Monitoring des performances et optimisation",
      "Améliorations des fonctionnalités basées sur les retours utilisateur",
      "Support technique et dépannage",
      "Rapports d'analytics et insights"
    ],
    deliverables: [
      "Rapports de maintenance mensuels",
      "Analytics de performance",
      "Notifications de mises à jour de sécurité",
      "Recommandations d'amélioration des fonctionnalités"
    ]
  }
];

export default function ProcessPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6">Mon Processus en 5 Étapes</h1>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              Une méthodologie éprouvée pour le succès, affinée grâce à des années d'expérience dans la livraison de solutions digitales de haute qualité.
            </p>
            <p className="text-sm mt-4" style={{ color: 'var(--color-ink-subtle)' }}>
              * Durées moyennes pour des projets petits à moyens
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={step.number} className="mb-16 last:mb-0 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Step Number & Icon */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center lg:flex-col lg:items-center gap-4">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold"
                        style={{ 
                          backgroundColor: 'var(--color-accent-a-base)',
                          color: 'white'
                        }}
                      >
                        {step.number}
                      </div>
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center lg:mt-4"
                        style={{ backgroundColor: 'var(--color-accent-a-subtle)' }}
                      >
                        <step.icon className="w-6 h-6" style={{ color: 'var(--color-accent-a-base)' }} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Main Info */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <h3 className="text-2xl font-semibold">{step.title}</h3>
                          <span 
                            className="px-3 py-1 text-sm rounded-full"
                            style={{ 
                              backgroundColor: 'var(--color-accent-b-subtle)',
                              color: 'var(--color-accent-b-base)'
                            }}
                          >
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-body mb-6" style={{ color: 'var(--color-ink-subtle)' }}>
                          {step.description}
                        </p>

                        {/* Details */}
                        <div className="space-y-3">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start gap-3">
                              <Check 
                                className="w-5 h-5 mt-0.5 flex-shrink-0" 
                                style={{ color: 'var(--color-accent-a-base)' }} 
                              />
                              <span className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Livrables Clés</h4>
                        <div 
                          className="p-4 rounded-lg"
                          style={{ backgroundColor: 'var(--color-surface)' }}
                        >
                          <ul className="space-y-2">
                            {step.deliverables.map((deliverable, deliverableIndex) => (
                              <li 
                                key={deliverableIndex} 
                                className="text-sm flex items-start gap-2"
                                style={{ color: 'var(--color-ink-subtle)' }}
                              >
                                <span 
                                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                  style={{ backgroundColor: 'var(--color-accent-a-base)' }}
                                />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Line */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <div 
                      className="w-px h-16"
                      style={{ backgroundColor: 'var(--color-stroke)' }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6">Pourquoi Ce Processus Fonctionne</h2>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              Cette méthodologie garantit le succès du projet grâce à une communication claire, des retours itératifs et des bonnes pratiques éprouvées.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--color-accent-a-base)' }}
              >
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Collaborative Approach</h3>
              <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                Regular check-ins and feedback sessions ensure we're always aligned with your vision and goals.
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--color-accent-a-base)' }}
              >
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Predictable Timeline</h3>
              <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                Clear milestones and deliverables keep your project on track and within budget.
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--color-accent-a-base)' }}
              >
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
              <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                Rigorous testing and optimization ensure your final product exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-accent-a-base)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6 text-white">Prêt à Démarrer Votre Projet ?</h2>
            <p className="text-lead mb-8 text-white/80">
              Discutons de vos objectifs et de la façon dont ce processus éprouvé peut donner vie à votre vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300">
                <Link href="/contact" className="text-black hover:text-violet-600">
                  Démarrer Votre Projet
                </Link>
              </Button>
              <Button size="lg" asChild className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300">
                <Link href="/projects" className="text-black hover:text-violet-600">
                  Voir les Études de Cas
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
