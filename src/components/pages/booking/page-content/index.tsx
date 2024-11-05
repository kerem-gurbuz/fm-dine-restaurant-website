'use client';

/* 
  Notes:

  This component was extracted from the original BookingPage to enable server-side rendering. It wraps all client-side functionality (useRef, scroll behavior, interactive elements) allowing the parent page component to be a server component.
 
  Why this pattern?
  - Enables server-side rendering benefits for the main page component
  - Isolates client-side logic and 'use client' directive
  - Maintains interactive features while optimizing page load
  - Follows Next.js recommended pattern for mixing client and server components
 
  Reference: https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns
 */

import { useRef } from 'react';

import { CurveBottomRight, Lines } from '@/components/common/patterns';
import { BookingForm } from '@/features/booking/components';
import { useScrollIntoView } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { HeroSection } from '../hero-section';

export function PageContent() {
  const scrollToRef = useScrollIntoView();
  const bookingContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollToBooking = () => {
    scrollToRef(bookingContainerRef, {
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <HeroSection onScrollToBooking={handleScrollToBooking} />
      <main
        id="booking-page"
        className="relative h-[534px] md:h-[435px] xl:h-[320px]"
      >
        {/* Booking Form Container */}
        <div
          ref={bookingContainerRef}
          className={cn(
            'absolute left-1/2 top-[-137px] z-10 -translate-x-1/2 md:top-[-230px] xl:left-[calc(50%+15px)] xl:top-[-341px] xl:translate-x-0',
            'w-full max-w-[327px] md:max-w-[540px]',
          )}
        >
          <div className="relative">
            {/* Booking Form */}
            <BookingForm className="relative z-20 w-full" />
            {/* Decorative Pattern */}
            <Lines className="absolute bottom-0 left-0 hidden -translate-x-1/2 translate-y-1/2 xl:block" />
          </div>
        </div>
        {/* Background Pattern */}
        <CurveBottomRight className="absolute left-0 right-[calc(50%-273px)] top-0 hidden xl:flex" />
      </main>
    </>
  );
}
