import type { ImageSourceMap } from '../image.types';

/*
  Types for the Dine Restaurant Website's About section.
  ------------------------------------------------------------------------
  These types are currently being used in the feature/homepage-about branch to structure the content and layout of the About section.
 */

export type FeatureType = 'enjoyable-place' | 'locally-sourced';

export type Feature = {
  id: string;
  title: string;
  description: string;
  images: ImageSourceMap;
};

export type FeatureMap = {
  [key in FeatureType]: Feature;
};
