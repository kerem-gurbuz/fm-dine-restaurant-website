import { env } from './env';

export const siteConfig = {
  siteName: 'Dine Restaurant',
  siteUrl: env.SITE_URL,
  description:
    'Exquisite dining since 1989. Experience our seasonal menu in beautiful country surroundings.',
  openingHours: {
    weekday: '09:00-22:00',
    weekend: '09:00-23:30',
  },
  location: {
    street: 'Marthwaite',
    locality: 'Sedbergh',
    region: 'Cumbria',
    postalCode: 'LA10 5ER',
    country: 'GB',
  },
  contact: {
    phone: '+00 44 123 4567',
    email: 'info@dine-restaurant.com', // Add actual email
  },
  social: {
    twitter: '@dinerestaurant', // Add actual handle
    facebook: 'dinerestaurant', // Add actual handle
    instagram: 'dinerestaurant', // Add actual handle
  },
} as const;
