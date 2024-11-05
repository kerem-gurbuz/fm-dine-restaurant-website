import type { Menu, WithContext } from 'schema-dts';

import { SITE_CONFIG } from '@/config/site';

// TODO: Get the menu items from the database

export const generateMenuSectionSchema = (): WithContext<Menu> => ({
  '@context': 'https://schema.org',
  '@type': 'Menu',
  '@id': `${SITE_CONFIG.url}/#menu`,
  name: 'Dine Restaurant Menu',
  mainEntityOfPage: SITE_CONFIG.url,
  hasMenuSection: [
    {
      '@type': 'MenuSection',
      name: 'Highlights',
      hasMenuItem: [
        {
          '@type': 'MenuItem',
          name: 'Seared Salmon Fillet',
          description:
            'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
          offers: {
            '@type': 'Offer',
            price: '25.00',
            priceCurrency: 'GBP',
          },
        },
        {
          '@type': 'MenuItem',
          name: 'Rosemary Filet Mignon',
          description:
            'Our prime beef served to your taste with a delicious choice of seasonal sides.',
          offers: {
            '@type': 'Offer',
            price: '35.00',
            priceCurrency: 'GBP',
          },
        },
        {
          '@type': 'MenuItem',
          name: 'Summer Fruit Chocolate Mousse',
          description:
            'Creamy mousse combined with summer fruits and dark chocolate shavings.',
          offers: {
            '@type': 'Offer',
            price: '15.00',
            priceCurrency: 'GBP',
          },
        },
      ],
    },
  ],
});

/*
  Notes:

  # Menu (A Schema.org Type)
    Reference: https://schema.org/Menu
  ------------------------------------------------------------------------
    A structured representation of food or drink items available from a FoodEstablishment.

  # MenuSection (A Schema.org Type)
    Reference: https://schema.org/MenuSection
  ------------------------------------------------------------------------
    A sub-grouping of food or drink items in a menu. E.g. courses (such as 'Dinner', 'Breakfast', etc.), specific type of dishes (such as 'Meat', 'Vegan', 'Drinks', etc.), or some other classification made by the menu provider.

  # MenuItem (A Schema.org Type)
    Reference: https://schema.org/MenuItem
  ------------------------------------------------------------------------
    A food or drink item listed in a menu or menu section.
 */
