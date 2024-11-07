/* -------------------------------------------------------------------------- */
/*                              Footer Constants                              */
/* -------------------------------------------------------------------------- */

import { SITE_CONFIG } from '@/config/site';
import type { FooterContact, FooterHours } from './types';

export const FOOTER_CONTACT: FooterContact = {
  address: {
    street: SITE_CONFIG.location.street,
    locality: SITE_CONFIG.location.locality,
    region: SITE_CONFIG.location.region,
  },
  phone: SITE_CONFIG.contact.phone,
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
