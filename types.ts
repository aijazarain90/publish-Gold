import { IconType } from 'react-icons';

export interface NavLink {
  name: string;
  href: string;
  isCta?: boolean;
  subLinks?: { name: string; href: string }[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  icon: IconType;
  title: string;
  description: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export interface Book {
  title: string;
  author: string;
  coverUrl: string;
  genre: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface CoreValue {
  icon: IconType;
  title: string;
  description: string;
}