import type { Graph } from 'schema-dts';

import { generateEventSectionSchema } from './generate-events-section-schema';
import { generateMenuSectionSchema } from './generate-menu-section-schema';
import { generateOrganizationSchema } from './generate-organization-schema';
import { generateRestaurantSchema } from './generate-restaurant-schema';

export const generateHomePageSchema = (): Graph => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generateRestaurantSchema(),
      generateMenuSectionSchema(),
      generateEventSectionSchema(),
      generateOrganizationSchema(),
    ],
  };
};
