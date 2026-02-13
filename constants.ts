import { NavLink, Stat, Service, Testimonial, Book, ProcessStep, TeamMember, CoreValue } from './types';
import { FaPenNib, FaBookOpen, FaUpload, FaPaintBrush, FaAd, FaMicrophone, FaCrown, FaHandshake, FaLightbulb } from 'react-icons/fa';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { 
    name: 'Services', 
    href: '#services',
    subLinks: [
      { name: 'Ghostwriting', href: '#ghostwriting' },
      { name: 'Book Editing', href: '#book-editing' },
      { name: 'Book Publishing', href: '#book-publishing' },
      { name: 'Cover Design', href: '#book-cover-design' },
      { name: 'Marketing', href: '#book-marketing' },
      { name: 'Audiobooks', href: '#audiobook-production' },
    ]
  },
  { name: 'Our Books', href: '#portfolio' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Get Started', href: '#contact', isCta: true },
];

export const HERO_STATS: Stat[] = [
  { value: '500+', label: 'Books Published' },
  { value: '60+', label: 'Bestsellers' },
  { value: '10M+', label: 'Copies Sold' },
];

export const SERVICES: Service[] = [
  {
    icon: FaPenNib,
    title: 'Ghostwriting',
    description: 'Professional British ghostwriters to turn your ideas into a compelling manuscript while you retain full ownership.'
  },
  {
    icon: FaBookOpen,
    title: 'Book Editing',
    description: 'Meticulous proofreading and structural editing to ensure your book meets the highest publishing standards.'
  },
  {
    icon: FaUpload,
    title: 'Book Publishing',
    description: 'Complete assistance with self-publishing and traditional routes, including ISBN registration and distribution.'
  },
  {
    icon: FaPaintBrush,
    title: 'Book Cover Design',
    description: 'Custom, eye-catching cover designs tailored to your genre to ensure your book stands out on every shelf.'
  },
  {
    icon: FaAd,
    title: 'Book Marketing',
    description: 'Strategic promotion and social media marketing to help your book reach the right audience and boost sales.'
  },
  {
    icon: FaMicrophone,
    title: 'Audiobook Production',
    description: 'Professional voice-over and high-quality recording services to bring your story to life in audio format.'
  }
];

export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation & Strategy",
    description: "We start with a deep-dive consultation to understand your book's vision, target audience, and publishing goals."
  },
  {
    step: "02",
    title: "Writing & Editing",
    description: "Our expert team works on your manuscript, whether it's ghostwriting from scratch or polishing your existing draft."
  },
  {
    step: "03",
    title: "Design & Production",
    description: "We create stunning cover art and format the interior layouts for both print and digital distribution standards."
  },
  {
    step: "04",
    title: "Launch & Promotion",
    description: "Your book goes live globally. We execute a tailored marketing campaign to maximize visibility and sales."
  }
];

export const BOOKS: Book[] = [
  {
    title: "The Silent Echo",
    author: "Elena Vance",
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600",
    genre: "Mystery"
  },
  {
    title: "Beyond the Horizon",
    author: "Marcus Thorne",
    coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=600",
    genre: "Sci-Fi"
  },
  {
    title: "Culinary Secrets",
    author: "Julia Childers",
    coverUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600",
    genre: "Cooking"
  },
  {
    title: "The Last Empire",
    author: "David Goggins",
    coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600",
    genre: "History"
  },
  {
    title: "Modern Design",
    author: "Sarah Jenkins",
    coverUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=600",
    genre: "Art"
  },
  {
    title: "Coding Dreams",
    author: "Alan Turing",
    coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=600",
    genre: "Technology"
  },
  {
    title: "Forest Whispers",
    author: "Emily Green",
    coverUrl: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=600",
    genre: "Fantasy"
  },
  {
    title: "Urban Jungle",
    author: "Chris Steel",
    coverUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=600",
    genre: "Urban"
  },
  {
    title: "Midnight in Paris",
    author: "Sophie Laurent",
    coverUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600",
    genre: "Romance"
  },
  {
    title: "The Startup Mindset",
    author: "James P. Sullivan",
    coverUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
    genre: "Business"
  },
  {
    title: "Shadows of the Past",
    author: "Richard Cross",
    coverUrl: "https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?auto=format&fit=crop&q=80&w=600",
    genre: "Thriller"
  },
  {
    title: "Wanderlust Chronicles",
    author: "Maya Brooks",
    coverUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=600",
    genre: "Travel"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "Working with them was a game-changer. My book hit the bestseller list within the first week!",
    author: "Alex Sharma",
    role: "Fantasy Author"
  },
  {
    text: "The editing team is phenomenal. They caught nuances I missed and polished my manuscript to perfection.",
    author: "Dr. Emily Carter",
    role: "Non-Fiction Writer"
  },
  {
    text: "From cover design to marketing, PublishGold handled everything. I could focus on writing my sequel.",
    author: "Marcus Thorne",
    role: "Sci-Fi Author"
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    icon: FaCrown,
    title: "Excellence",
    description: "We believe every book deserves a masterpiece standard, from the first word to the final print."
  },
  {
    icon: FaHandshake,
    title: "Integrity",
    description: "Transparency and honesty are at the heart of our author relationships. You keep 100% of your rights."
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    description: "We stay ahead of industry trends to ensure your book thrives in the modern digital marketplace."
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Sarah Gold",
    role: "Founder & CEO",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "James Sterling",
    role: "Editor in Chief",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Marcus Chen",
    role: "Head of Marketing",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Elena Rodriguez",
    role: "Art Director",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
  }
];