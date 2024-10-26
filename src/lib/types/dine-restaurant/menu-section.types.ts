import type { ImageSourceMap } from '../image-config.types';

export type MenuItem = {
  id: string;
  title: string;
  description: string;
  imageConfig: ImageSourceMap;
};
