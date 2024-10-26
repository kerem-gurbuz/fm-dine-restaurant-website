import type { ImageSourceMap } from '../image-config.types';

export type FeatureType = 'enjoyable-place' | 'locally-sourced';

export type Feature = {
  id: string;
  title: string;
  description: string;
  imageConfig: ImageSourceMap;
};

export type FeatureMap = {
  [key in FeatureType]: Feature;
};
