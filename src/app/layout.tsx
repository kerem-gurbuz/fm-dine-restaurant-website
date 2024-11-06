import { Footer } from '@/components/layout';
import { Toaster } from '@/components/ui/toaster';
import { league_spartan } from '@/lib/styles/fonts';
import '@/lib/styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-track-cod-gray scrollbar-thumb-beaver"
    >
      <body
        className={`${league_spartan.variable} font-league-spartan antialiased`}
      >
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
