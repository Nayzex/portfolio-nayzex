'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  price: string;
  className?: string;
}

export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  price,
  className = "" 
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`p-6 rounded-xl group ${className}`}
      style={{ 
        backgroundColor: 'var(--color-surface)',
        boxShadow: 'var(--shadow-md)'
      }}
    >
      {/* Icon */}
      <div 
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200"
        style={{ backgroundColor: 'var(--color-accent-a-subtle)' }}
      >
        <div style={{ color: 'var(--color-accent-a-base)' }}>
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-ink)' }}>
        {title}
      </h3>
      
      <p 
        className="text-body mb-4 leading-relaxed" 
        style={{ color: 'var(--color-ink-subtle)' }}
      >
        {description}
      </p>

      {/* Price */}
      <div className="flex items-center justify-between">
        <span 
          className="text-lg font-semibold"
          style={{ color: 'var(--color-accent-a-base)' }}
        >
          {price}
        </span>
        <motion.div
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            style={{ color: 'var(--color-accent-a-base)' }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
