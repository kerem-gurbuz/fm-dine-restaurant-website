import Image from 'next/image';

import type { ImageSource } from '@/lib/types';
import { cn } from '@/lib/utils';

type ResponsiveImageProps = {
  imageSource: ImageSource;
  quality: number;
  priority: boolean;
  placeholder: 'blur' | 'empty';
  pattern?: {
    wrapperClassName?: string;
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
    <figure
      className={cn('relative h-full w-full', imageSource.wrapperClassName)}
    >
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
    </figure>
  );
}
