'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const navigation = {
    contact: [
      { name: 'Email', href: 'mailto:contact@nayzex.dev' },
      { name: 'WhatsApp', href: 'https://wa.me/33123456789' },
      { name: 'Formulaire', href: '/contact' },
    ],
    services: [
      { name: 'Développement Web', href: '/services-and-stack#web' },
      { name: 'Applications Mobile', href: '/services-and-stack#mobile' },
      { name: 'Design UI/UX', href: '/services-and-stack#design' },
      { name: 'Consulting', href: '/services-and-stack#consulting' },
    ],
    tech: [
      { name: 'React & Next.js', href: '/services-and-stack#react' },
      { name: 'React Native', href: '/services-and-stack#mobile' },
      { name: 'TypeScript', href: '/services-and-stack#typescript' },
      { name: 'Node.js', href: '/services-and-stack#backend' },
    ],
    company: [
      { name: 'À propos', href: '/about' },
      { name: 'Projets', href: '/projects' },
      { name: 'Processus', href: '/process' },
      { name: 'Témoignages', href: '/testimonials' },
    ],
  };

  const social = [
    { name: 'GitHub', href: 'https://github.com', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { name: 'Email', href: 'mailto:contact@nayzex.dev', icon: Mail },
  ];

  return (
    <footer className="bg-surface border-t">
      <div className="container mx-auto px-4">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-accent-a-base rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="font-bold text-lg">Nayzex</span>
              </Link>
              <p className="text-ink-subtle mb-4 max-w-sm">
                Développeur Web & Mobile spécialisé en React, Next.js et React Native. 
                Créons ensemble votre prochain projet digital.
              </p>
              <div className="flex space-x-4">
                {social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-ink-subtle hover:text-accent-a-base transition-colors"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-ink mb-4">Contact</h3>
              <ul className="space-y-2">
                {navigation.contact.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-ink-subtle hover:text-accent-a-base transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-ink mb-4">Services</h3>
              <ul className="space-y-2">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-ink-subtle hover:text-accent-a-base transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-semibold text-ink mb-4">Technologies</h3>
              <ul className="space-y-2">
                {navigation.tech.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-ink-subtle hover:text-accent-a-base transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-ink mb-4">Portfolio</h3>
              <ul className="space-y-2">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-ink-subtle hover:text-accent-a-base transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-ink-subtle text-sm">
              © {new Date().getFullYear()} Nayzex - Nathan Siwek. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/legal/privacy" className="text-ink-subtle hover:text-accent-a-base transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/legal/terms" className="text-ink-subtle hover:text-accent-a-base transition-colors">
                Conditions d'utilisation
              </Link>
              <Link href="/legal/mentions" className="text-ink-subtle hover:text-accent-a-base transition-colors">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}