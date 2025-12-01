import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { mdxComponents } from '@/lib/mdx/mdx-components';
import { getCaseStudyBySlug, getAdjacentCaseStudies, getAllCaseStudySlugs } from '@/lib/mdx/get-case-studies';
import { Calendar, Clock, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

interface CaseStudyPageProps {
  params: Promise<{ 
    slug: string;
    locale: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  const locales = ['fr', 'en'];
  
  return locales.flatMap(locale => 
    slugs.map(slug => ({
      locale,
      slug,
    }))
  );
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
      description: 'The requested case study could not be found.',
    };
  }

  return {
    title: `${caseStudy.meta.title} - Case Study`,
    description: caseStudy.meta.abstract,
    openGraph: {
      title: caseStudy.meta.title,
      description: caseStudy.meta.abstract,
      images: [caseStudy.meta.cover],
      type: 'article',
      publishedTime: caseStudy.meta.date,
      tags: caseStudy.meta.tags,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  
  if (!caseStudy) {
    notFound();
  }

  const { previous, next } = getAdjacentCaseStudies(slug);

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/projects">Projets</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{caseStudy.meta.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(caseStudy.meta.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {caseStudy.meta.timeline}
                </div>
              </div>

              {/* Title & Abstract */}
              <h1 className="mb-6">{caseStudy.meta.title}</h1>
              <p className="text-lead mb-8 leading-relaxed" style={{ color: 'var(--color-ink-subtle)' }}>
                {caseStudy.meta.abstract}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {caseStudy.meta.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Roles & Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Rôles</h3>
                  <ul className="space-y-2">
                    {caseStudy.meta.roles.map((role, index) => (
                      <li key={index} className="text-body" style={{ color: 'var(--color-ink-subtle)' }}>
                        • {role}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.meta.stack.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-white border-gray-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cover Image */}
            <div className="lg:col-span-1">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5">
                <Image
                  src={caseStudy.meta.cover}
                  alt={caseStudy.meta.title}
                  fill
                  className={`${caseStudy.meta.id === 'fs-auto' ? 'object-contain' : 'object-cover'}`}
                  priority
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Gallery */}
      {caseStudy.meta.gallery && caseStudy.meta.gallery.length > 0 && (
        <section className="py-16" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-8 text-center">Galerie</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {caseStudy.meta.gallery.map((image, index) => (
                <div key={index} className="relative aspect-video rounded-xl overflow-hidden bg-white/5">
                  <Image
                    src={image}
                    alt={`${caseStudy.meta.title} - Galerie ${index + 1}`}
                    fill
                    className={`${caseStudy.meta.id === 'babyfoot-go' ? 'object-contain' : 'object-cover'}`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>

            {/* Website Link */}
            {caseStudy.meta.website && (
              <div style={{ textAlign: 'center', margin: '3rem 0 0 0' }}>
                <a
                  href={caseStudy.meta.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#8B5CF6',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                  }}
                  className="hover:bg-violet-700"
                >
                  🔗 Visiter le site
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-accent-a-base)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6 text-white">
              Prêt à créer quelque chose d'extraordinaire ?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300"
                asChild
              >
                <Link href="/contact">
                  Travaillons ensemble
                </Link>
              </Button>
              <Button 
                size="lg"
                className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300"
                asChild
              >
                <Link href="/projects">
                  Retour aux projets
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t" style={{ borderColor: 'var(--color-stroke)' }}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {previous ? (
              <Link 
                href={`/case-studies/${previous.meta.slug}`}
                className="flex items-center gap-3 group hover:text-[var(--color-accent-a-base)] transition-colors"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>Previous Project</div>
                  <div className="font-medium">{previous.meta.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link 
                href={`/case-studies/${next.meta.slug}`}
                className="flex items-center gap-3 group hover:text-[var(--color-accent-a-base)] transition-colors text-right"
              >
                <div>
                  <div className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>Next Project</div>
                  <div className="font-medium">{next.meta.title}</div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
