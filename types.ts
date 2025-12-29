export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PriceItem {
  service: string;
  price: string;
}

export enum RoutePath {
  HOME = '/',
  ABOUT = '/o-nas',
  SERVICES = '/sluzby',
  EMERGENCY = '/akutni',
  INFO = '/provoz',
  TEAM = '/tym',
  PRICING = '/cenik',
  FAQ = '/faq',
  CONTACT = '/kontakt',
}