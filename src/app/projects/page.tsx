import type { Metadata } from 'next';
import ProjectsPageClient from './ProjectsPageClient';

export const metadata: Metadata = {
  title: "Projets | Portfolio Nathan Siwek - Nayzex",
  description: "Découvrez mes réalisations en développement web et mobile. Case studies détaillées, technologies utilisées, résultats obtenus.",
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}