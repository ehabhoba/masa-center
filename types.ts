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

export interface MembershipTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export interface Article {
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
}