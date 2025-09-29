'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ProjectCard from '@/components/cards/ProjectCard';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform for Fashion Retailer",
    description: "A robust e-commerce platform with advanced features. Focusing on user experience and high conversion rates. Responsive design across all devices.",
    image: "/images/project-ecommerce.jpg",
    href: "/case-studies/ecommerce-platform",
    tags: ["React", "Next.js", "Stripe", "PostgreSQL"],
    category: "Web",
    featured: true
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "A secure and user-friendly mobile banking application. Real-time transactions, biometric authentication, and comprehensive financial management.",
    image: "/images/project-banking.jpg",
    href: "/case-studies/mobile-banking",
    tags: ["React Native", "Node.js", "MongoDB", "Biometrics"],
    category: "Mobile",
    featured: true
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for managing social media accounts. Analytics, scheduling, and multi-platform integration for content creators.",
    image: "/images/project-social.jpg",
    href: "/case-studies/social-dashboard",
    tags: ["Vue.js", "Python", "Redis", "GraphQL"],
    category: "Web",
    featured: true
  },
  {
    id: 4,
    title: "Fitness Tracking App with Personalized Workouts",
    description: "Created a fitness app with real-time tracking, personalized workout plans and social sharing features. iOS and Android compatible.",
    image: "/images/project-fitness.jpg",
    href: "/case-studies/fitness-app",
    tags: ["React Native", "Node.js", "MongoDB", "HealthKit"],
    category: "Mobile",
    featured: false
  },
  {
    id: 5,
    title: "Project Management Tool for Creative Agencies",
    description: "Designed and built a comprehensive project management platform with time tracking, collaboration tools and automated reporting.",
    image: "/images/project-management.jpg",
    href: "/case-studies/project-management",
    tags: ["Vue.js", "Laravel", "PostgreSQL", "WebSocket"],
    category: "Web",
    featured: false
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "An educational platform with video streaming, interactive quizzes, and progress tracking. Built for remote learning institutions.",
    image: "/images/project-lms.jpg",
    href: "/case-studies/learning-management",
    tags: ["React", "Node.js", "Video.js", "AWS"],
    category: "Web",
    featured: false
  },
  {
    id: 7,
    title: "Food Delivery Mobile App",
    description: "A cross-platform food delivery application with real-time tracking, payment integration, and restaurant management system.",
    image: "/images/project-food.jpg",
    href: "/case-studies/food-delivery",
    tags: ["Flutter", "Firebase", "Stripe", "Maps"],
    category: "Mobile",
    featured: false
  },
  {
    id: 8,
    title: "Real Estate Platform",
    description: "A comprehensive real estate platform with property listings, virtual tours, and mortgage calculator. Advanced search and filtering.",
    image: "/images/project-realestate.jpg",
    href: "/case-studies/real-estate",
    tags: ["Next.js", "Prisma", "3D Tours", "Payment"],
    category: "Web",
    featured: false
  },
  {
    id: 9,
    title: "Meditation & Wellness App",
    description: "A mindfulness app with guided meditations, sleep stories, and mood tracking. Available on iOS and Android with offline content.",
    image: "/images/project-meditation.jpg",
    href: "/case-studies/meditation-app",
    tags: ["React Native", "Audio", "Analytics", "Offline"],
    category: "Mobile",
    featured: false
  }
];

const categories = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' }
];

export default function ProjectsPage() {
  const t = useTranslations('projects');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || 
                             project.category.toLowerCase() === selectedCategory.toLowerCase();
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="mb-6">Projects</h1>
        <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
          A selection of my work, showcasing my expertise in web and mobile development.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: 'var(--color-ink-subtle)' }} />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filters */}
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={selectedCategory === category.key ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.key)}
                className={`transition-colors ${
                  selectedCategory === category.key 
                    ? 'bg-[var(--color-accent-a-base)] text-white hover:bg-[var(--color-accent-a-hover)]' 
                    : 'border-[var(--color-stroke)] text-[var(--color-ink-subtle)] hover:text-[var(--color-accent-a-base)]'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Active filters display */}
        {(searchTerm || selectedCategory !== 'all') && (
          <div className="mt-4 flex items-center gap-2 flex-wrap">
            <span className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
              Active filters:
            </span>
            {searchTerm && (
              <Badge 
                variant="secondary" 
                className="cursor-pointer"
                onClick={() => setSearchTerm('')}
              >
                Search: "{searchTerm}" ×
              </Badge>
            )}
            {selectedCategory !== 'all' && (
              <Badge 
                variant="secondary"
                className="cursor-pointer"
                onClick={() => setSelectedCategory('all')}
              >
                Category: {categories.find(c => c.key === selectedCategory)?.label} ×
              </Badge>
            )}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-xs"
            >
              Clear all
            </Button>
          </div>
        )}
      </div>

      {/* Results count */}
      <div className="mb-8">
        <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              href={project.href}
              tags={project.tags}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16">
          <div 
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <Filter className="w-12 h-12" style={{ color: 'var(--color-ink-subtle)' }} />
          </div>
          <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-ink)' }}>
            No projects found
          </h3>
          <p className="text-body mb-6" style={{ color: 'var(--color-ink-subtle)' }}>
            Try adjusting your search terms or filters to find what you're looking for.
          </p>
          <Button 
            variant="outline"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
          >
            Clear filters
          </Button>
        </div>
      )}

      {/* Pagination would go here for larger datasets */}
      {filteredProjects.length > 6 && (
        <div className="mt-16 flex justify-center">
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button variant="default" size="sm" className="bg-[var(--color-accent-a-base)] text-white">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
