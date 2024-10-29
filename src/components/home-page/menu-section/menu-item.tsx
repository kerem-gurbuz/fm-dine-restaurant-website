import { DynamicImage } from '@/components/dynamic-image';
import type { MenuItem } from '@/lib/types/home-page';
import { cn } from '@/lib/utils';

type MenuItemProps = {
  className?: string;
  item: MenuItem;
  isLastItem: boolean;
};

export function MenuItem({
  className,
  item: { id, title, description, imageConfig },
  isLastItem,
}: MenuItemProps) {
  return (
    <article
      id={id}
      aria-labelledby={id + '-heading'}
      className={cn(
        'w-full max-w-[327px] md:max-w-[573px] xl:max-w-[540px]',
        'grid h-[418px] grid-cols-1 grid-rows-[245px_1fr] gap-9 md:h-[121px] md:grid-cols-[128px_1fr] md:grid-rows-1 md:gap-[62px]',
        'border-b border-white/[14.94%]',
        { 'h-[363px] border-none md:h-[96px]': isLastItem },
        className,
      )}
    >
      <DynamicImage
        id={id + '-image'}
        imageConfig={imageConfig}
        placeholder="blur"
        quality={75}
        priority={false}
        pattern={{
          wrapperClassName: 'absolute right-[-32px] top-[18px] hidden md:block',
          element: <div className="h-[1px] w-[32px] bg-beaver" />,
        }}
      />
      <div className="text-center md:mt-[8px] md:text-left">
        <h3 id={id + '-heading'} className="text-preset-heading-md mb-[6px]">
          {title}
        </h3>
        <p className="text-preset-body-base">{description}</p>
      </div>
    </article>
  );
}
