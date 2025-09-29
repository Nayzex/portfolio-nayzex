import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface CaseStudyMeta {
  title: string;
  abstract: string;
  date: string;
  roles: string[];
  timeline: string;
  tags: string[];
  stack: string[];
  kpis: { label: string; value: string }[];
  cover: string;
  gallery?: string[];
  slug: string;
}

export interface CaseStudy {
  meta: CaseStudyMeta;
  content: string;
}

const caseStudiesDirectory = path.join(process.cwd(), 'content/case-studies');

export function getAllCaseStudySlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(caseStudiesDirectory);
    return fileNames
      .filter(name => name.endsWith('.mdx'))
      .map(name => name.replace(/\.mdx$/, ''));
  } catch (error) {
    console.warn('Case studies directory not found, returning empty array');
    return [];
  }
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  try {
    const fullPath = path.join(caseStudiesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      meta: {
        ...data,
        slug,
      } as CaseStudyMeta,
      content,
    };
  } catch (error) {
    console.error(`Error reading case study ${slug}:`, error);
    return null;
  }
}

export function getAllCaseStudies(): CaseStudy[] {
  const slugs = getAllCaseStudySlugs();
  return slugs
    .map(slug => getCaseStudyBySlug(slug))
    .filter((study): study is CaseStudy => study !== null)
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
}

export function getAdjacentCaseStudies(currentSlug: string): { 
  previous: CaseStudy | null; 
  next: CaseStudy | null; 
} {
  const allStudies = getAllCaseStudies();
  const currentIndex = allStudies.findIndex(study => study.meta.slug === currentSlug);
  
  return {
    previous: currentIndex > 0 ? allStudies[currentIndex - 1] : null,
    next: currentIndex < allStudies.length - 1 ? allStudies[currentIndex + 1] : null,
  };
}
