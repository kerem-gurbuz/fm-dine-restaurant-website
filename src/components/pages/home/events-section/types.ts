/* -------------------------------------------------------------------------- */
/*                             Event Section Types                            */
/* -------------------------------------------------------------------------- */

import type { ImageSourceMap } from '@/lib/types';

export type EventType = 'family-gathering' | 'special-events' | 'social-events';

export type Event = {
  id: EventType;
  title: string;
  description: string;
  imageConfig: ImageSourceMap;
};

export type EventTab = {
  value: EventType;
  label: string;
  event: Event;
};
