import type { Metadata } from 'next';

import { SITE_CONFIG } from '@/config/site';

// Fallback images
const OPEN_GRAPH_IMAGE_PATH = '/assets/images/seo/opengraph-image.jpg';
const TWITTER_IMAGE_PATH = '/assets/images/seo/twitter-image.jpg';

type MetaConfig = {
  title: string;
  description?: string;
  path: string;
  images?: {
    url: string;
    alt: string;
    width: number;
    height: number;
  }[];
};

export const generateMetadata = ({
  title,
  description = SITE_CONFIG.description,
  path,
  images = [],
}: MetaConfig): Metadata => {
  const url = `${SITE_CONFIG.siteUrl}${path}`;

  return {
    metadataBase: new URL(SITE_CONFIG.siteUrl),
    title: {
      default: title,
      template: `%s | ${SITE_CONFIG.siteName}`,
    },
    description,
    openGraph: {
      type: 'website',
      title,
      description,
      url,
      siteName: SITE_CONFIG.siteName,
      images:
        images.length > 0
          ? images
          : [
              {
                url: `${SITE_CONFIG.siteUrl}${OPEN_GRAPH_IMAGE_PATH}`,
                width: 1200,
                height: 630,
                alt: SITE_CONFIG.siteName,
              },
            ],
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE_CONFIG.social.twitter,
      title,
      description,
      images:
        images.length > 0
          ? images.map((img) => img.url)
          : [`${SITE_CONFIG.siteUrl}${TWITTER_IMAGE_PATH}`],
    },
    alternates: {
      canonical: url,
    },
    creator: 'Kerem GURBUZ',
    authors: [
      {
        name: 'Kerem GURBUZ',
        url: 'https://www.linkedin.com/in/gurbuz-kerem/',
      },
    ],
  };
};
