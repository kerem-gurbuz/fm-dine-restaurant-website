import Image from 'next/image';

import type { ImageSource } from '@/lib/types/image.types';
import { cn } from '@/lib/utils';

/*
  Note
  ------------------------------------------------------------------------
  Pattern: Decorative element used to add visual interest and depth to images or sections.
 */

type ResponsiveImageProps = {
  imageSource: ImageSource;
  quality: number;
  priority: boolean;
  placeholder: 'blur' | 'empty';
  pattern?: {
    wrapperClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
    element: React.ReactNode;
  };
};

export function ResponsiveImage({
  imageSource,
  quality,
  priority,
  placeholder,
  pattern,
}: ResponsiveImageProps) {
  return (
    <div className={cn('relative h-full w-full', imageSource.wrapperClassName)}>
      <Image
        src={imageSource.src}
        alt={imageSource.alt}
        className={cn('object-cover', imageSource.className)}
        sizes={imageSource.sizes}
        fill
        quality={quality}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={
          placeholder === 'blur' ? imageSource.src.blurDataURL : undefined
        }
      />
      {pattern && (
        <div className={pattern.wrapperClassName}>{pattern.element}</div>
      )}
    </div>
  );
}
