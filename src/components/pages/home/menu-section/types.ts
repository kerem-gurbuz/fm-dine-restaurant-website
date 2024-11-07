/* -------------------------------------------------------------------------- */
/*                             Menu Section Types                             */
/* -------------------------------------------------------------------------- */

import type { ImageSourceMap } from '@/lib/types';

export type MenuItem = {
  id: string;
  title: string;
  description: string;
  imageConfig: ImageSourceMap;
};
