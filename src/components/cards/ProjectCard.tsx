'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  tags?: string[];
  className?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  href, 
  tags = [],
  className = "" 
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`group relative overflow-hidden rounded-xl ${className}`}
      style={{ 
        backgroundColor: 'var(--color-surface)',
        boxShadow: 'var(--shadow-md)'
      }}
    >
      <Link href={href} className="block">
        {/* Image */}
        <div 
          className="relative aspect-[4/3] overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: 'var(--color-accent-b-subtle)' }}
        >
          <div style={{ color: 'var(--color-accent-b-base)' }}>
            <Smartphone className="w-16 h-16" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--color-accent-a-base)] transition-colors">
            {title}
          </h3>
          <p 
            className="text-body mb-4 line-clamp-2" 
            style={{ color: 'var(--color-ink-subtle)' }}
          >
            {description}
          </p>
          
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{ 
                    backgroundColor: 'var(--color-accent-a-subtle)',
                    color: 'var(--color-accent-a-base)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
