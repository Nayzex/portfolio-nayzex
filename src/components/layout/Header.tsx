'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/common/ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const pathname = usePathname();

  // Fermer le menu quand on change de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Gérer la fermeture avec animation
  const handleCloseMenu = () => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsMenuClosing(false);
    }, 300); // Durée de l'animation
  };

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
    <header className="sticky top-0 z-50 w-screen border-b border-gray-700" style={{ backgroundColor: '#000000' }}>
      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Theme Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent-a-base rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-lg text-white">Nayzex</span>
            </Link>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-violet-400 border-b-2 ${
                  pathname === item.href
                    ? 'text-violet-600 font-semibold border-violet-600'
                    : 'text-white border-transparent'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTAs Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              size="sm"
              asChild
              className="bg-violet-600 hover:bg-violet-700 text-white border-0"
            >
              <Link href="/contact" className="text-white">
                Demander un devis
              </Link>
            </Button>
          </div>

          {/* Menu Mobile Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors relative z-50"
            onClick={() => isMenuOpen ? handleCloseMenu() : setIsMenuOpen(true)}
            aria-label="Toggle menu"
            style={{ color: '#ffffff' }}
          >
            {isMenuOpen ? (
              <X className="h-8 w-8" style={{ stroke: '#ffffff', strokeWidth: 2 }} />
            ) : (
              <Menu className="h-8 w-8" style={{ stroke: '#ffffff', strokeWidth: 2 }} />
            )}
          </button>
        </div>

        {/* Navigation Mobile - Menu Burger */}
        {isMenuOpen && (
          <>
            {/* Overlay pour fermer le menu en cliquant en dehors */}
            <div
              className={`md:hidden fixed inset-0 bg-black/50 z-40 top-16 ${isMenuClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
              onClick={handleCloseMenu}
            />
            {/* Menu */}
            <div
              className={`md:hidden fixed left-0 right-0 top-16 bottom-0 z-50 overflow-y-auto border-t border-gray-700 shadow-lg ${isMenuClosing ? 'animate-slide-up' : 'animate-slide-down'}`}
              style={{ backgroundColor: '#000000' }}
            >
              <div className="px-4 py-6 space-y-2">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                      pathname === item.href
                        ? 'text-violet-600 bg-violet-600/10 font-semibold'
                        : 'text-white hover:bg-gray-800 active:bg-gray-700'
                    }`}
                    style={{
                      animation: isMenuClosing ? 'none' : `fadeInSlideUp 0.3s ease-out ${index * 0.05}s both`
                    }}
                    onClick={handleCloseMenu}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 pt-6 border-t border-gray-700 mt-6">
                  <Button
                    size="lg"
                    asChild
                    className="bg-violet-600 hover:bg-violet-700 text-white border-0 w-full"
                    style={{
                      animation: isMenuClosing ? 'none' : 'fadeInSlideUp 0.3s ease-out 0.35s both'
                    }}
                  >
                    <Link href="/contact" className="text-white" onClick={handleCloseMenu}>
                      Demander un devis
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}