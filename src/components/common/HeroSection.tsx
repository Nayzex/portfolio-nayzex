interface HeroSectionProps {
  title: string;
  description: string;
  backgroundColor?: string;
  className?: string;
}

export default function HeroSection({ 
  title, 
  description, 
  backgroundColor = 'var(--color-surface)',
  className = ''
}: HeroSectionProps) {
  return (
    <section className={`py-12 lg:py-16 ${className}`} style={{ backgroundColor }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-4">{title}</h1>
          <p className="text-lead mb-6 text-ink-subtle">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
