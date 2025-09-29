'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Globe, Menu, X } from 'lucide-react';

const navigation = [
  { key: 'home', href: '/' },
  { key: 'projects', href: '/projects' },
  { key: 'services', href: '/services-and-stack' },
  { key: 'process', href: '/process' },
  { key: 'about', href: '/about' },
  { key: 'testimonials', href: '/testimonials' },
  { key: 'contact', href: '/contact' },
];

export default function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getLocalizedPath = (href: string, targetLocale?: string) => {
    const currentLocale = targetLocale || locale;
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    const basePath = href === '/' ? '' : href;
    return `/${currentLocale}${basePath}`;
  };

  const isActivePath = (href: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    if (href === '/') {
      return pathWithoutLocale === '' || pathWithoutLocale === '/';
    }
    return pathWithoutLocale.startsWith(href);
  };

  return (
    <header 
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderColor: 'var(--color-stroke)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href={getLocalizedPath('/')}
            className="text-xl font-bold"
            style={{ color: 'var(--color-ink)' }}
          >
            Nayzex
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={getLocalizedPath(item.href)}
                className={`text-sm font-medium transition-colors hover:text-[var(--color-accent-a-base)] ${
                  isActivePath(item.href) 
                    ? 'text-[var(--color-accent-a-base)]' 
                    : 'text-[var(--color-ink-subtle)]'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Change language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={getLocalizedPath(pathname.replace(`/${locale}`, ''), 'fr')}>
                    Français
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={getLocalizedPath(pathname.replace(`/${locale}`, ''), 'en')}>
                    English
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* WhatsApp CTA */}
            <Button
              variant="ghost"
              size="sm"
              className="text-sm"
              asChild
            >
              <a
                href="https://wa.me/33612345678"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('whatsapp')}
              </a>
            </Button>

            {/* Quote CTA */}
            <Button
              size="sm"
              className="text-sm"
              style={{ 
                backgroundColor: 'var(--color-accent-a-base)',
                color: 'white'
              }}
              asChild
            >
              <Link href={getLocalizedPath('/contact')}>
                {t('quote')}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="md:hidden h-8 w-8 p-0"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <div className="flex flex-col space-y-4 py-4">
                {navigation.map((item) => (
                  <Link
                    key={item.key}
                    href={getLocalizedPath(item.href)}
                    className={`text-base font-medium transition-colors py-2 ${
                      isActivePath(item.href) 
                        ? 'text-[var(--color-accent-a-base)]' 
                        : 'text-[var(--color-ink)]'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                ))}
                <div className="pt-4 border-t" style={{ borderColor: 'var(--color-stroke)' }}>
                  <div className="flex flex-col space-y-3">
                    <a
                      href="https://wa.me/33612345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-medium"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      {t('whatsapp')}
                    </a>
                    <Link
                      href={getLocalizedPath('/contact')}
                      className="text-base font-medium"
                      style={{ color: 'var(--color-accent-a-base)' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t('quote')}
                    </Link>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
