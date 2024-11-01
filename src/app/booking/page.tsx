import { BookingForm, HeroSection } from '@/components/booking-page';
import { CurveBottomRight, Lines } from '@/components/patterns';

export default function BookingPage() {
  return (
    <>
      <HeroSection />
      <main
        id="booking-page"
        className="relative h-[534px] md:h-[435px] xl:h-[320px]"
      >
        {/* Form Container */}
        <div className="absolute left-1/2 top-[-137px] z-10 w-full max-w-[327px] -translate-x-1/2 md:top-[-230px] md:max-w-[540px] xl:left-[calc(50%+15px)] xl:top-[-341px] xl:translate-x-0">
          <div className="relative">
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