import type { ImageSourceMap, ImageSourceType } from '@/lib/types/common';
import { ResponsiveImage } from './responsive-image';

/*
  Note
  ------------------------------------------------------------------------
  Pattern: Decorative element used to add visual interest and depth to images or sections.
 */

type DynamicImageProps = {
  id: string;
  className?: string;
  imageConfig: ImageSourceMap;
  placeholder?: 'blur' | 'empty';
  quality?: number;
  priority?: boolean;
  pattern?: {
    wrapperClassName?: string;
    element: React.ReactNode;
  };
};

export function DynamicImage({
  id,
  className,
  imageConfig,
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
          imageSource={imageConfig[breakpoint]}
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          pattern={pattern}
        />
      ))}
    </div>
  );
}
