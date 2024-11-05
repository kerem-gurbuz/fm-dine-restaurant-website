import type { EventSeries, WithContext } from 'schema-dts';

import { SITE_CONFIG } from '@/config/site';

// TODO: Get the events from the database

export const generateEventSectionSchema = (): WithContext<EventSeries> => ({
  '@context': 'https://schema.org',
  '@type': 'EventSeries',
  '@id': `${SITE_CONFIG.url}/#events`,
  name: 'Dine Restaurant Events',
  description: 'Special events and gatherings at Dine Restaurant',
  location: {
    '@id': `${SITE_CONFIG.url}/#restaurant`,
  },
  organizer: {
    '@id': `${SITE_CONFIG.url}/#organization`,
  },
  subEvents: [
    {
      '@type': 'Event',
      name: 'Family Gathering',
      description: 'Special dining experience for family celebrations',
      image: `${SITE_CONFIG.url}/assets/images/homepage/family-gathering-desktop@2x.jpg`,
      startDate: '2025-01-01T00:00',
      endDate: '2025-12-31T23:59',
      offers: {
        '@type': 'Offer',
        price: '100.00',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        availabilityStarts: '2025-01-01T00:00',
        availabilityEnds: '2025-12-31T23:59',
      },
      location: {
        '@id': `${SITE_CONFIG.url}/#restaurant`,
      },
      organizer: {
        '@id': `${SITE_CONFIG.url}/#organization`,
      },
    },
    {
      '@type': 'Event',
      name: 'Special Events',
      description: 'Customized dining experiences for special occasions',
      image: `${SITE_CONFIG.url}/assets/images/homepage/special-events-desktop@2x.jpg`,
      startDate: '2025-01-01T00:00',
      endDate: '2025-12-31T23:59',
      offers: {
        '@type': 'Offer',
        price: '200.00',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        availabilityStarts: '2025-01-01T00:00',
        availabilityEnds: '2025-12-31T23:59',
      },
      location: {
        '@id': `${SITE_CONFIG.url}/#restaurant`,
      },
      organizer: {
        '@id': `${SITE_CONFIG.url}/#organization`,
      },
    },
    {
      '@type': 'Event',
      name: 'Social Events',
      description: 'Perfect setting for social gatherings and celebrations',
      image: `${SITE_CONFIG.url}/assets/images/homepage/social-events-desktop@2x.jpg`,
      startDate: '2025-01-01T00:00',
      endDate: '2025-12-31T23:59',
      offers: {
        '@type': 'Offer',
        price: '300.00',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        availabilityStarts: '2025-01-01T00:00',
        availabilityEnds: '2025-12-31T23:59',
      },
      location: {
        '@id': `${SITE_CONFIG.url}/#restaurant`,
      },
      organizer: {
        '@id': `${SITE_CONFIG.url}/#organization`,
      },
    },
  ],
});

/*
  Notes:

  # EventSeries (A Schema.org Type)
    Reference: https://schema.org/EventSeries
  ------------------------------------------------------------------------
    A series of Events. Included events can relate with the series using the superEvent property.

    An EventSeries is a collection of events that share some unifying characteristic. For example, "The Olympic Games" is a series, which is repeated regularly. The "2012 London Olympics" can be presented both as an Event in the series "Olympic Games", and as an EventSeries that included a number of sporting competitions as Events.

    The nature of the association between the events in an EventSeries can vary, but typical examples could include a thematic event series (e.g. topical meetups or classes), or a series of regular events that share a location, attendee group and/or organizers.

    EventSeries has been defined as a kind of Event to make it easy for publishers to use it in an Event context without worrying about which kinds of series are really event-like enough to call an Event. In general an EventSeries may seem more Event-like when the period of time is compact and when aspects such as location are fixed, but it may also sometimes prove useful to describe a longer-term series as an Event.

  # Event (A Schema.org Type)
    Reference: https://schema.org/Event
  ------------------------------------------------------------------------
    An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the offers property. Repeated events may be structured as separate Event objects.
 */
