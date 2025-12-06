import type { Metadata } from 'next';
import { HomePageClient } from '@/features/home';

export const metadata: Metadata = {
  title: "Développeur Web & Mobile | Portfolio Nathan Siwek - Nayzex",
  description: "Créons ensemble votre prochain projet digital. Spécialisé en React, Next.js, React Native. Solutions web et mobile sur mesure.",
};

export default function HomePage() {
  return <HomePageClient />;
}