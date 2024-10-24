/* -------------------------------------------------------------------------- */
/*                            Dine Restaurant Types                           */
/* -------------------------------------------------------------------------- */

import type { ImageSourceMap } from './image.types';

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
