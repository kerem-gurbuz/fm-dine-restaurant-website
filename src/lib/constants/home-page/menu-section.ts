/* -------------------------------------------------------------------------- */
/*                           Menu Section Constants                           */
/* -------------------------------------------------------------------------- */

import type { MenuItem } from '@/lib/types/dine-restaurant';

import salmonDesktopTablet from '/public/assets/images/homepage/salmon-desktop-tablet@2x.jpg';
import salmonMobile from '/public/assets/images/homepage/salmon-mobile@2x.jpg';

import filetMignonDesktopTablet from '/public/assets/images/homepage/beef-desktop-tablet@2x.jpg';
import filetMignonMobile from '/public/assets/images/homepage/beef-mobile@2x.jpg';

import chocolateMousseDesktopTablet from '/public/assets/images/homepage/chocolate-desktop-tablet@2x.jpg';
import chocolateMousseMobile from '/public/assets/images/homepage/chocolate-mobile@2x.jpg';

/*
  Seared Salmon Fillet
  ------------------------------------------------------------------------
 */
const salmonImageAlt =
  'A golden-brown salmon fillet rests atop a mound of fragrant rice, garnished with a sprig of fresh herbs and a drizzle of vibrant orange sauce.';

const salmon: MenuItem = {
  id: 'salmon',
  title: 'Seared Salmon Fillet',
  description:
    'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
  imageConfig: {
    mobile: {
      src: salmonMobile,
      alt: salmonImageAlt,
      wrapperClassName: 'block h-[245px] max-w-[327px] md:hidden',
      className: 'object-center',
      sizes: '327px',
    },
    tablet: {
      src: salmonDesktopTablet,
      alt: salmonImageAlt,
      wrapperClassName: 'hidden h-[96px] max-w-[128px] md:block lg:hidden',
      className: 'object-center',
      sizes: '128px',
    },
    desktop: {
      src: salmonDesktopTablet,
      alt: salmonImageAlt,
      wrapperClassName: 'hidden h-[96px] max-w-[128px] lg:block',
      className: 'object-center',
      sizes: '128px',
    },
  },
};

/* 
  Rosemary Filet Mignon
  ------------------------------------------------------------------------
 */
const filetMignonImageAlt =
  'A mouthwatering steak, cooked to medium-rare, with a crispy crust and a juicy center. The steak is garnished with a sprig of rosemary and a clove of roasted garlic.';

const filetMignon: MenuItem = {
  id: 'filet-mignon',
  title: 'Rosemary Filet Mignon',
  description:
    'Our prime beef served to your taste with a delicious choice of seasonal sides.',
  imageConfig: {
    mobile: {
      src: filetMignonMobile,
      alt: filetMignonImageAlt,
      wrapperClassName: 'block h-[245px] max-w-[327px] md:hidden',
      className: 'object-center',
      sizes: '327px',
    },
    tablet: {
      src: filetMignonDesktopTablet,
      alt: filetMignonImageAlt,
      wrapperClassName: 'hidden h-[96px] max-w-[128px] md:block lg:hidden',
      className: 'object-center',
      sizes: '128px',
    },
    desktop: {
      src: filetMignonDesktopTablet,
      alt: filetMignonImageAlt,
      wrapperClassName: 'hidden h-[96px] max-w-[128px] lg:block',
      className: 'object-center',
      sizes: '128px',
    },
  },
};

/*
  Summer Fruit Chocolate Mousse
  ------------------------------------------------------------------------
 */
const chocolateMousseImageAlt =
  'A luscious, velvety chocolate mousse, perfectly smooth and creamy, fills two clear glasses. Each glass is adorned with a scattering of vibrant pomegranate seeds.';

const chocolateMousse: MenuItem = {
  id: 'chocolate-mousse',
  title: 'Summer Fruit Chocolate Mousse',
  description:
    'Creamy mousse combined with summer fruits and dark chocolate shavings.',
  imageConfig: {
    mobile: {
      src: chocolateMousseMobile,
      alt: chocolateMousseImageAlt,
      wrapperClassName: 'block h-[245px] max-w-[327px] md:hidden',
      className: 'object-center',
      sizes: '327px',
    },
    tablet: {
      src: chocolateMousseDesktopTablet,
      alt: chocolateMousseImageAlt,
      wrapperClassName: 'hidden h-[96px] max-w-[128px] md:block lg:hidden',
      className: 'object-center',
      sizes: '128px',
    },
    desktop: {
      src: chocolateMousseDesktopTablet,
      alt: chocolateMousseImageAlt,
      wrapperClassName: 'hidden h-[96px] max-w-[128px] lg:block',
      className: 'object-center',
      sizes: '128px',
    },
  },
};

/* 
  Menu Highlights
  ------------------------------------------------------------------------
 */
export const MENU_HIGHLIGHTS: MenuItem[] = [
  salmon,
  filetMignon,
  chocolateMousse,
];
