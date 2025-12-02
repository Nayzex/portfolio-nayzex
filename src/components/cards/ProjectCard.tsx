'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  tags?: string[];
  className?: string;
  id?: string;
  status?: string;
  year?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  href,
  tags = [],
  className = "",
  id = "",
  status,
  year
}: ProjectCardProps) {
  return (
    <Link href={href} className="block">
      <div
        className={`group relative overflow-hidden rounded-xl hover:-translate-y-1 transition-transform duration-300 border border-gray-700 cursor-pointer ${className}`}
        style={{ backgroundColor: '#343a40' }}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
          <Image
            src={image}
            alt={title}
            fill
            className={`${id === 'fs-auto' ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-300`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {status && (
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                status === 'Terminé' ? 'bg-green-100 text-green-700' :
                status === 'En cours' ? 'bg-blue-100 text-blue-700' :
                status === 'En pause' ? 'bg-yellow-100 text-yellow-700' :
                'bg-orange-100 text-orange-700'
              }`}>
                {status}
              </span>
            </div>
          )}
          {year && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-black/70 text-white">
                {year}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-violet-500 transition-colors">
            {title}
          </h3>
          <p className="text-body mb-4 line-clamp-2 text-gray-300">
            {description}
          </p>
          
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-violet-100 text-violet-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
