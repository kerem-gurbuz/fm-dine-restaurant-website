import type { Config } from 'tailwindcss';

import tailwindScrollbar from 'tailwind-scrollbar';
import tailwindcssAnimate from 'tailwindcss-animate';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/features/**/*.{ts,tsx}',
    './src/config/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        '2xl': '1440px',
      },
      fontFamily: {
        'league-spartan': [
          'var(--font-league-spartan)',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        // design system colors
        beaver: 'hsl(var(--color-beaver))',
        'cod-gray': 'hsl(var(--color-cod-gray))',
        mirage: 'hsl(var(--color-mirage))',
        'ebony-clay': 'hsl(var(--color-ebony-clay))',
        'shuttle-gray': 'hsl(var(--color-shuttle-gray))',

        // additional colors
        'dark-gray': 'hsl(var(--color-dark-gray))',
        'steel-gray': 'hsl(var(--color-steel-gray))',
        'dusty-rose': 'hsl(var(--color-dusty-rose))',

        // shadcn-ui colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        dine: '0 75px 100px -50px hsl(var(--color-steel-gray) / 0.5)',
        'dine-sm': '0 15px 25px 0 hsl(var(--color-steel-gray) / 0.25)',
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindScrollbar],
};

export default config;
