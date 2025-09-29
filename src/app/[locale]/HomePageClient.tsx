'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/cards/ProjectCard';
import ServiceCard from '@/components/cards/ServiceCard';
import TestimonialCard from '@/components/cards/TestimonialCard';
import { plausible } from '@/lib/analytics/plausible';
import { Code, Smartphone, Palette, Search, ArrowRight } from 'lucide-react';

interface HomePageClientProps {
  locale: string;
}

export default function HomePageClient({ locale }: HomePageClientProps) {
  const t = useTranslations('home');

  // Mock data for featured projects
  const featuredProjects = [
    {
      title: "E-commerce Platform for Fashion Retailer",
      description: "Developed a responsive e-commerce platform with advanced product filtering and secure payment gateway. Full responsive design.",
      image: "/images/project-ecommerce.jpg",
      href: `/${locale}/case-studies/ecommerce-platform`,
      tags: ["React", "Next.js", "Stripe"]
    },
    {
      title: "Mobile Banking Application",
      description: "Created a secure mobile banking app with biometric authentication, real-time transactions, and advanced security measures.",
      image: "/images/project-banking.jpg", 
      href: `/${locale}/case-studies/mobile-banking`,
      tags: ["React Native", "Node.js", "Security"]
    },
    {
      title: "Project Management Tool for Creative Agencies",
      description: "Designed and built a comprehensive project management platform with time tracking, collaboration tools and automated reporting.",
      image: "/images/project-management.jpg",
      href: `/${locale}/case-studies/ecommerce-platform`,
      tags: ["Vue.js", "Laravel", "PostgreSQL"]
    }
  ];

  // Mock testimonials
  const testimonials = [
    {
      quote: "Cette boutique a dépassé mes attentes en proposant des solutions ecommerce qui excellaient sur nos indicateurs de conversion. L'attention au détail était remarquable.",
      author: "Sophie Martin",
      role: "CEO",
      company: "Fashion Boutique",
      avatar: "/images/avatar-sophie.jpg",
      rating: 5
    },
    {
      quote: "Great work! We launched an e-commerce platform for exceptional metrics. The client experience was seamless with professional and has received great feedback from our users.",
      author: "Ethan Stevens",
      role: "Product Manager", 
      company: "TechStart Inc",
      avatar: "/images/avatar-ethan.jpg",
      rating: 5
    }
  ];

  const handleHeroCTA = (type: 'primary' | 'secondary') => {
    plausible.trackHeroCTA(type, 'homepage');
  };

  const handleProjectClick = (projectTitle: string) => {
    plausible.trackProjectView(projectTitle, 'homepage');
  };

  return (
    <div>
      {/* Hero Section - Image Right Variant */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h1 className="mb-6 font-bold text-balance">
                {t('hero.title')}
              </h1>
              <p className="text-lead mb-8 text-balance" style={{ color: 'var(--color-ink-subtle)' }}>
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="px-8 py-4 font-medium rounded-lg transition-all duration-200 hover:scale-[0.99] active:scale-[0.97]"
                  style={{ 
                    backgroundColor: 'var(--color-accent-a-base)', 
                    color: 'white'
                  }}
                  onClick={() => handleHeroCTA('primary')}
                  asChild
                >
                  <Link href={`/${locale}/contact`}>
                    {t('hero.cta_primary')}
                  </Link>
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 font-medium rounded-lg border-2 transition-all duration-200 hover:scale-[0.99] active:scale-[0.97]"
                  onClick={() => handleHeroCTA('secondary')}
                  asChild
                >
                  <Link href={`/${locale}/contact`}>
                    {t('hero.cta_secondary')}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div 
                className="relative aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-accent-a-subtle)' }}
              >
                <div style={{ color: 'var(--color-accent-a-base)' }}>
                  <Code className="w-24 h-24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-6">{t('featured_projects.title')}</h2>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              {t('featured_projects.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} onClick={() => handleProjectClick(project.title)}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href={`/${locale}/projects`} className="inline-flex items-center gap-2">
                Voir tous les projets
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-6">{t('services.title')}</h2>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Code className="w-6 h-6" />}
              title={t('services.web_development.title')}
              description={t('services.web_development.description')}
              price={t('services.web_development.price')}
            />
            <ServiceCard
              icon={<Smartphone className="w-6 h-6" />}
              title={t('services.mobile_development.title')}
              description={t('services.mobile_development.description')}
              price={t('services.mobile_development.price')}
            />
            <ServiceCard
              icon={<Palette className="w-6 h-6" />}
              title={t('services.ux_design.title')}
              description={t('services.ux_design.description')}
              price={t('services.ux_design.price')}
            />
            <ServiceCard
              icon={<Search className="w-6 h-6" />}
              title={t('services.seo.title')}
              description={t('services.seo.description')}
              price={t('services.seo.price')}
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-6">{t('process.title')}</h2>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              {t('process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { key: 'discovery', number: '1' },
              { key: 'design', number: '2' },
              { key: 'development', number: '3' },
              { key: 'deployment', number: '4' },
              { key: 'maintenance', number: '5' }
            ].map((step, index) => (
              <div key={step.key} className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
                  style={{ 
                    backgroundColor: 'var(--color-accent-a-base)',
                    color: 'white'
                  }}
                >
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t(`process.${step.key}.title`)}
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                  {t(`process.${step.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-6">{t('testimonials.title')}</h2>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href={`/${locale}/testimonials`} className="inline-flex items-center gap-2">
                Voir tous les témoignages
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-accent-a-base)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6 text-white">
              {t('cta.title')}
            </h2>
            <Button 
              size="lg"
              className="px-8 py-4 font-medium rounded-lg bg-white hover:bg-gray-50 text-[var(--color-accent-a-base)]"
              onClick={() => handleHeroCTA('primary')}
              asChild
            >
              <Link href={`/${locale}/contact`}>
                {t('cta.button')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
