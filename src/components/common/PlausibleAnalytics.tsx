'use client';

import Script from 'next/script';

interface PlausibleAnalyticsProps {
  domain?: string;
}

export default function PlausibleAnalytics({ domain }: PlausibleAnalyticsProps) {
  const plausibleDomain = domain || process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  
  // Don't load analytics in development unless explicitly enabled
  if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_ENABLE_ANALYTICS) {
    return null;
  }

  if (!plausibleDomain) {
    // Plausible domain not configured - analytics disabled
    return null;
  }

  return (
    <Script
      defer
      data-domain={plausibleDomain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
      onLoad={() => {
        console.log('Plausible Analytics loaded');
      }}
      onError={(e) => {
        console.error('Failed to load Plausible Analytics:', e);
      }}
    />
  );
}
