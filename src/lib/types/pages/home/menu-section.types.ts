import type { ImageSourceMap } from '@/lib/types/common';

export type MenuItem = {
  id: string;
  title: string;
  description: string;
  imageConfig: ImageSourceMap;
};
