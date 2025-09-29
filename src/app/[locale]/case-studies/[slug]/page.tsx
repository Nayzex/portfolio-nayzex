import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import TableOfContents from '@/components/common/TableOfContents';
import { mdxComponents } from '@/lib/mdx/mdx-components';
import { getCaseStudyBySlug, getAdjacentCaseStudies, getAllCaseStudySlugs } from '@/lib/mdx/get-case-studies';
import { Calendar, Clock, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

interface CaseStudyPageProps {
  params: { 
    slug: string;
    locale: string;
  };
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
  const caseStudy = getCaseStudyBySlug(params.slug);
  
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

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);
  
  if (!caseStudy) {
    notFound();
  }

  const { previous, next } = getAdjacentCaseStudies(params.slug);

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${params.locale}`}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${params.locale}/projects`}>Projects</BreadcrumbLink>
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
                  <h3 className="text-lg font-semibold mb-3">Roles</h3>
                  <ul className="space-y-2">
                    {caseStudy.meta.roles.map((role, index) => (
                      <li key={index} className="text-body" style={{ color: 'var(--color-ink-subtle)' }}>
                        • {role}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.meta.stack.map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cover Image */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={caseStudy.meta.cover}
                    alt={caseStudy.meta.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs Section */}
      {caseStudy.meta.kpis && caseStudy.meta.kpis.length > 0 && (
        <section className="py-12" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-8 text-center">Key Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {caseStudy.meta.kpis.map((kpi, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="text-3xl font-bold mb-2"
                    style={{ color: 'var(--color-accent-a-base)' }}
                  >
                    {kpi.value}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <MDXRemote 
                source={caseStudy.content} 
                components={mdxComponents}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {caseStudy.meta.gallery && caseStudy.meta.gallery.length > 0 && (
        <section className="py-16" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-8 text-center">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {caseStudy.meta.gallery.map((image, index) => (
                <div key={index} className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src={image}
                    alt={`${caseStudy.meta.title} - Gallery ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-accent-a-base)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6 text-white">
              Ready to build something great?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-[var(--color-accent-a-base)] hover:bg-gray-50"
                asChild
              >
                <Link href={`/${params.locale}/contact`}>
                  Work with me
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--color-accent-a-base)]"
                asChild
              >
                <Link href={`/${params.locale}/projects`}>
                  Back to Projects
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
                href={`/${params.locale}/case-studies/${previous.meta.slug}`}
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
                href={`/${params.locale}/case-studies/${next.meta.slug}`}
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

      {/* Table of Contents (Sticky) */}
      <TableOfContents content={caseStudy.content} />
    </div>
  );
}
