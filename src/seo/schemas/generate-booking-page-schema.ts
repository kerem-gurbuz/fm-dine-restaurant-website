import type { Graph } from 'schema-dts';

import { generateOrganizationSchema } from './generate-organization-schema';
import { generateReservationSchema } from './generate-reservation-schema';
import { generateRestaurantSchema } from './generate-restaurant-schema';

export const generateBookingPageSchema = (): Graph => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generateRestaurantSchema(),
      generateReservationSchema(),
      generateOrganizationSchema(),
    ],
  };
};
