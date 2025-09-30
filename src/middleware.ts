import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['fr', 'en'],
  
  // Used when no locale matches
  defaultLocale: 'fr',
  
  // Always prefix the pathname with the locale
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames  
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
