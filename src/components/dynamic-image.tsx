import Image from 'next/image';

import type { ImageSourceMap } from '@/lib/types/image.types';
import { cn } from '@/lib/utils';

export type DynamicImageProps = {
  // Container settings
  id: string;
  className?: React.ComponentProps<'div'>['className'];
  // Image sources and settings
  images: ImageSourceMap;
  imageAlt: string;
  placeholder?: 'blur' | 'empty';
  quality?: number;
  priority?: boolean;
};

export function DynamicImage({
  id,
  className,
  images: { mobile, tablet, desktop },
  imageAlt,
  placeholder = 'blur',
  quality = 75,
  priority = false,
}: DynamicImageProps) {
  return (
    <div id={id} className={className}>
      {/* Mobile Image */}
      <div className={cn('relative h-full w-full', mobile.wrapperClassName)}>
        <Image
          src={mobile.src}
          alt={imageAlt}
          className={cn('object-cover', mobile.className)}
          sizes={mobile.sizes}
          fill
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={
            placeholder === 'blur' ? mobile.src.blurDataURL : undefined
          }
        />
      </div>
      {/* Tablet Image */}
      <div className={cn('relative h-full w-full', tablet.wrapperClassName)}>
        <Image
          src={tablet.src}
          alt={imageAlt}
          className={cn('object-cover', tablet.className)}
          sizes={tablet.sizes}
          fill
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={
            placeholder === 'blur' ? tablet.src.blurDataURL : undefined
          }
        />
      </div>
      {/* Desktop Image */}
      <div className={cn('relative h-full w-full', desktop.wrapperClassName)}>
        <Image
          src={desktop.src}
          alt={imageAlt}
          className={cn('object-cover', desktop.className)}
          sizes={desktop.sizes}
          fill
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={
            placeholder === 'blur' ? desktop.src.blurDataURL : undefined
          }
        />
      </div>
    </div>
  );
}
