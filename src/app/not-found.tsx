import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div
      id="not-found"
      aria-labelledby="not-found-heading"
      role="region"
      className="flex min-h-screen flex-col items-center justify-center bg-cod-gray p-6 text-white"
    >
      <div className="max-w-lg space-y-6 text-center">
        <h1
          id="not-found-heading"
          className="text-preset-heading-lg--mobile md:text-preset-heading-lg--tablet lg:text-preset-heading-lg--desktop"
        >
          Page not found
        </h1>
        <p className="text-preset-body-base md:text-preset-body-lg">
          We apologize, but the page you&apos;re looking for doesn&apos;t exist.
          Please check the URL or navigate back to our homepage.
        </p>
        <div className="pt-4">
          <Button size="dine-default" variant="dine--light" asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
