'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePageClientDebug() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Portfolio Nayzex - Debug</h1>
      <p className="text-lg mb-6">Version simplifiée pour débugger l&apos;erreur.</p>
      
      <div className="space-y-4">
        <Button asChild>
          <Link href="/contact">Contact</Link>
        </Button>
        
        <Button variant="outline" asChild>
          <Link href="/projects">Projets</Link>
        </Button>
      </div>
    </div>
  );
}
