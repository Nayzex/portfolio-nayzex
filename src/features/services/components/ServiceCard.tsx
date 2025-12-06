'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  price?: string;
  color?: string;
  className?: string;
}

export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  price,
  color = "var(--color-accent-a-base)",
  className = "" 
}: ServiceCardProps) {
  return (
    <Link href="/services-and-stack" className="block">
      <div
        className={`p-4 md:p-6 rounded-xl group hover:-translate-y-1 transition-all duration-300 border border-gray-700 cursor-pointer h-full flex flex-col ${className}`}
        style={{ backgroundColor: '#343a40' }}
      >
      {/* Icon */}
      <div
        className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg"
        style={{ backgroundColor: color }}
      >
        <div className="text-white scale-100 md:scale-125">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3 text-white">
        {title}
      </h3>

      <p className="text-sm md:text-body mb-2 md:mb-4 leading-relaxed text-gray-300 flex-grow">
        {description}
      </p>

      {/* Price - optionnel */}
      {price && (
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-semibold text-violet-500">
            {price}
          </span>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <svg 
              className="w-5 h-5 text-violet-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </div>
        </div>
      )}
      </div>
    </Link>
  );
}
