import type { Restaurant, WithContext } from 'schema-dts';

import { SITE_CONFIG } from '@/config/site';

const RESTAURANT_IMAGE_PATH = '/assets/images/seo/restaurant-image.jpg';

export const generateRestaurantSchema = (
  path: string,
): WithContext<Restaurant> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${SITE_CONFIG.siteUrl}${path}#restaurant`,
    name: SITE_CONFIG.siteName,
    image: `${SITE_CONFIG.siteUrl}${RESTAURANT_IMAGE_PATH}`,
    description: SITE_CONFIG.description,
    url: `${SITE_CONFIG.siteUrl}${path}`,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.location.street,
      addressLocality: SITE_CONFIG.location.locality,
      addressRegion: SITE_CONFIG.location.region,
      postalCode: SITE_CONFIG.location.postalCode,
      addressCountry: SITE_CONFIG.location.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '54.323577', // Add actual coordinates
      longitude: '-2.528321', // Add actual coordinates
    },
    hasMap: 'https://maps.app.goo.gl/JjAXCJoLfAvEymX97', // Add Google Maps URL
    servesCuisine: ['British', 'Contemporary', 'Seasonal'], // Adjust as needed
    priceRange: '£££', // Adjust as needed
    acceptsReservations: `${SITE_CONFIG.siteUrl}/booking`,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: SITE_CONFIG.openingHours.weekday.slice(0, 5),
        closes: SITE_CONFIG.openingHours.weekday.slice(6),
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: SITE_CONFIG.openingHours.weekend.slice(0, 5),
        closes: SITE_CONFIG.openingHours.weekend.slice(6),
      },
    ],
  };
};
