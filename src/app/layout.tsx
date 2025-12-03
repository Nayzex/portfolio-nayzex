import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from 'sonner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PlausibleAnalytics from '@/components/common/PlausibleAnalytics';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Nayzex | Développeur Web & Mobile",
  description: "Portfolio professionnel de Nathan Siwek - Développeur Web & Mobile spécialisé dans React, Next.js et React Native",
  keywords: ["développeur web", "développeur mobile", "React", "Next.js", "TypeScript", "portfolio"],
  authors: [{ name: "Nathan Siwek" }],
  openGraph: {
    title: "Portfolio Nayzex | Développeur Web & Mobile",
    description: "Développeur Web & Mobile spécialisé dans React, Next.js et React Native",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
      </body>
    </html>
  );
}