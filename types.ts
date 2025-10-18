// FIX: Removed the self-import of 'Service' which was causing a conflict with the local declaration.
export interface Service {
  name: string;
  description: string;
  duration: string;
  imageUrl: string;
}

export interface ServiceCategory {
  title: string;
  services: Service[];
}

export interface Package {
  name: string;
  description: string;
  duration: string;
  imageUrl: string;
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

export interface WhyChooseUsItem {
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}