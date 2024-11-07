import type { Organization, WithContext } from 'schema-dts';

import { SITE_CONFIG } from '@/config/site';

export const generateOrganizationSchema = (): WithContext<Organization> => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_CONFIG.url}/#organization`,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_CONFIG.url}/assets/images/seo/restaurant-logo.png`,
    width: '103',
    height: '40',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE_CONFIG.contact.phone,
    contactType: 'reservations',
    availableLanguage: ['English'],
  },
  sameAs: Object.values(SITE_CONFIG.social),
});

/* 
  Notes:

  # Organization (A Schema.org Type)
    Reference: https://schema.org/Organization
  ------------------------------------------------------------------------
    An organization such as a school, NGO, corporation, club, etc.
 */
