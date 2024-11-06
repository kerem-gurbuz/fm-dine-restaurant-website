import Link from 'next/link';

import { DineLogo } from '@/components/common';
import { FOOTER_CONTACT, FOOTER_HOURS } from '@/config/constants/layout';

export function Footer() {
  const { address, phone } = FOOTER_CONTACT;
  const { weekdays, weekends } = FOOTER_HOURS;

  return (
    <footer
      id="footer"
      className="bg-cod-gray pb-[78px] pt-[80px] md:pb-[62px] md:pt-[64px] lg:pb-[76px] lg:pt-[78px]"
    >
      <div className="container max-w-[1110px] px-6 md:px-[39.5px] lg:px-[97.5px] xl:px-0">
        <div className="flex flex-col items-center gap-[42px] md:flex-row md:items-start md:gap-[130px] lg:gap-[193px]">
          {/* NavLogo */}
          <nav>
            <Link href="/">
              <DineLogo className="h-[40px] w-[103px] fill-white" />
              <span className="sr-only">Homepage</span>
            </Link>
          </nav>
          <div className="text-preset-body-sm flex flex-1 flex-col gap-8 text-center text-white md:mt-[2px] md:items-start md:text-left lg:flex-row lg:justify-between">
            {/* Contact Information */}
            <div className="w-full max-w-[244px]">
              <p>
                {address.city}, {address.region}
              </p>
              <p>{address.country}</p>
              <p>{phone}</p>
            </div>
            {/* Opening Hours */}
            <div className="flex-1">
              <p className="uppercase">Open times</p>
              <p>
                {weekdays.days}: {weekdays.hours}
              </p>
              <p>
                {weekends.days}: {weekends.hours}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
