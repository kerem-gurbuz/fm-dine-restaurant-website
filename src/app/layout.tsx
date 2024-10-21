import { league_spartan } from '@/lib/styles/fonts';
import '@/lib/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dine Restaurant',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${league_spartan.variable} font-league-spartan antialiased`}
      >
        {children}
        <footer className="bg-cod-gray text-white">
          <div className="container max-w-[1110px]">
            {/* Footer content will be added in feature/footer */}
            Footer
          </div>
        </footer>
      </body>
    </html>
  );
}
