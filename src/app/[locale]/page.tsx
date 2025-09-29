import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

interface HomePageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: HomePageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'home' });
  
  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
  };
}

export default function HomePage({ params }: HomePageProps) {
  return <HomePageClient locale={params.locale} />;
}
