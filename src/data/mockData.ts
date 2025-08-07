import { TeamMember, Service, Project, TimelineEvent, Achievement } from '../types';

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'With over 15 years of experience in business strategy and leadership, Sarah founded the company with a vision to deliver exceptional digital solutions.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Lead Developer',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Michael brings deep technical expertise in full-stack development and has architected solutions for Fortune 500 companies.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Creative Director',
    image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Emily leads our design team with a focus on user-centered design and has won multiple awards for her creative work.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Marketing Manager',
    image: 'https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'David develops comprehensive marketing strategies that have helped our clients achieve 300% growth in online presence.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: 'Code',
    features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Integration', 'Performance Optimization'],
    price: 'Starting at $5,000'
  },
  {
    id: 2,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: 'Smartphone',
    features: ['React Native', 'iOS Development', 'Android Development', 'App Store Optimization', 'Push Notifications'],
    price: 'Starting at $8,000'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance user experience and drive engagement.',
    icon: 'Palette',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Usability Testing'],
    price: 'Starting at $3,000'
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence.',
    icon: 'TrendingUp',
    features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'PPC Campaigns', 'Analytics & Reporting'],
    price: 'Starting at $2,000/month'
  },
  {
    id: 5,
    title: 'E-commerce Solutions',
    description: 'Full-featured e-commerce platforms that drive sales and customer satisfaction.',
    icon: 'ShoppingCart',
    features: ['Custom E-commerce', 'Payment Integration', 'Inventory Management', 'Order Processing', 'Multi-platform Support'],
    price: 'Starting at $10,000'
  },
  {
    id: 6,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions for modern businesses.',
    icon: 'Cloud',
    features: ['AWS/Azure Setup', 'DevOps Implementation', 'Scalable Architecture', 'Security Implementation', '24/7 Monitoring'],
    price: 'Starting at $4,000'
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with advanced features and seamless user experience.',
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://example.com'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Secure and intuitive mobile banking application with real-time transaction processing.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Mobile Development',
    technologies: ['React Native', 'Firebase', 'Biometric Auth'],
    link: 'https://example.com'
  },
  {
    id: 3,
    title: 'Healthcare Dashboard',
    description: 'Comprehensive healthcare management system for medical professionals.',
    image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Web Development',
    technologies: ['Vue.js', 'Python', 'PostgreSQL'],
    link: 'https://example.com'
  },
  {
    id: 4,
    title: 'Brand Identity Design',
    description: 'Complete brand identity and marketing materials for a tech startup.',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Design',
    technologies: ['Adobe Creative Suite', 'Figma'],
    link: 'https://example.com'
  },
  {
    id: 5,
    title: 'Real Estate Platform',
    description: 'Modern real estate listing platform with advanced search and filtering.',
    image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Web Development',
    technologies: ['Next.js', 'GraphQL', 'Prisma'],
    link: 'https://example.com'
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    description: 'Cross-platform fitness application with social features and progress tracking.',
    image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Mobile Development',
    technologies: ['Flutter', 'Firebase', 'HealthKit'],
    link: 'https://example.com'
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: '2021',
    title: 'Award Recognition',
    description: 'Received "Best Digital Agency" award from the Regional Business Association.',
    details: 'Recognized for outstanding client satisfaction and innovative project delivery.'
  },
  {
    id: 2,
    year: '2022',
    title: 'International Expansion',
    description: 'Opened our second office and began serving clients across North America.',
    details: 'Established partnerships with key technology providers and expanded service offerings.'
  },
  {
    id: 3,
    year: '2023',
    title: 'Innovation Lab',
    description: 'Launched our Innovation Lab focusing on emerging technologies and R&D.',
    details: 'Invested in AI/ML capabilities and blockchain solutions for next-generation applications.'
  }
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Years of Excellence',
    description: 'Delivering exceptional digital solutions since 2018',
    icon: 'Award',
    metric: '6+'
  },
  {
    id: 2,
    title: 'Happy Clients',
    description: 'Trusted by businesses worldwide for their digital transformation',
    icon: 'Users',
    metric: '150+'
  },
  {
    id: 3,
    title: 'Projects Completed',
    description: 'Successful projects delivered on time and within budget',
    icon: 'CheckCircle',
    metric: '300+'
  },
  {
    id: 4,
    title: 'Team Members',
    description: 'Talented professionals dedicated to your success',
    icon: 'UserCheck',
    metric: '25+'
  },
  {
    id: 5,
    title: 'Industry Awards',
    description: 'Recognition for excellence in digital innovation',
    icon: 'Trophy',
    metric: '12'
  },
  {
    id: 6,
    title: 'Client Satisfaction',
    description: 'Average client satisfaction rating across all projects',
    icon: 'Star',
    metric: '98%'
  },
  {
    id: 7,
    title: 'Countries Served',
    description: 'Global reach with local expertise',
    icon: 'Globe',
    metric: '15'
  },
  {
    id: 8,
    title: 'Revenue Growth',
    description: 'Year-over-year growth in client partnerships',
    icon: 'TrendingUp',
    metric: '200%+'
  }
];