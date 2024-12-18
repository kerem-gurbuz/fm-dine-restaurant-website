import { PageContent } from '@/components/pages/booking';
import { generateBookingPageMetadata } from '@/config/seo/metadata';
import { generateBookingPageSchema } from '@/config/seo/schemas';

export const metadata = generateBookingPageMetadata();

export default function BookingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBookingPageSchema()),
        }}
      />
      <PageContent />
    </>
  );
}
