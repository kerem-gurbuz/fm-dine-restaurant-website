import type { ImageSourceMap } from '../image-config.types';

export enum EventType {
  FAMILY_GATHERING = 'family-gathering',
  SPECIAL_EVENTS = 'special-events',
  SOCIAL_EVENTS = 'social-events',
}

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
