/* -------------------------------------------------------------------------- */
/*                                Footer Types                                */
/* -------------------------------------------------------------------------- */

export type FooterContact = {
  address: {
    street: string;
    locality: string;
    region: string;
  };
  phone: string;
};

export type FooterHours = {
  weekdays: {
    days: string;
    hours: string;
  };
  weekends: {
    days: string;
    hours: string;
  };
};
