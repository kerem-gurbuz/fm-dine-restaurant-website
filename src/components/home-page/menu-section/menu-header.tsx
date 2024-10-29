import { Divider } from '@/components/patterns';
import { cn } from '@/lib/utils';

type MenuHeaderProps = {
  className?: string;
};

export function MenuHeader({ className }: MenuHeaderProps) {
  return (
    <header
      className={cn(
        'w-full max-w-[327px] text-center md:max-w-[445px] xl:text-left',
        className,
      )}
    >
      <Divider className="mx-auto mb-[36px] md:mb-[39px] lg:mb-[55px] xl:mx-0" />
      <h2
        id="menu-heading"
        className="text-preset-heading-lg--mobile md:text-preset-heading-lg--tablet lg:text-preset-heading-lg--desktop mb-[13px] md:mb-[27px]"
      >
        A few highlights from <br /> our menu
      </h2>
      <p className="text-preset-body-base md:text-preset-body-lg">
        We cater for all dietary requirements, but here&apos;s a glimpse at some
        of our diner&apos;s favourites. Our menu is revamped every season.
      </p>
    </header>
  );
}
