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
    quote: "Nathan a réalisé un travail qui correspondait parfaitement à mes attentes. Vous pouvez le contacter les yeux fermés.",
    author: "Romaric",
    role: "Patron",
    company: "Amorinfo",
    avatar: "R",
    rating: 5,
  },
];

const stats = [
  {
    value: "1+",
    label: "Client Satisfait",
    description: "Entreprises qui font confiance à mon expertise",
    icon: Users,
  },
  {
    value: "5/5",
    label: "Note Moyenne",
    description: "Basée sur les retours clients",
    icon: Star,
  },
  {
    value: "100%",
    label: "Taux de Réussite",
    description: "Livrés dans les temps et le budget",
    icon: TrendingUp,
  },
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
              Découvrez les retours de mes clients et l'impact de mes réalisations. Soyez le premier à partager votre expérience de travail avec moi.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {stats.length > 0 && (
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
      )}

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {testimonials.length > 0 ? (
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
          ) : (
            <div className="max-w-2xl mx-auto text-center py-16">
              <h2 className="text-3xl font-bold mb-6">Pas encore de témoignages</h2>
              <p className="text-lg mb-8" style={{ color: 'var(--color-ink-subtle)' }}>
                Soyez le premier à témoigner de mon travail ! Si vous avez collaboré avec moi, j'aimerais connaître votre avis et votre expérience.
              </p>
              <Button size="lg" asChild className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300">
                <Link href="/contact" className="text-black hover:text-violet-600">
                  Partagez Votre Expérience
                </Link>
              </Button>
            </div>
          )}
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
