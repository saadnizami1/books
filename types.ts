export interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string[];
  pricePaperback: number;
  priceHardcover: number;
  coverColor: string;
  accentColor: string;
  tags: string[];
}

export interface Author {
  name: string;
  bio: string[];
  image?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}