import type { ImageSourceMap } from '@/lib/types/common';

import bgDesktop from '/public/assets/images/homepage/hero-bg-desktop@2x.jpg';
import bgMobile from '/public/assets/images/homepage/hero-bg-mobile@2x.jpg';
import bgTablet from '/public/assets/images/homepage/hero-bg-tablet@2x.jpg';

const imageAlt = 'A plate of spaghetti with shrimp, marinara sauce and herbs.';

export const HERO_SECTION_BACKGROUND_IMAGE_CONFIG: ImageSourceMap = {
  mobile: {
    src: bgMobile,
    alt: imageAlt,
    wrapperClassName: 'block md:hidden',
    className: 'object-top',
    sizes: '(max-width: 768px) 100vw',
  },
  tablet: {
    src: bgTablet,
    alt: imageAlt,
    wrapperClassName: 'hidden md:block lg:hidden',
    className: 'object-top',
    sizes: '(min-width: 768px) and (max-width: 1024px) 100vw',
  },
  desktop: {
    src: bgDesktop,
    alt: imageAlt,
    wrapperClassName: 'hidden lg:block',
    className: 'object-right-bottom',
    sizes: '(min-width: 1024px) 100vw',
  },
};
