import type { Event, EventTab } from '@/lib/types/pages/home';

import familyGatheringDesktop from '/public/assets/images/homepage/family-gathering-desktop@2x.jpg';
import familyGatheringMobile from '/public/assets/images/homepage/family-gathering-mobile@2x.jpg';
import familyGatheringTablet from '/public/assets/images/homepage/family-gathering-tablet@2x.jpg';

import specialEventsDesktop from '/public/assets/images/homepage/special-events-desktop@2x.jpg';
import specialEventsMobile from '/public/assets/images/homepage/special-events-mobile@2x.jpg';
import specialEventsTablet from '/public/assets/images/homepage/special-events-tablet@2x.jpg';

import socialEventsDesktop from '/public/assets/images/homepage/social-events-desktop@2x.jpg';
import socialEventsMobile from '/public/assets/images/homepage/social-events-mobile@2x.jpg';
import socialEventsTablet from '/public/assets/images/homepage/social-events-tablet@2x.jpg';

/* 
  Family Gathering
  ------------------------------------------------------------------------
 */
const familyGatheringImageAlt =
  'A family seated around a wooden dining table, sharing a meal together. Various dishes are spread across the table, including plates of pasta, a salad bowl, avocados, bread, and a bowl of cherry tomatoes being passed around. The atmosphere is casual and friendly.';

const familyGathering: Event = {
  id: 'family-gathering',
  title: 'Family Gathering',
  description:
    "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.",
  imageConfig: {
    mobile: {
      src: familyGatheringMobile,
      alt: familyGatheringImageAlt,
      wrapperClassName: 'block h-[400px] max-w-[327px] shadow-dine md:hidden',
      className: 'object-center',
      sizes: '327px',
    },
    tablet: {
      src: familyGatheringTablet,
      alt: familyGatheringImageAlt,
      wrapperClassName:
        'hidden h-[360px] max-w-[573px] shadow-dine md:block lg:hidden',
      className: 'object-center',
      sizes: '573px',
    },
    desktop: {
      src: familyGatheringDesktop,
      alt: familyGatheringImageAlt,
      wrapperClassName: 'hidden h-[600px] max-w-[540px] shadow-dine lg:block',
      className: 'object-center',
      sizes: '540px',
    },
  },
};

/* 
  Special Events
  ------------------------------------------------------------------------
 */
const specialEventsImageAlt =
  'A group of adults and a child seated around a decorated table at an outdoor event, raising their glasses in a celebratory toast. The table is adorned with a floral centerpiece and glasses of red wine. The setting appears festive, with string lights in the background, creating a warm and cheerful atmosphere. The people are smiling and enjoying the moment together.';

const specialEvents: Event = {
  id: 'special-events',
  title: 'Special Events',
  description:
    "Whether it's a romantic dinner or special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal.",
  imageConfig: {
    mobile: {
      src: specialEventsMobile,
      alt: specialEventsImageAlt,
      wrapperClassName: 'block h-[400px] max-w-[327px] shadow-dine md:hidden',
      className: 'object-center',
      sizes: '327px',
    },
    tablet: {
      src: specialEventsTablet,
      alt: specialEventsImageAlt,
      wrapperClassName:
        'hidden h-[360px] max-w-[573px] shadow-dine md:block lg:hidden',
      className: 'object-center',
      sizes: '573px',
    },
    desktop: {
      src: specialEventsDesktop,
      alt: specialEventsImageAlt,
      wrapperClassName: 'hidden h-[600px] max-w-[540px] shadow-dine lg:block',
      className: 'object-center',
      sizes: '540px',
    },
  },
};

/* 
  Social Events
  ------------------------------------------------------------------------
 */
const socialEventsImageAlt =
  'Close-up view of a dinner gathering with several wine glasses and small dishes on a softly lit table. People are seated around the table, casually engaged in conversation, though their faces are out of focus, creating an intimate and relaxed atmosphere. A red beverage with a straw is also visible in the foreground.';

const socialEvents: Event = {
  id: 'social-events',
  title: 'Social Events',
  description:
    "Are you looking to have a larger social event? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone.",
  imageConfig: {
    mobile: {
      src: socialEventsMobile,
      alt: socialEventsImageAlt,
      wrapperClassName: 'block h-[400px] max-w-[327px] shadow-dine md:hidden',
      className: 'object-center',
      sizes: '327px',
    },
    tablet: {
      src: socialEventsTablet,
      alt: socialEventsImageAlt,
      wrapperClassName:
        'hidden h-[360px] max-w-[573px] shadow-dine md:block lg:hidden',
      className: 'object-center',
      sizes: '573px',
    },
    desktop: {
      src: socialEventsDesktop,
      alt: socialEventsImageAlt,
      wrapperClassName: 'hidden h-[600px] max-w-[540px] shadow-dine lg:block',
      className: 'object-center',
      sizes: '540px',
    },
  },
};

/* 
  Events
  ------------------------------------------------------------------------
 */
export const EVENTS: Event[] = [familyGathering, specialEvents, socialEvents];

export const EVENT_TABS: EventTab[] = EVENTS.map((event) => ({
  value: event.id,
  label: event.title.toUpperCase(),
  event,
}));
