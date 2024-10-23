import type { ImageSourceMap } from './image.types';

export type RestaurantFeature = {
  id: string;
  title: string;
  description: string;
  images: ImageSourceMap;
  imageAlt: string;
  reverse?: boolean;
};
