import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Toaster } from 'sonner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PlausibleAnalytics from '@/components/common/PlausibleAnalytics';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params;
  
  // Note: Locale validation is handled by middleware
  // We trust that only valid locales reach this layout
  
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: 'var(--color-surface)',
              color: 'var(--color-ink)',
              border: '1px solid var(--color-stroke)',
            },
          }}
        />
        <PlausibleAnalytics />
      </div>
    </NextIntlClientProvider>
  );
}

export function generateStaticParams() {
  const locales = ['fr', 'en'];
  return locales.map((locale) => ({ locale }));
}
