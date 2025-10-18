export interface Service {
  name: string;
  description: string;
  duration: string;
  price: string;
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
  originalPrice: string;
  discountedPrice: string;
  imageUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}