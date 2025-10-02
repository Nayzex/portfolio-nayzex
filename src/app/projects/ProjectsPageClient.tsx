'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  // Données des projets
  const projects = [
    {
      id: 'ctmhb-handball-management',
      title: 'CTMHB - Gestion de Club de Handball',
      description: 'Application web complète pour la gestion d\'un club de handball.',
      longDescription: 'Application web complète pour la gestion d\'un club de handball : gestion des équipes, planning des matchs, réservation des emplacements, suivi des joueurs et administration du club. Interface intuitive pour les administrateurs et les membres.',
      image: '/images/projects/ctmhb-handball-management/CTMHB logo.png',
      tags: ['Angular', 'Symfony', 'PostgreSQL'],
      category: 'Web Development',
      status: 'En cours',
      year: '2024',
    },
    {
      id: 'fitness-tracker',
      title: 'Fitness Tracker App',
      description: 'Application mobile complète pour le suivi d\'entraînements et nutrition.',
      longDescription: 'Application mobile pour le suivi d\'activités sportives avec synchronisation des données de santé, planification d\'entraînements et coaching nutritionnel personnalisé.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
      tags: ['React Native', 'TypeScript', 'HealthKit'],
      category: 'Mobile Development',
      status: 'Terminé',
      year: '2024',
    },
    {
      id: 'gym-management',
      title: 'Gym Management Platform',
      description: 'Plateforme web pour la gestion de salles de sport.',
      longDescription: 'Plateforme complète pour la gestion de salles de sport avec réservation de créneaux, suivi des membres, gestion des paiements et analytics.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&crop=center',
      tags: ['React', 'Next.js', 'Stripe'],
      category: 'Web Development',
      status: 'Terminé',
      year: '2024',
    },
    {
      id: 'nutrition-app',
      title: 'Nutrition Coach App',
      description: 'Application de coaching nutritionnel avec IA.',
      longDescription: 'Application mobile de coaching nutritionnel avec recommandations personnalisées basées sur l\'IA, suivi des macros et recettes adaptées.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center',
      tags: ['React Native', 'AI/ML', 'Firebase'],
      category: 'Mobile Development',
      status: 'En cours',
      year: '2024',
    },
    {
      id: 'workout-planner',
      title: 'Workout Planner Dashboard',
      description: 'Interface web pour planification d\'entraînements.',
      longDescription: 'Dashboard web pour la planification d\'entraînements personnalisés avec vidéos d\'exercices, suivi de progression et partage entre coachs et athlètes.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop&crop=center',
      tags: ['Vue.js', 'TypeScript', 'Node.js'],
      category: 'Web Development',
      status: 'Terminé',
      year: '2023',
    },
    {
      id: 'body-analysis-ai',
      title: 'Body Analysis AI',
      description: 'IA pour l\'analyse corporelle et recommandations.',
      longDescription: 'Système d\'IA pour l\'analyse corporelle via photos, calcul automatique des mesures et recommandations personnalisées d\'entraînement.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
      tags: ['Python', 'OpenAI', 'Computer Vision'],
      category: 'AI & Machine Learning',
      status: 'En cours',
      year: '2024',
    },
    {
      id: 'supplement-tracker',
      title: 'Supplement Tracker',
      description: 'Application de suivi des compléments alimentaires.',
      longDescription: 'Application mobile pour le suivi des compléments alimentaires avec rappels, interactions médicamenteuses et optimisation des dosages.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center',
      tags: ['React Native', 'HealthKit', 'MongoDB'],
      category: 'Mobile Development',
      status: 'Prototype',
      year: '2024',
    },
  ];

  const categories = ['Tous', 'Web Development', 'Mobile Development', 'AI & Machine Learning'];

  // Filtrer les projets selon la catégorie sélectionnée
  const filteredProjects = selectedCategory === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4">Mes Projets</h1>
            <p className="text-lead mb-6 text-ink-subtle">
              Découvrez mes réalisations récentes en développement web et mobile. Chaque projet reflète mon expertise technique et ma passion pour l'innovation.
            </p>
            
            {/* Filtres par catégories */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`border transition-colors ${
                    selectedCategory === category
                      ? 'bg-violet-600 hover:bg-violet-600 text-white border-violet-600 font-semibold'
                      : 'bg-white text-black hover:text-violet-600 border-gray-300'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* Compteur de projets */}
            <div className="mt-4 text-sm text-gray-600">
              {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} 
              {selectedCategory !== 'Tous' && ` en ${selectedCategory}`}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700 h-full flex flex-col" style={{ backgroundColor: '#343a40' }}>
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Terminé' ? 'bg-green-100 text-green-700' :
                      project.status === 'En cours' ? 'bg-blue-100 text-blue-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-black/70 text-white">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-violet-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-2 flex-grow">
                    {project.longDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-violet-100 text-violet-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-auto">
                    <Button size="sm" asChild className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300 flex-1">
                      <Link href={`/case-studies/${project.id}`} className="text-black hover:text-violet-600 flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Voir le projet
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Message si aucun projet */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Aucun projet trouvé pour cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-accent-a-base)' }}>
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="mb-6 text-white">Intéressé par mon travail ?</h2>
          <p className="text-lg mb-8 opacity-90">
            Discutons de votre prochain projet et voyons comment nous pouvons créer quelque chose d'exceptionnel ensemble.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300"
              asChild
            >
              <Link href="/contact" className="text-black hover:text-violet-600">
                Démarrer un projet
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300"
              asChild
            >
              <Link href="/about" className="text-black hover:text-violet-600">
                En savoir plus sur moi
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
