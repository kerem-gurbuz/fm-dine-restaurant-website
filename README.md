# Frontend Mentor - Dine Website Challenge solution

This is a solution to the [Dine Website Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dine-restaurant-website-yAt7Vvxt7).

Links:

- Live Site URL: https://kerem-gurbuz-fm-dine-restaurant.vercel.app
- Repository URL: https://github.com/kerem-gurbuz/fm-dine-restaurant-website

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

The project aims to create a fully functional restaurant website where users can:

- View optimized layouts across different device screen sizes
- Experience interactive hover states throughout the site
- Navigate through different event sections (Family Gatherings, Special Events, Social Events) via tabs
- Submit reservations through a validated booking form with specific error handling:
  - Required field validation for Name and Email Address
  - Email format validation
  - Date and time field completion validation

### Screenshot

![Dine Restaurant Homepage](/public/screenshots/homepage.webp)

![Dine Restaurant Booking Page](/public/screenshots/booking-page.webp)

![Dine Restaurant Booking Form Validation](/public/screenshots/booking-page-active.webp)

## My process

### Built with

- [Next.js](https://nextjs.org/) - A React framework that provides server-side rendering and other advanced features for building modern web applications.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework that allows you to rapidly build custom user interfaces.
- [shadcn/ui](https://ui.shadcn.com/) - A collection of reusable UI components built with Tailwind CSS, providing a consistent and visually appealing user interface.
- [Zod](https://zod.dev/) - A TypeScript-first schema validation library that helps ensure data integrity and type safety.
- [React Hook Form](https://react-hook-form.com/) - A performant and flexible form handling library that simplifies form management and validation.

### Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── booking/            # Booking page route
│   └── page.tsx            # Homepage route
├── components/             # Reusable components
│   ├── common/             # Shared components
│   ├── layout/             # Layout components
│   ├── pages/              # Page-specific components
│   └── ui/                 # UI components (shadcn)
├── config/                 # Configuration files
│   ├── constants/          # Constants and static data
│   ├── env.ts              # Environment variables
│   └── site.ts             # Site-wide configuration
├── features/               # Feature-based modules
│   └── booking/            # Booking feature
│       ├── components/     # Booking components
│       ├── schemas/        # Validation schemas
│       └── utils/          # Utility functions
├── lib/                    # Shared utilities
│   ├── hooks/              # Custom hooks
│   ├── styles/             # Global styles
│   └── utils/              # Utility functions
└── seo/                    # SEO-related configurations
    ├── metadata/           # Page metadata
    └── schemas/            # SEO schemas
```

### What I learned

- **Next.js App Router**: Implemented modern routing patterns and page organization using the Next.js 13+ app directory structure
- **Type Safety**: Enhanced code reliability using TypeScript throughout the project
- **Form Validation**: Created a robust form validation system using Zod and React Hook Form
- **Component Architecture**: Developed a scalable component structure separating concerns between common, layout, and page-specific components
- **SEO Optimization**: Implemented comprehensive JSON-LD schemas and metadata for better search engine visibility

Schema generation for the homepage and booking page:

```typescript
import type { Graph } from 'schema-dts';

// generate-home-page-schema.ts
export const generateHomePageSchema = (): Graph => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generateRestaurantSchema(),
      generateMenuSectionSchema(),
      generateEventSectionSchema(),
      generateOrganizationSchema(),
    ],
  };
};

// generate-booking-page-schema.ts
export const generateBookingPageSchema = (): Graph => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generateRestaurantSchema(),
      generateReservationSchema(),
      generateOrganizationSchema(),
    ],
  };
};
```

### Continued development

Future improvements and features to consider:

- Integration with a backend reservation system
- Real-time availability checking
- User authentication for managing reservations
- [Resend](https://www.resend.com/) integration for sending reservation details email to users
- Enhanced accessibility features
- Performance optimization for images and animations
- Integration with a CMS for menu management

### Useful resources

- [Next.js Documentation](https://nextjs.org/docs) - Comprehensive guide for Next.js features
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Detailed reference for Tailwind utilities
- [shadcn/ui Components](https://ui.shadcn.com/) - Re-usable component documentation
- [React Hook Form Documentation](https://react-hook-form.com/get-started) - Form handling guide
- [Zod Documentation](https://zod.dev/) - Schema validation reference

## Author

- LinkedIn - [Kerem Gurbuz](https://www.linkedin.com/in/gurbuz-kerem)
- Frontend Mentor - [@kerem-gurbuz](https://www.frontendmentor.io/profile/kerem-gurbuz)

## Acknowledgments

- The Next.js team for their excellent documentation and examples
- [shadcn](https://twitter.com/shadcn) for the amazing UI components
