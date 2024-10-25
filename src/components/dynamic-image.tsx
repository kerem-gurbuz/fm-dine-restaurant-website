import type { ImageSourceMap, ImageSourceType } from '@/lib/types/image.types';
import { ResponsiveImage } from './responsive-image';

/*
  Note
  ------------------------------------------------------------------------
  Pattern: Decorative element used to add visual interest and depth to images or sections.
 */

type DynamicImageProps = {
  id: string;
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  images: ImageSourceMap;
  placeholder?: 'blur' | 'empty';
  quality?: number;
  priority?: boolean;
  pattern?: {
    wrapperClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
    element: React.ReactNode;
  };
};

export function DynamicImage({
  id,
  className,
  images,
  placeholder = 'blur',
  quality = 75,
  priority = false,
  pattern = undefined,
}: DynamicImageProps) {
  const breakpoints: ImageSourceType[] = ['mobile', 'tablet', 'desktop'];

  return (
    <div id={id} className={className}>
      {breakpoints.map((breakpoint) => (
        <ResponsiveImage
          key={breakpoint}
          imageSource={images[breakpoint]}
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          pattern={pattern}
        />
      ))}
    </div>
  );
}
