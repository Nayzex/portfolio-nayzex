import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Geist, Geist_Mono } from "next/font/google";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
