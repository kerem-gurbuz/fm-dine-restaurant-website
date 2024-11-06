import type { FooterContact, FooterHours } from '@/lib/types/layout/footer';

export const FOOTER_CONTACT: FooterContact = {
  address: {
    city: 'MARTHWAITE',
    region: 'SEDBERGH',
    country: 'CUMBRIA',
  },
  phone: '+00 44 123 4567',
};

export const FOOTER_HOURS: FooterHours = {
  weekdays: {
    days: 'MON - FRI',
    hours: '09:00 AM - 10:00 PM',
  },
  weekends: {
    days: 'SAT - SUN',
    hours: '09:00 AM - 11:30 PM',
  },
};
