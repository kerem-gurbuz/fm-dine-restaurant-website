import { MenuHeader } from './menu-header';
import { MenuHighlights } from './menu-highlights';

export function MenuSection() {
  return (
    <section
      id="menu-section"
      aria-labelledby="menu-heading"
      role="region"
      className="bg-cod-gray pb-[102px] pt-[72px] text-white md:py-[96px] lg:pb-[120px] lg:pt-[200px]"
    >
      <div className="container max-w-[1110px] px-6 md:px-[97.5px] xl:px-0">
        <div className="flex flex-col items-center gap-[85px] md:gap-[54px] xl:flex-row xl:items-start xl:gap-[125px]">
          <MenuHeader />
          <MenuHighlights />
        </div>
      </div>
    </section>
  );
}
