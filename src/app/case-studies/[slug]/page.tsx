import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { getCaseStudyBySlug, getAdjacentCaseStudies, getAllCaseStudySlugs } from '@/features/case-studies/lib/get-case-studies';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';

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
      <section className="py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12">
            {/* Content */}
            <div className="lg:col-span-2 flex flex-row gap-4 md:block">
              <div className="flex-1">
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-4 md:mb-6 text-xs md:text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                  <div className="flex items-center gap-1 md:gap-2">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="hidden md:inline">
                      {new Date(caseStudy.meta.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="md:hidden">
                      {new Date(caseStudy.meta.date).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <Clock className="w-3 h-3 md:w-4 md:h-4" />
                    {caseStudy.meta.timeline}
                  </div>
                </div>

                {/* Title & Abstract */}
                <h1 className="text-2xl md:text-4xl lg:text-5xl mb-3 md:mb-6">{caseStudy.meta.title}</h1>
                <p className="text-sm md:text-lead mb-4 md:mb-8 leading-relaxed" style={{ color: 'var(--color-ink-subtle)' }}>
                  {caseStudy.meta.abstract}
                </p>

                {/* Roles */}
                <div className="mb-4 md:mb-8">
                  <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-3">Rôles</h3>
                  <ul className="space-y-1 md:space-y-2">
                    {caseStudy.meta.roles.map((role, index) => (
                      <li key={index} className="text-xs md:text-body" style={{ color: 'var(--color-ink-subtle)' }}>
                        • {role}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4 md:mb-8">
                  <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {caseStudy.meta.stack.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-white border-gray-400 text-[10px] md:text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cover Image - visible sur mobile à droite du texte */}
              <div className="lg:hidden w-32 md:w-48 flex-shrink-0">
                <div className={`relative aspect-square rounded-lg overflow-hidden flex items-center justify-center ${caseStudy.meta.id === 'fs-auto' ? 'bg-white/10 p-4' : 'bg-white/5'}`}>
                  {caseStudy.meta.id === 'fs-auto' ? (
                    <Image
                      src={caseStudy.meta.cover}
                      alt={caseStudy.meta.title}
                      width={200}
                      height={200}
                      priority
                      className="object-contain max-w-full max-h-full"
                    />
                  ) : (
                    <Image
                      src={caseStudy.meta.cover}
                      alt={caseStudy.meta.title}
                      fill
                      className="object-cover"
                      priority
                      sizes="128px"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Cover Image - desktop uniquement */}
            <div className="hidden lg:block lg:col-span-1">
              <div className={`relative aspect-[4/3] rounded-xl overflow-hidden flex items-center justify-center ${caseStudy.meta.id === 'fs-auto' ? 'bg-white/10 p-8' : 'bg-white/5'}`}>
                {caseStudy.meta.id === 'fs-auto' ? (
                  <Image
                    src={caseStudy.meta.cover}
                    alt={caseStudy.meta.title}
                    width={700}
                    height={420}
                    priority
                    className="object-contain max-w-full max-h-full"
                  />
                ) : (
                  <Image
                    src={caseStudy.meta.cover}
                    alt={caseStudy.meta.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="33vw"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Gallery */}
      {caseStudy.meta.gallery && caseStudy.meta.gallery.length > 0 && (
        <section className="py-16" style={{ backgroundColor: '#1a1d23' }}>
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
              Prêt à créer quelque chose d&apos;extraordinaire ?
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
