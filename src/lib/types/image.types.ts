import type { StaticImageData } from 'next/image';

export type ImageSourceType = 'mobile' | 'tablet' | 'desktop';

export type ImageSource = {
  src: StaticImageData;
  alt: string;
  wrapperClassName: React.HTMLAttributes<HTMLDivElement>['className'];
  className: React.HTMLAttributes<HTMLImageElement>['className'];
  sizes: string;
};

export type ImageSourceMap = {
  [key in ImageSourceType]: ImageSource;
};
