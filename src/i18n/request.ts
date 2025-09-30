import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // Note: Locale validation is handled by middleware
  // We trust that only valid locales reach this request configuration
  
  return {
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
