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
    quote: "Working with Nathan was exceptional. He delivered our mobile banking app on time and exceeded all security requirements. The user feedback has been outstanding, and we've seen significant improvements in customer engagement.",
    author: "James Wilson",
    role: "CTO",
    company: "Regional Bank",
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
    quote: "Nathan's expertise in React Native helped us launch our fitness app successfully. His code quality is exceptional, and he provided valuable insights throughout the development process. Highly recommended!",
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
    quote: "Outstanding work on our learning management system. Nathan understood our educational goals and created a platform that both teachers and students love. The interactive features are particularly impressive.",
    author: "Dr. Sarah Chen",
    role: "Academic Director",
    company: "Online Education Institute",
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
    quote: "The food delivery app Nathan developed has been a game-changer for our business. The real-time tracking and seamless payment integration have significantly improved customer satisfaction and retention.",
    author: "Maria Gonzalez",
    role: "Operations Manager",
    company: "Local Food Network",
    avatar: "/images/avatar-maria.jpg",
    rating: 5
  }
];

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
    description: "Businesses that trust my expertise"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Rating",
    description: "Based on client feedback"
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Project Success Rate",
    description: "Delivered on time and budget"
  }
];

export default function TestimonialsPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6">Client Testimonials</h1>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              Here's what my clients are saying about our collaborations and the results we've achieved together.
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
            <h2 className="mb-6">What Clients Love About Working With Me</h2>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              Beyond the final product, clients appreciate the journey we take together.
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
              <h3 className="text-lg font-semibold mb-3">Clear Communication</h3>
              <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                "Nathan kept us informed at every stage. His weekly updates and demos made us feel confident about the project's progress."
              </p>
              <div className="mt-4 text-xs" style={{ color: 'var(--color-ink-subtle)' }}>
                - Recurring client feedback
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
              <h3 className="text-lg font-semibold mb-3">Results-Driven</h3>
              <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                "Not only did Nathan deliver exactly what we asked for, but he also suggested improvements that significantly boosted our conversion rates."
              </p>
              <div className="mt-4 text-xs" style={{ color: 'var(--color-ink-subtle)' }}>
                - E-commerce client
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
              <h3 className="text-lg font-semibold mb-3">Quality Focus</h3>
              <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                "The attention to detail is exceptional. Every interaction feels polished, and the code quality has made maintenance a breeze."
              </p>
              <div className="mt-4 text-xs" style={{ color: 'var(--color-ink-subtle)' }}>
                - Technical team lead
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6">Industry Recognition</h2>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              Awards and recognition from industry peers and organizations.
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
              <h3 className="font-semibold mb-2">Best Mobile App</h3>
              <p className="text-sm mb-2" style={{ color: 'var(--color-ink-subtle)' }}>
                Regional Banking Awards 2024
              </p>
              <p className="text-xs" style={{ color: 'var(--color-ink-subtle)' }}>
                For outstanding mobile banking application
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
              <h3 className="font-semibold mb-2">Innovation in FinTech</h3>
              <p className="text-sm mb-2" style={{ color: 'var(--color-ink-subtle)' }}>
                FinTech Excellence Awards 2024
              </p>
              <p className="text-xs" style={{ color: 'var(--color-ink-subtle)' }}>
                For innovative financial technology solutions
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
              <h3 className="font-semibold mb-2">UX Excellence</h3>
              <p className="text-sm mb-2" style={{ color: 'var(--color-ink-subtle)' }}>
                Mobile Design Awards 2023
              </p>
              <p className="text-xs" style={{ color: 'var(--color-ink-subtle)' }}>
                For exceptional user experience design
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
              Ready to Join These Success Stories?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Let's discuss how we can achieve similar results for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-[var(--color-accent-a-base)] hover:bg-gray-50"
                asChild
              >
                <Link href="/contact">
                  Start Your Project
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--color-accent-a-base)]"
                asChild
              >
                <Link href="/projects">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
