import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  
  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  return <HomePageClient locale={locale} />;
}
