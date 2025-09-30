'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { plausible } from '@/lib/analytics/plausible';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Projets', href: '/projects' },
    { name: 'Services & Stack', href: '/services-and-stack' },
    { name: 'Processus', href: '/process' },
    { name: 'À propos', href: '/about' },
    { name: 'Témoignages', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent-a-base rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-bold text-lg">Nayzex</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent-a-base ${
                  pathname === item.href
                    ? 'text-accent-a-base'
                    : 'text-ink-subtle'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTAs Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              asChild
              onClick={() => plausible('CTA Click', { props: { location: 'Header WhatsApp' } })}
            >
              <a href="https://wa.me/33123456789" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
            <Button 
              size="sm"
              asChild
              onClick={() => plausible('CTA Click', { props: { location: 'Header Quote' } })}
            >
              <Link href="/contact">
                Demander un devis
              </Link>
            </Button>
          </div>

          {/* Menu Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Navigation Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-accent-a-base ${
                    pathname === item.href
                      ? 'text-accent-a-base bg-accent-a-base/10'
                      : 'text-ink-subtle'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                  onClick={() => plausible('CTA Click', { props: { location: 'Mobile Header WhatsApp' } })}
                >
                  <a href="https://wa.me/33123456789" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Button>
                <Button 
                  size="sm"
                  asChild
                  onClick={() => plausible('CTA Click', { props: { location: 'Mobile Header Quote' } })}
                >
                  <Link href="/contact">
                    Demander un devis
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}