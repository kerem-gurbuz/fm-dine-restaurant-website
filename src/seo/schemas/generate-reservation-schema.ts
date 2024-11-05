import type { FoodEstablishmentReservation, WithContext } from 'schema-dts';

import { SITE_CONFIG } from '@/config/site';

export const generateReservationSchema =
  (): WithContext<FoodEstablishmentReservation> => ({
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishmentReservation',
    '@id': `${SITE_CONFIG.url}/booking#reservation`,
    reservationFor: {
      '@id': `${SITE_CONFIG.url}/#restaurant`,
    },
    provider: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    url: `${SITE_CONFIG.url}/booking`,
    image: `${SITE_CONFIG.url}/assets/images/seo/reservation-image.jpg`,
    priceCurrency: 'GBP',
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/booking`,
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
          'http://schema.org/IOSPlatform',
          'http://schema.org/AndroidPlatform',
        ],
      },
      result: {
        '@type': 'FoodEstablishmentReservation',
      },
    },
    partySize: {
      '@type': 'QuantitativeValue',
      minValue: 1,
      maxValue: 8, // Get this from the API
    },
  });
