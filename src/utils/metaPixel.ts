/**
 * Meta Pixel Integration & Event Tracking Helper
 * Pixel ID: 1487236183253849
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export const META_PIXEL_ID = '1487236183253849';

/**
 * Track standard Meta Pixel event (e.g., 'PageView', 'Lead', 'Contact', 'InitiateCheckout', 'ViewContent')
 */
export const trackMetaEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      if (params) {
        window.fbq('track', eventName, params);
      } else {
        window.fbq('track', eventName);
      }
    } catch (e) {
      console.warn('Meta Pixel track error:', e);
    }
  }
};

/**
 * Track custom Meta Pixel event (e.g., 'WhatsAppClick')
 */
export const trackMetaCustomEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      if (params) {
        window.fbq('trackCustom', eventName, params);
      } else {
        window.fbq('trackCustom', eventName);
      }
    } catch (e) {
      console.warn('Meta Pixel custom track error:', e);
    }
  }
};
