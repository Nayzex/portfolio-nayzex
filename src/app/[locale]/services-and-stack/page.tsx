import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/cards/ServiceCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Code, Smartphone, Palette, Search, Monitor, Database, Layers, Zap } from 'lucide-react';
import Link from 'next/link';

interface ServicesPageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: ServicesPageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'services' });
  
  return {
    title: 'Services & Stack - Portfolio Nayzex',
    description: 'Découvrez mes services de développement web & mobile et ma stack technique moderne',
  };
}

export default function ServicesPage() {
  const t = useTranslations('home');

  const techStack = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', description: 'Library for building user interfaces' },
        { name: 'Next.js', description: 'React framework for production' },
        { name: 'TypeScript', description: 'Typed JavaScript at scale' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
        { name: 'Framer Motion', description: 'Animation library for React' }
      ]
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', description: 'JavaScript runtime for server-side' },
        { name: 'Python', description: 'Versatile programming language' },
        { name: 'PostgreSQL', description: 'Advanced relational database' },
        { name: 'MongoDB', description: 'Document-based NoSQL database' },
        { name: 'Redis', description: 'In-memory data structure store' }
      ]
    },
    {
      category: 'Mobile',
      technologies: [
        { name: 'React Native', description: 'Cross-platform mobile development' },
        { name: 'Flutter', description: 'Google\'s UI toolkit for mobile' },
        { name: 'Expo', description: 'Platform for universal React apps' }
      ]
    },
    {
      category: 'Tools & Deployment',
      technologies: [
        { name: 'Vercel', description: 'Frontend cloud platform' },
        { name: 'AWS', description: 'Amazon Web Services cloud' },
        { name: 'Docker', description: 'Container platform' },
        { name: 'GitHub Actions', description: 'CI/CD automation' },
        { name: 'Figma', description: 'Design and prototyping tool' }
      ]
    }
  ];

  const faqs = [
    {
      question: "What is your development process?",
      answer: "My development process follows 5 key stages: Discovery & Planning (understanding your goals), Design & Prototyping (creating wireframes and prototypes), Development & Testing (building and rigorously testing), Deployment & Launch (ensuring smooth launch), and Maintenance & Support (ongoing support and updates)."
    },
    {
      question: "How long does a project typically take?",
      answer: "Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while a complex web application can take 8-16 weeks. Mobile apps generally require 6-12 weeks. I provide detailed timelines during the planning phase."
    },
    {
      question: "What is your pricing structure?",
      answer: "I offer both fixed-price and hourly rate options depending on the project. For well-defined projects, I prefer fixed pricing for transparency. For ongoing work or projects with evolving requirements, hourly rates work better. I provide detailed quotes after understanding your requirements."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, I offer comprehensive post-launch support including bug fixes, feature updates, performance monitoring, and technical maintenance. Support packages are tailored to your specific needs and can include regular updates, security patches, and feature enhancements."
    },
    {
      question: "Can you work with existing teams?",
      answer: "Absolutely! I frequently collaborate with existing development teams, designers, and stakeholders. I can integrate seamlessly into your workflow, whether you need additional development capacity, specialized expertise, or project leadership."
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6">Services & Stack</h1>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              Comprehensive development services, leveraging a modern tech stack to deliver high-quality solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-6">Services</h2>
          </div>

          <div className="space-y-16">
            {/* Web Development */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                    style={{ backgroundColor: 'var(--color-accent-a-subtle)' }}
                  >
                    <Monitor className="w-6 h-6" style={{ color: 'var(--color-accent-a-base)' }} />
                  </div>
                  <h3 className="text-2xl font-semibold">Web Development</h3>
                </div>
                <p className="text-body mb-6" style={{ color: 'var(--color-ink-subtle)' }}>
                  Crafting responsive and performant websites tailored to your business needs. From e-commerce platforms 
                  to corporate sites, I deliver solutions that drive results.
                </p>
                <p className="text-lg font-semibold mb-4" style={{ color: 'var(--color-accent-a-base)' }}>
                  From $2,500
                </p>
                <Button asChild>
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
              <div 
                className="aspect-video rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-accent-a-subtle)' }}
              >
                <Code className="w-24 h-24" style={{ color: 'var(--color-accent-a-base)' }} />
              </div>
            </div>

            {/* Mobile Development */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div 
                  className="aspect-video rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-accent-b-subtle)' }}
                >
                  <Smartphone className="w-24 h-24" style={{ color: 'var(--color-accent-b-base)' }} />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                    style={{ backgroundColor: 'var(--color-accent-b-subtle)' }}
                  >
                    <Smartphone className="w-6 h-6" style={{ color: 'var(--color-accent-b-base)' }} />
                  </div>
                  <h3 className="text-2xl font-semibold">Mobile App Development</h3>
                </div>
                <p className="text-body mb-6" style={{ color: 'var(--color-ink-subtle)' }}>
                  Building native and cross-platform mobile applications that engage users and provide seamless 
                  experiences on iOS and Android devices.
                </p>
                <p className="text-lg font-semibold mb-4" style={{ color: 'var(--color-accent-b-base)' }}>
                  From $3,000
                </p>
                <Button asChild>
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>

            {/* UX/UI Design */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                    style={{ backgroundColor: 'var(--color-accent-a-subtle)' }}
                  >
                    <Palette className="w-6 h-6" style={{ color: 'var(--color-accent-a-base)' }} />
                  </div>
                  <h3 className="text-2xl font-semibold">UX/UI Design</h3>
                </div>
                <p className="text-body mb-6" style={{ color: 'var(--color-ink-subtle)' }}>
                  Creating intuitive and visually appealing user interfaces and experiences that enhance user 
                  satisfaction and achieve business objectives.
                </p>
                <p className="text-lg font-semibold mb-4" style={{ color: 'var(--color-accent-a-base)' }}>
                  From $1,500
                </p>
                <Button asChild>
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
              <div 
                className="aspect-video rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-accent-a-subtle)' }}
              >
                <Palette className="w-24 h-24" style={{ color: 'var(--color-accent-a-base)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-6">Tech Stack</h2>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              Modern technologies and tools I use to build scalable, performant applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="p-3 rounded-lg border"
                      style={{ 
                        backgroundColor: 'var(--color-surface)',
                        borderColor: 'var(--color-stroke)'
                      }}
                    >
                      <div className="font-medium text-sm mb-1">{tech.name}</div>
                      <div className="text-xs" style={{ color: 'var(--color-ink-subtle)' }}>
                        {tech.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-6">FAQ</h2>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              Frequently asked questions about my services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border rounded-lg px-6"
                  style={{ borderColor: 'var(--color-stroke)' }}
                >
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-body" style={{ color: 'var(--color-ink-subtle)' }}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
