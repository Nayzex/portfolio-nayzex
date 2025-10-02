import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals-simple.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Nayzex | Test Debug",
  description: "Version debug du portfolio",
};

export default function RootLayoutSimple({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
