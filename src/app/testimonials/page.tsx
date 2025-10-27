import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import TestimonialCard from '@/components/cards/TestimonialCard';
import Link from 'next/link';
import { Star, Users, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Témoignages - Portfolio Nayzex',
  description: 'Découvrez ce que mes clients disent de mon travail et de notre collaboration',
};

const testimonials = [
  {
    quote: "Nathan a dépassé toutes nos attentes avec notre plateforme e-commerce. Son attention aux détails et sa compréhension de nos besoins ont résulté en une augmentation de 40% de nos conversions. Un vrai professionnel.",
    author: "Sophie Martin",
    role: "CEO",
    company: "Fashion Boutique",
    avatar: "/images/avatar-sophie.jpg",
    rating: 5
  },
  {
    quote: "Travailler avec Nathan a été exceptionnel. Il a livré notre application bancaire mobile dans les temps et a dépassé toutes les exigences de sécurité. Les retours utilisateurs ont été remarquables, et nous avons constaté des améliorations significatives de l'engagement client.",
    author: "James Wilson",
    role: "CTO",
    company: "Banque Régionale",
    avatar: "/images/avatar-james.jpg",
    rating: 5
  },
  {
    quote: "L'application de gestion de projet que Nathan a développée pour notre agence a révolutionné notre workflow. L'interface est intuitive et les fonctionnalités correspondent exactement à nos besoins. Excellent travail !",
    author: "Marie Dubois",
    role: "Directrice Opérationnelle",
    company: "Creative Agency",
    avatar: "/images/avatar-marie.jpg",
    rating: 5
  },
  {
    quote: "L'expertise de Nathan en React Native nous a aidés à lancer notre application fitness avec succès. La qualité de son code est exceptionnelle, et il a fourni des insights précieux tout au long du processus de développement. Hautement recommandé !",
    author: "Alex Rodriguez",
    role: "Product Manager",
    company: "FitTech Solutions",
    avatar: "/images/avatar-alex.jpg",
    rating: 5
  },
  {
    quote: "La plateforme immobilière développée par Nathan a transformé notre business. Les fonctionnalités de recherche avancée et les visites virtuelles ont considérablement amélioré l'expérience utilisateur.",
    author: "Pierre Legrand",
    role: "Fondateur",
    company: "PropTech Innovations",
    avatar: "/images/avatar-pierre.jpg",
    rating: 5
  },
  {
    quote: "Travail exceptionnel sur notre système de gestion de l'apprentissage. Nathan a compris nos objectifs éducatifs et a créé une plateforme que les enseignants et les étudiants adorent. Les fonctionnalités interactives sont particulièrement impressionnantes.",
    author: "Dr. Sarah Chen",
    role: "Directrice Académique",
    company: "Institut d'Éducation en Ligne",
    avatar: "/images/avatar-sarah.jpg",
    rating: 5
  },
  {
    quote: "Nathan a créé une application de méditation qui a déjà aidé des milliers d'utilisateurs. Son approche centrée sur l'utilisateur et sa capacité à traduire nos idées en fonctionnalités concrètes sont remarquables.",
    author: "Thomas Moreau",
    role: "Co-fondateur",
    company: "Wellness App",
    avatar: "/images/avatar-thomas.jpg",
    rating: 5
  },
  {
    quote: "L'application de livraison de nourriture développée par Nathan a été un changement de jeu pour notre business. Le suivi en temps réel et l'intégration de paiement transparente ont considérablement amélioré la satisfaction et la fidélisation des clients.",
    author: "Maria Gonzalez",
    role: "Responsable des Opérations",
    company: "Réseau Alimentaire Local",
    avatar: "/images/avatar-maria.jpg",
    rating: 5
  }
];

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Clients Satisfaits",
    description: "Entreprises qui font confiance à mon expertise"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Note Moyenne",
    description: "Basée sur les retours clients"
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Taux de Réussite",
    description: "Livrés dans les temps et le budget"
  }
];

