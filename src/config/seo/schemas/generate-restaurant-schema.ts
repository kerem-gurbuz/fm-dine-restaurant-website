import type { Restaurant, WithContext } from 'schema-dts';

import { SITE_CONFIG } from '@/config/site';

export const generateRestaurantSchema = (): WithContext<Restaurant> => ({
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${SITE_CONFIG.url}/#restaurant`,
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  telephone: SITE_CONFIG.contact.phone,
  email: 'reservations@dinerestaurant.com',
  image: `${SITE_CONFIG.url}/assets/images/seo/restaurant-image.jpg`,
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
    latitude: SITE_CONFIG.geo.latitude,
    longitude: SITE_CONFIG.geo.longitude,
  },
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
  servesCuisine: ['British', 'Contemporary', 'Farm-to-table', 'Seasonal'],
  priceRange: '£££',
  paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
  currenciesAccepted: 'GBP',
  acceptsReservations: true,
  hasMenu: { '@id': `${SITE_CONFIG.url}/#menu` },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Private Dining Room' },
    { '@type': 'LocationFeatureSpecification', name: 'Wheelchair Accessible' },
    { '@type': 'LocationFeatureSpecification', name: 'Free Parking' },
    { '@type': 'LocationFeatureSpecification', name: 'Air Conditioned' },
  ],
  publicAccess: true,
  smokingAllowed: false,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '450',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
      },
      author: {
        '@type': 'Person',
        name: 'Kerem GURBUZ',
      },
      datePublished: '2024-01-15',
      description:
        'Exceptional farm-to-table dining experience with impeccable service.',
    },
  ],
});
