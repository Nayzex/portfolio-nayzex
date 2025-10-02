interface AlternatingSectionProps {
  children: React.ReactNode;
  backgroundColor?: 'surface' | 'bg' | 'accent';
  className?: string;
}

export default function AlternatingSection({ 
  children, 
  backgroundColor = 'surface',
  className = ''
}: AlternatingSectionProps) {
  const getBackgroundColor = () => {
    switch (backgroundColor) {
      case 'surface':
        return 'var(--color-surface)';
      case 'bg':
        return 'var(--color-bg)';
      case 'accent':
        return 'var(--color-accent-a-base)';
      default:
        return 'var(--color-surface)';
    }
  };

  return (
    <section 
      className={`py-16 lg:py-24 ${className}`} 
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
