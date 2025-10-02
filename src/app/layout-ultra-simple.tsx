import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Nayzex - Debug",
  description: "Debug version",
};

export default function RootLayoutUltraSimple({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
