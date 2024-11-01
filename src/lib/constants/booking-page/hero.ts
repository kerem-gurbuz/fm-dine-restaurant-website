/* -------------------------------------------------------------------------- */
/*                               Hero Constants                               */
/* -------------------------------------------------------------------------- */

import type { ImageSourceMap } from '@/lib/types/image-config.types';

import bgDesktop from '/public/assets/images/booking/hero-bg-desktop@2x.jpg';
import bgMobile from '/public/assets/images/booking/hero-bg-mobile@2x.jpg';
import bgTablet from '/public/assets/images/booking/hero-bg-tablet@2x.jpg';

const imageAlt =
  'Plate with avocado and tomato on toast, sprinkled with black pepper, on a wooden table background.';

export const BACKGROUND_IMAGE_CONFIG: ImageSourceMap = {
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
