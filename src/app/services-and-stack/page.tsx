import type { Metadata } from 'next';
import { ServicesPageClient } from '@/features/services';

export const metadata: Metadata = {
  title: "Services & Stack | Portfolio Nathan Siwek - Nayzex",
  description: "Découvrez mes services de développement web et mobile, ainsi que les technologies que j'utilise : React, Next.js, React Native, TypeScript...",
};

export default function ServicesAndStackPage() {
  return <ServicesPageClient />;
}