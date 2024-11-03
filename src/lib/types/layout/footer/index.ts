export type FooterContact = {
  address: {
    city: string;
    region: string;
    country: string;
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
