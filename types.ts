export interface Service {
  name: string;
  description: string;
  duration: string;
  imageUrl?: string;
}

export interface ServiceCategory {
  title: string;
  services: Service[];
}

export interface Package {
  name: string;
  description: string;
  duration: string;
  imageUrl?: string;
}

export interface HolidayPackage {
  name: string;
  description: string;
  duration: string;
  servicesIncluded: string[];
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}