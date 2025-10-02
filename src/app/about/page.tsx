import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Download, MapPin, Calendar, Award, Code, Heart, Coffee, Mountain } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'À Propos - Portfolio Nayzex',
  description: 'Découvrez mon parcours, mes valeurs et ma passion pour le développement web et mobile',
};

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { category: 'Mobile', items: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo'] },
  { category: 'Outils', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'] }
];

const experience = [
  {
    role: 'Développeur Full-Stack Senior',
    company: 'TechCorp Solutions',
    period: '2022 - Présent',
    description: 'Diriger le développement d\'applications web d\'entreprise et de solutions mobiles pour des clients Fortune 500.',
    achievements: [
      'Augmenté les performances de l\'application de 60% grâce à l\'optimisation',
      'Dirigé une équipe de 5 développeurs sur plusieurs projets simultanés',
      'Implémenté des pipelines CI/CD réduisant le temps de déploiement de 80%'
    ]
  },
  {
    role: 'Développeur Frontend',
    company: 'StartupX',
    period: '2020 - 2022',
    description: 'Développé des applications web centrées sur l\'utilisateur et contribué à la stratégie produit.',
    achievements: [
      'Construit des applications responsives servant 100k+ utilisateurs',
      'Amélioré l\'engagement utilisateur de 45% grâce aux améliorations UX',
      'Encadré des développeurs juniors et établi des standards de codage'
    ]
  },
  {
    role: 'Développeur Junior',
    company: 'Agence Digitale',
    period: '2018 - 2020',
    description: 'Commencé ma carrière en construisant des sites web et en apprenant les pratiques de développement modernes.',
    achievements: [
      'Livré 50+ projets clients dans les temps et le budget',
      'Acquis une expertise dans plusieurs frameworks et technologies',
      'Reçu le prix "Développeur de l\'Année" en 2019'
    ]
  }
];

const values = [
  {
    icon: Code,
    title: 'Code Propre',
    description: 'Je crois en l\'écriture de code maintenable et bien documenté qui résiste à l\'épreuve du temps.'
  },
  {
    icon: Heart,
    title: 'Centré Utilisateur',
    description: 'Chaque décision est prise en gardant l\'utilisateur final à l\'esprit, garantissant des expériences exceptionnelles.'
  },
  {
    icon: Coffee,
    title: 'Apprentissage Continu',
    description: 'La technologie évolue rapidement, et je reste à jour avec les dernières tendances et meilleures pratiques.'
  },
  {
    icon: Mountain,
    title: 'Résolution de Problèmes',
    description: 'Je prospère sur les défis complexes et trouve des solutions élégantes aux problèmes difficiles.'
  }
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h1 className="mb-6">À Propos de Moi</h1>
              <p className="text-lead mb-6" style={{ color: 'var(--color-ink-subtle)' }}>
                Je suis Nathan, un développeur full-stack passionné avec plus de 4 ans d'expérience créant 
                des solutions digitales qui font la différence.
              </p>
              <p className="text-body mb-8" style={{ color: 'var(--color-ink-subtle)' }}>
                Mon parcours dans le développement web a commencé par un BTS SIO, puis par un bachelor coordinateur de projets informatiques.                . 
                Aujourd'hui, je me spécialise dans la construction d'applications web et mobiles évolutives qui aident 
                les entreprises à croître et les utilisateurs à atteindre leurs objectifs.
              </p>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" style={{ color: 'var(--color-accent-a-base)' }} />
                  <span className="text-sm">Dijon, France</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" style={{ color: 'var(--color-accent-a-base)' }} />
                  <span className="text-sm">4+ Ans d'Expérience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5" style={{ color: 'var(--color-accent-a-base)' }} />
                  <span className="text-sm">Plusieurs projets Livrés</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5" style={{ color: 'var(--color-accent-a-base)' }} />
                  <span className="text-sm">Développeur Full-Stack</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300">
                  <Link href="/contact" className="text-black hover:text-violet-600">
                    Travaillons Ensemble
                  </Link>
                </Button>
                <Button size="lg" asChild className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300">
                  <a href="/resume.pdf" target="_blank" className="text-black hover:text-violet-600 flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger CV
                  </a>
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-first lg:order-last">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/projects/ctmhb-handball-management/MyHead3.png"
                  alt="Nathan - Développeur Full-Stack"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6">Mes Valeurs</h2>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              Les principes qui guident mon travail et me poussent à livrer des résultats exceptionnels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--color-accent-a-base)' }}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6">Skills & Technologies</h2>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {skills.map((skillGroup, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4 text-center">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6">Expérience Professionnelle</h2>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              Mon parcours à travers différents rôles et l'impact que j'ai eu en cours de route.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((job, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border"
                style={{ 
                  backgroundColor: 'var(--color-bg)',
                  borderColor: 'var(--color-stroke)'
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="text-lg" style={{ color: 'var(--color-accent-a-base)' }}>
                      {job.company}
                    </p>
                  </div>
                  <span 
                    className="px-3 py-1 text-sm rounded-full mt-2 md:mt-0"
                    style={{ 
                      backgroundColor: 'var(--color-accent-b-subtle)',
                      color: 'var(--color-accent-b-base)'
                    }}
                  >
                    {job.period}
                  </span>
                </div>
                
                <p className="text-body mb-4" style={{ color: 'var(--color-ink-subtle)' }}>
                  {job.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Réalisations Clés :</h4>
                  {job.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start gap-2">
                      <span 
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: 'var(--color-accent-a-base)' }}
                      />
                      <span className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6">Au-delà du Code</h2>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              Quand je ne code pas, vous me trouverez en train d'explorer de nouvelles technologies, de faire de la randonnée en montagne, 
              ou d'expérimenter avec la photographie. Je crois que des expériences diverses font de moi un meilleur développeur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Mountain className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-accent-a-base)' }} />
              <h3 className="font-semibold mb-2">Aventures en Plein Air</h3>
              <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                La randonnée et l'escalade m'aident à clarifier mon esprit et à aborder les problèmes avec une perspective fraîche.
              </p>
            </div>
            <div className="text-center">
              <Coffee className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-accent-a-base)' }} />
              <h3 className="font-semibold mb-2">Apprentissage Continu</h3>
              <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                Toujours en train d'apprendre de nouvelles technologies et de contribuer à des projets open-source dans mon temps libre.
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-accent-a-base)' }} />
              <h3 className="font-semibold mb-2">Communauté</h3>
              <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                Encadrer des développeurs en herbe et parler lors de meetups tech locaux pour partager les connaissances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-accent-a-base)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6 text-white">
              Créons Quelque Chose d'Extraordinaire Ensemble
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Je suis toujours enthousiaste à l'idée de travailler sur de nouveaux projets et d'aider à donner vie à des idées innovantes.
            </p>
            <Button 
              size="lg"
              className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300"
              asChild
            >
              <Link href="/contact" className="text-black hover:text-violet-600">
                Entrer en Contact
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
