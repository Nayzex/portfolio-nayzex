'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating?: number;
  className?: string;
}

export default function TestimonialCard({ 
  quote, 
  author, 
  role, 
  company, 
  avatar,
  rating = 5,
  className = "" 
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`p-6 rounded-xl relative ${className}`}
      style={{ 
        backgroundColor: 'var(--color-surface)',
        boxShadow: 'var(--shadow-md)'
      }}
    >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 opacity-20">
        <Quote 
          className="w-8 h-8" 
          style={{ color: 'var(--color-accent-a-base)' }}
        />
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote 
        className="text-body mb-6 leading-relaxed italic"
        style={{ color: 'var(--color-ink)' }}
      >
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center">
        <div 
          className="relative w-12 h-12 rounded-full overflow-hidden mr-4 flex items-center justify-center text-white font-semibold"
          style={{ backgroundColor: 'var(--color-accent-a-base)' }}
        >
          {author.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div 
            className="font-semibold text-sm"
            style={{ color: 'var(--color-ink)' }}
          >
            {author}
          </div>
          <div 
            className="text-sm"
            style={{ color: 'var(--color-ink-subtle)' }}
          >
            {role} • {company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
