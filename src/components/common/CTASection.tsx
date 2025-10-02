import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  className?: string;
}

export default function CTASection({ 
  title, 
  description, 
  primaryButton, 
  secondaryButton,
  className = ''
}: CTASectionProps) {
  return (
    <section className={`py-16 lg:py-24 ${className}`} style={{ backgroundColor: 'var(--color-accent-a-base)' }}>
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="mb-6 text-white">{title}</h2>
        <p className="text-lg mb-8 opacity-90 text-white/80">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            asChild
            className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300"
          >
            <Link href={primaryButton.href} className="text-black hover:text-violet-600">
              {primaryButton.text}
            </Link>
          </Button>
          {secondaryButton && (
            <Button
              size="lg"
              asChild
              className="bg-white hover:bg-white text-black hover:text-violet-600 border border-gray-300"
            >
              <Link href={secondaryButton.href} className="text-black hover:text-violet-600">
                {secondaryButton.text}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
