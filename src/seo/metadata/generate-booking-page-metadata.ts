import type { Metadata } from 'next';

import { SITE_CONFIG } from '@/config/site';

export const generateBookingPageMetadata = (): Metadata => ({
  metadataBase: new URL(SITE_CONFIG.url),
  title: 'Book a Table | Dine Restaurant',
  description:
    'Make a reservation at Dine Restaurant. We offer elegant dining experiences with locally sourced ingredients. Perfect for special occasions and family gatherings.',
  keywords: [
    'restaurant booking',
    'table reservation',
    'fine dining reservation',
    'special occasion booking',
    'Marthwaite',
    'Sedbergh',
    'Cumbria',
  ],
  openGraph: {
    title: 'Book a Table | Dine Restaurant',
    description:
      'Reserve your table at Dine Restaurant. Experience exceptional dining in beautiful surroundings.',
    url: `${SITE_CONFIG.url}/booking`,
    siteName: 'Dine Restaurant',
    images: [
      {
        url: '/assets/images/seo/reservation-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Close-up view of a dinner gathering with several wine glasses and small dishes on a softly lit table. People are seated around the table, casually engaged in conversation, though their faces are out of focus, creating an intimate and relaxed atmosphere.',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Table | Dine Restaurant',
    description:
      'Reserve your table at Dine Restaurant. Experience exceptional dining in beautiful surroundings.',
    images: ['/assets/images/seo/reservation-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  creator: 'Kerem GURBUZ',
  authors: [
    {
      name: 'Kerem GURBUZ',
      url: 'https://www.linkedin.com/in/gurbuz-kerem/',
    },
  ],
});
