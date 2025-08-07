export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
}

export interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  details?: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  metric?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
}