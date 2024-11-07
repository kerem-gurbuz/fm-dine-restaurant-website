/* -------------------------------------------------------------------------- */
/*                             About Section Types                            */
/* -------------------------------------------------------------------------- */

import type { ImageSourceMap } from '@/lib/types';

export type FeatureType = 'enjoyable-place' | 'locally-sourced';

export type Feature = {
  id: FeatureType;
  title: string;
  description: string;
  imageConfig: ImageSourceMap;
};

export type FeatureMap = {
  [key in FeatureType]: Feature;
};
