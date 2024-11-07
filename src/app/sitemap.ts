import type { MetadataRoute } from 'next';

import { SITE_CONFIG } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_CONFIG.url,
      lastModified: new Date(),
      changeFrequency: 'yearly', // ! This value should be (at least) "monthly" due to dynamically changing menu and events sections.
      priority: 1,
    },
    {
      url: `${SITE_CONFIG.url}/booking`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ];
}
