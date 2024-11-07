/* -------------------------------------------------------------------------- */
/*                            CTA Section Constants                           */
/* -------------------------------------------------------------------------- */

import type { ImageSourceMap } from '@/lib/types';

import bgDesktop from '/public/assets/images/homepage/ready-bg-desktop@2x.jpg';
import bgMobile from '/public/assets/images/homepage/ready-bg-mobile@2x.jpg';
import bgTablet from '/public/assets/images/homepage/ready-bg-tablet@2x.jpg';

const imageAlt =
  'Plate with avocado and tomato on toast, sprinkled with black pepper, on a wooden table background.';

export const BACKGROUND_IMAGE_CONFIG: ImageSourceMap = {
  mobile: {
    src: bgMobile,
    alt: imageAlt,
    wrapperClassName: 'block md:hidden',
    className: 'object-center',
    sizes: '(max-width: 768px) 100vw',
  },
  tablet: {
    src: bgTablet,
    alt: imageAlt,
    wrapperClassName: 'hidden md:block lg:hidden',
    className: 'object-center',
    sizes: '(min-width: 768px) and (max-width: 1024px) 100vw',
  },
  desktop: {
    src: bgDesktop,
    alt: imageAlt,
    wrapperClassName: 'hidden lg:block',
    className: 'object-center',
    sizes: '(min-width: 1024px) 100vw',
  },
};
