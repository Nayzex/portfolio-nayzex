'use client';

import Image from 'next/image';
import { Quote } from 'lucide-react';
import Link from 'next/link';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar: string;
  rating?: number;
  className?: string;
}

export default function TestimonialCard({ 
  quote, 
  author, 
  role, 
  company = "", 
  avatar,
  rating = 5,
  className = "" 
}: TestimonialCardProps) {
  return (
    <Link href="/testimonials" className="block">
      <div
        className={`p-6 rounded-xl relative hover:-translate-y-1 transition-transform duration-300 border border-gray-700 cursor-pointer ${className}`}
        style={{ backgroundColor: '#343a40' }}
      >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 opacity-20">
        <Quote className="w-8 h-8 text-violet-500" />
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
      <blockquote className="text-body mb-6 leading-relaxed italic text-white">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 flex items-center justify-center text-white font-semibold bg-violet-600">
          {author.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="font-semibold text-sm text-white">
            {author}
          </div>
          <div className="text-sm text-gray-300">
            {role}{company ? ` • ${company}` : ''}
          </div>
        </div>
      </div>
      </div>
    </Link>
  );
}
