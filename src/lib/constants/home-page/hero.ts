/* -------------------------------------------------------------------------- */
/*                               Hero Constants                               */
/* -------------------------------------------------------------------------- */

import type { ImageSourceMap } from '@/lib/types/image.types';

import bgDesktop from '/public/assets/images/homepage/hero-bg-desktop@2x.jpg';
import bgMobile from '/public/assets/images/homepage/hero-bg-mobile@2x.jpg';
import bgTablet from '/public/assets/images/homepage/hero-bg-tablet@2x.jpg';

export const HERO_BG_IMAGES: ImageSourceMap = {
  mobile: {
    src: bgMobile,
    wrapperClassName: 'md:hidden',
    className: 'object-top',
    sizes: '(max-width: 768px) 100vw',
  },
  tablet: {
    src: bgTablet,
    wrapperClassName: 'hidden md:block lg:hidden',
    className: 'object-top',
    sizes: '(min-width: 768px) and (max-width: 1024px) 100vw',
  },
  desktop: {
    src: bgDesktop,
    wrapperClassName: 'hidden lg:block',
    className: 'object-right-bottom',
    sizes: '(min-width: 1024px) 100vw',
  },
};

export const HERO_BG_IMAGE_ALT =
  'A plate of spaghetti with shrimp, marinara sauce and herbs.';