export default function TestimonialsPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6">Témoignages Clients</h1>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              Voici ce que mes clients disent de nos collaborations et des résultats que nous avons obtenus ensemble.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--color-accent-a-base)' }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: 'var(--color-accent-a-base)' }}
                >
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold mb-1">{stat.label}</h3>
                <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Feedback Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6">Ce Que Les Clients Apprécient En Travaillant Avec Moi</h2>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              Au-delà du produit final, les clients apprécient le parcours que nous faisons ensemble.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div 
              className="p-6 rounded-xl text-center"
              style={{ backgroundColor: 'var(--color-bg)' }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--color-accent-a-subtle)' }}
              >
                <Users className="w-6 h-6" style={{ color: 'var(--color-accent-a-base)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Communication Claire</h3>
              <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                "Nathan nous a tenus informés à chaque étape. Ses mises à jour hebdomadaires et démos nous ont donné confiance dans le progrès du projet."
              </p>
              <div className="mt-4 text-xs" style={{ color: 'var(--color-ink-subtle)' }}>
                - Retour client récurrent
              </div>
            </div>

            <div 
              className="p-6 rounded-xl text-center"
              style={{ backgroundColor: 'var(--color-bg)' }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--color-accent-b-subtle)' }}
              >
                <TrendingUp className="w-6 h-6" style={{ color: 'var(--color-accent-b-base)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Orienté Résultats</h3>
              <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                "Non seulement Nathan a livré exactement ce que nous avions demandé, mais il a aussi suggéré des améliorations qui ont considérablement boosté nos taux de conversion."
              </p>
              <div className="mt-4 text-xs" style={{ color: 'var(--color-ink-subtle)' }}>
                - Client e-commerce
              </div>
            </div>

            <div 
              className="p-6 rounded-xl text-center"
              style={{ backgroundColor: 'var(--color-bg)' }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--color-accent-a-subtle)' }}
              >
                <Star className="w-6 h-6" style={{ color: 'var(--color-accent-a-base)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Focus Qualité</h3>
              <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                "L'attention aux détails est exceptionnelle. Chaque interaction semble polie, et la qualité du code a rendu la maintenance un jeu d'enfant."
              </p>
              <div className="mt-4 text-xs" style={{ color: 'var(--color-ink-subtle)' }}>
                - Chef d'équipe technique
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6">Reconnaissance de l'Industrie</h2>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              Prix et reconnaissance de pairs de l'industrie et d'organisations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div 
              className="p-6 rounded-xl text-center border"
              style={{ 
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-stroke)'
              }}
            >
              <Star className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-accent-a-base)' }} />
              <h3 className="font-semibold mb-2">Meilleure App Mobile</h3>
              <p className="text-xs" style={{ color: 'var(--color-ink-subtle)' }}>
                Pour une application bancaire mobile exceptionnelle
              </p>
            </div>

            <div 
              className="p-6 rounded-xl text-center border"
              style={{ 
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-stroke)'
              }}
            >
              <TrendingUp className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-accent-a-base)' }} />
              <h3 className="font-semibold mb-2">Innovation en FinTech</h3>
              <p className="text-xs" style={{ color: 'var(--color-ink-subtle)' }}>
                Pour des solutions de technologie financière innovantes
              </p>
            </div>

            <div 
              className="p-6 rounded-xl text-center border"
              style={{ 
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-stroke)'
              }}
            >
              <Users className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-accent-a-base)' }} />
              <h3 className="font-semibold mb-2">Excellence UX</h3>
              <p className="text-xs" style={{ color: 'var(--color-ink-subtle)' }}>
                Pour un design d'expérience utilisateur exceptionnel
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
              Prêt à Rejoindre Ces Histoires de Succès ?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Discutons de la façon dont nous pouvons obtenir des résultats similaires pour votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300"
                asChild
              >
                <Link href="/contact" className="text-black hover:text-violet-600">
                  Démarrer Votre Projet
                </Link>
              </Button>
              <Button 
                size="lg"
                className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300"
                asChild
              >
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
