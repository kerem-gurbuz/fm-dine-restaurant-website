import type { Metadata } from 'next';

import { SITE_CONFIG } from '@/config/site';

export const generateHomePageMetadata = (): Metadata => ({
  metadataBase: new URL(SITE_CONFIG.url),
  title: 'Dine Restaurant | Exquisite Dining Since 1989',
  description:
    'Experience exceptional dining in beautiful country surroundings at Dine Restaurant. Locally sourced ingredients, family-friendly atmosphere, and elegant settings since 1989.',
  keywords: [
    'fine dining',
    'local ingredients',
    'farm to table',
    'family restaurant',
    'special events',
    'Marthwaite',
    'Sedbergh',
    'Cumbria',
  ],
  openGraph: {
    title: 'Dine Restaurant | Exquisite Dining Since 1989',
    description:
      'Experience exceptional dining with locally sourced ingredients in beautiful country surroundings. Perfect for family gatherings and special events.',
    url: SITE_CONFIG.url,
    siteName: 'Dine Restaurant',
    images: [
      {
        url: '/assets/images/seo/restaurant-image.jpg',
        width: 1200,
        height: 630,
        alt: 'A group of adults and a child seated around a decorated table at an outdoor event, raising their glasses in a celebratory toast. The table is adorned with a floral centerpiece and glasses of red wine. The setting appears festive, with string lights in the background, creating a warm and cheerful atmosphere. The people are smiling and enjoying the moment together.',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dine Restaurant | Exquisite Dining Since 1989',
    description:
      'Experience exceptional dining with locally sourced ingredients in beautiful country surroundings. Perfect for family gatherings and special events.',
    images: ['/assets/images/seo/restaurant-image.jpg'],
  },
  alternates: {
    canonical: '/',
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
