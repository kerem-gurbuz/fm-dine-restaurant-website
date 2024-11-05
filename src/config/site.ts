import { env } from './env';

export const SITE_CONFIG = {
  url: env.SITE_URL,
  name: 'Dine Restaurant',
  description:
    'Exquisite dining since 1989 with locally sourced ingredients in beautiful country surroundings.',
  openingHours: {
    weekday: '09:00-22:00',
    weekend: '09:00-23:30',
  },
  location: {
    street: 'Marthwaite',
    locality: 'Sedbergh',
    region: 'Cumbria',
    postalCode: 'LA10 5ED', // Add actual postal code
    country: 'GB',
  },
  geo: {
    latitude: '54.3233', // Add actual coordinates
    longitude: '-2.5281', // Add actual coordinates
  },
  contact: {
    phone: '+00 44 123 4567',
    email: 'info@dine-restaurant.com', // Add actual email
  },
  social: {
    instagram: 'https://www.instagram.com/dinerestaurant', // Add actual handle
    facebook: 'https://www.facebook.com/dinerestaurant', // Add actual handle
    twitter: 'https://twitter.com/dinerestaurant', // Add actual handle
  },
} as const;
