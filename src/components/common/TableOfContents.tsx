'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
  className?: string;
}

export default function TableOfContents({ content, className = '' }: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  // Extract headings from content to build TOC
  useEffect(() => {
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    const items: TocItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const title = match[2].trim();
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      
      items.push({ id, title, level });
    }

    setToc(items);
  }, [content]);

  // Track scroll position and update active heading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries.reduce((top, entry) => {
            return entry.boundingClientRect.top < top.boundingClientRect.top ? entry : top;
          });
          setActiveId(topEntry.target.id);
        }
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      }
    );

    // Observe all headings
    toc.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [toc]);

  // Show/hide TOC based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldShow = scrollTop > 300; // Show after scrolling 300px
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (toc.length === 0) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.2 }}
          className={`hidden lg:block fixed top-1/2 right-8 transform -translate-y-1/2 z-40 ${className}`}
        >
          <div 
            className="p-4 rounded-xl shadow-lg backdrop-blur-sm max-w-xs"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid var(--color-stroke)' }}
          >
            <h4 className="text-sm font-semibold mb-3" style={{ color: 'var(--color-ink)' }}>
              Table of Contents
            </h4>
            <ul className="space-y-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToHeading(item.id)}
                    className={`text-left text-sm w-full transition-colors hover:text-[var(--color-accent-a-base)] ${
                      activeId === item.id 
                        ? 'text-[var(--color-accent-a-base)] font-medium' 
                        : 'text-[var(--color-ink-subtle)]'
                    }`}
                    style={{ 
                      paddingLeft: `${(item.level - 1) * 12}px`,
                      lineHeight: '1.4'
                    }}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
