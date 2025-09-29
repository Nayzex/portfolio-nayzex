'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="border-t"
      style={{ 
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-stroke)'
      }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-ink)' }}>
              {t('contact.title')}
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" style={{ color: 'var(--color-ink-subtle)' }} />
                <a 
                  href="mailto:hello@nayzex.com"
                  className="hover:text-[var(--color-accent-a-base)] transition-colors"
                  style={{ color: 'var(--color-ink-subtle)' }}
                >
                  {t('contact.email')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" style={{ color: 'var(--color-ink-subtle)' }} />
                <a 
                  href="tel:+33612345678"
                  className="hover:text-[var(--color-accent-a-base)] transition-colors"
                  style={{ color: 'var(--color-ink-subtle)' }}
                >
                  {t('contact.phone')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" style={{ color: 'var(--color-ink-subtle)' }} />
                <span style={{ color: 'var(--color-ink-subtle)' }}>
                  {t('contact.location')}
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-ink)' }}>
              {t('services.title')}
            </h3>
            <div className="space-y-2 text-sm">
              <div style={{ color: 'var(--color-ink-subtle)' }}>
                {t('services.web')}
              </div>
              <div style={{ color: 'var(--color-ink-subtle)' }}>
                {t('services.mobile')}
              </div>
              <div style={{ color: 'var(--color-ink-subtle)' }}>
                {t('services.ux')}
              </div>
              <div style={{ color: 'var(--color-ink-subtle)' }}>
                {t('services.seo')}
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-ink)' }}>
              {t('stack.title')}
            </h3>
            <div className="space-y-2 text-sm">
              <div style={{ color: 'var(--color-ink-subtle)' }}>
                {t('stack.frontend')}
              </div>
              <div style={{ color: 'var(--color-ink-subtle)' }}>
                {t('stack.backend')}
              </div>
              <div style={{ color: 'var(--color-ink-subtle)' }}>
                {t('stack.mobile')}
              </div>
              <div style={{ color: 'var(--color-ink-subtle)' }}>
                {t('stack.tools')}
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-ink)' }}>
              {t('social.title')}
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/nathansiwek"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-accent-a-base)] transition-colors"
                style={{ color: 'var(--color-ink-subtle)' }}
                aria-label={t('social.linkedin')}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/nayzex"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-accent-a-base)] transition-colors"
                style={{ color: 'var(--color-ink-subtle)' }}
                aria-label={t('social.github')}
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/nayzex"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-accent-a-base)] transition-colors"
                style={{ color: 'var(--color-ink-subtle)' }}
                aria-label={t('social.twitter')}
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div 
          className="mt-8 pt-8 border-t text-center text-sm"
          style={{ 
            borderColor: 'var(--color-stroke)',
            color: 'var(--color-ink-subtle)'
          }}
        >
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
