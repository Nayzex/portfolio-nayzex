import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // Note: Locale validation is handled by middleware
  // We trust that only valid locales reach this request configuration
  
  // Debug logging to see what's happening
  console.log('🔍 i18n/request.ts - locale received:', locale, typeof locale);
  
  // Ensure we have a valid locale, fallback to 'fr' if needed
  const validLocale = locale || 'fr';
  console.log('🔍 i18n/request.ts - using locale:', validLocale);
  
  try {
    const messages = (await import(`../../messages/${validLocale}.json`)).default;
    console.log('✅ i18n/request.ts - messages loaded for:', validLocale);
    return { messages };
  } catch (error) {
    console.error('❌ i18n/request.ts - failed to load messages for:', validLocale, error);
    // Fallback to French messages
    const fallbackMessages = (await import(`../../messages/fr.json`)).default;
    return { messages: fallbackMessages };
  }
});
