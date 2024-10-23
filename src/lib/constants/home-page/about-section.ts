/* -------------------------------------------------------------------------- */
/*                           About Section Constants                          */
/* -------------------------------------------------------------------------- */

import type { RestaurantFeature } from '@/lib/types/dine-restaurant.types';

import enjoyablePlaceDesktop from '/public/assets/images/homepage/enjoyable-place-desktop@2x.jpg';
import enjoyablePlaceMobile from '/public/assets/images/homepage/enjoyable-place-mobile@2x.jpg';
import enjoyablePlaceTablet from '/public/assets/images/homepage/enjoyable-place-tablet@2x.jpg';

import locallySourcedDesktop from '/public/assets/images/homepage/locally-sourced-desktop@2x.jpg';
import locallySourcedMobile from '/public/assets/images/homepage/locally-sourced-mobile@2x.jpg';
import locallySourcedTablet from '/public/assets/images/homepage/locally-sourced-tablet@2x.jpg';

export const RESTAURANT_FEATURES: RestaurantFeature[] = [
  {
    id: 'enjoyable-place',
    title: 'Enjoyable place \n for all the family',
    description:
      'Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.',
    images: {
      mobile: {
        src: enjoyablePlaceDesktop,
        wrapperClassName: 'mx-auto h-[400px] max-w-[327px] md:hidden',
        className: 'object-center',
        sizes: '327px',
      },
      tablet: {
        src: enjoyablePlaceTablet,
        wrapperClassName:
          'mx-auto hidden h-[360px] max-w-[573px] md:block lg:hidden',
        className: 'object-center',
        sizes: '573px',
      },
      desktop: {
        src: enjoyablePlaceMobile,
        wrapperClassName:
          'ml-0 mr-auto hidden h-[720px] max-w-[540px] lg:block',
        className: 'object-center',
        sizes: '540px',
      },
    },
    imageAlt:
      'A picturesque view of a rural landscape with a stream winding through a valley, surrounded by rolling hills and a small village in the distance.',
  },
  {
    id: 'locally-sourced',
    title: 'The most locally \n sourced food',
    description:
      "All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.",
    images: {
      mobile: {
        src: locallySourcedDesktop,
        wrapperClassName: 'mx-auto h-[400px] max-w-[327px] md:hidden',
        className: 'object-center',
        sizes: '327px',
      },
      tablet: {
        src: locallySourcedTablet,
        wrapperClassName:
          'mx-auto hidden h-[360px] max-w-[573px] md:block lg:hidden',
        className: 'object-center',
        sizes: '573px',
      },
      desktop: {
        src: locallySourcedMobile,
        wrapperClassName:
          'ml-auto mr-0 hidden h-[720px] max-w-[540px] lg:block',
        className: 'object-center',
        sizes: '540px',
      },
    },
    imageAlt:
      'A chef adding the finishing touches to a plate of fish with a creamy sauce.',
    reverse: true,
  },
];
