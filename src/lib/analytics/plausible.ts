'use client';

// Plausible analytics utility
declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
  }
}

export const plausible = {
  // Track custom events
  event: (eventName: string, props?: Record<string, string | number>) => {
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible(eventName, { props });
    } else if (process.env.NODE_ENV === 'development') {
      console.log('Plausible event:', eventName, props);
    }
  },

  // Track page views (handled automatically by Plausible script)
  pageView: (page?: string) => {
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible('pageview', page ? { props: { page } } : undefined);
    }
  },

  // Predefined events for the portfolio
  trackHeroCTA: (ctaType: 'primary' | 'secondary', page: string) => {
    plausible.event('Hero CTA Click', {
      cta_type: ctaType,
      page: page
    });
  },

  trackProjectView: (projectTitle: string, source: 'homepage' | 'projects_page') => {
    plausible.event('Project View', {
      project: projectTitle,
      source: source
    });
  },

  trackContactFormSubmit: (formType: 'contact_page' | 'quick_contact') => {
    plausible.event('Contact Form Submit', {
      form_type: formType
    });
  },

  trackWhatsAppClick: (location: string) => {
    plausible.event('WhatsApp Click', {
      location: location
    });
  },

  trackDownloadCV: () => {
    plausible.event('CV Download');
  },

  trackExternalLink: (url: string, linkText: string) => {
    plausible.event('External Link Click', {
      url: url,
      link_text: linkText
    });
  },

  trackServiceInquiry: (service: string) => {
    plausible.event('Service Inquiry', {
      service: service
    });
  },

  trackTestimonialInteraction: (action: 'view' | 'navigate') => {
    plausible.event('Testimonial Interaction', {
      action: action
    });
  },

  trackLanguageSwitch: (fromLang: string, toLang: string) => {
    plausible.event('Language Switch', {
      from: fromLang,
      to: toLang
    });
  },

  trackSearchQuery: (query: string, resultsCount: number) => {
    plausible.event('Project Search', {
      query: query,
      results_count: resultsCount
    });
  },

  trackFilterUsage: (filterType: 'category' | 'search', filterValue: string) => {
    plausible.event('Filter Usage', {
      filter_type: filterType,
      filter_value: filterValue
    });
  }
};

// Hook for tracking page views in Next.js
export const usePlausiblePageView = () => {
  const trackPageView = (page: string) => {
    plausible.pageView(page);
  };

  return trackPageView;
};
