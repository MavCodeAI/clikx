export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  images: string[];
  category: string;
  year: number;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with advanced filtering, real-time inventory, and seamless checkout experience.',
    shortDescription: 'Modern e-commerce with advanced features',
    thumbnail: '/images/projects/ecommerce-thumb.jpg',
    images: ['/images/projects/ecommerce-1.jpg', '/images/projects/ecommerce-2.jpg'],
    category: 'Web Development',
    year: 2024,
    technologies: ['Next.js', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
    liveUrl: 'https://example.com/ecommerce'
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity System',
    description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.',
    shortDescription: 'Complete brand identity for tech startup',
    thumbnail: '/images/projects/brand-thumb.jpg',
    images: ['/images/projects/brand-1.jpg', '/images/projects/brand-2.jpg'],
    category: 'Branding',
    year: 2024,
    technologies: ['Adobe Creative Suite', 'Figma', 'Typography']
  },
  {
    id: 'mobile-app',
    title: 'Fitness Tracking App',
    description: 'Cross-platform mobile app for fitness tracking with social features, workout plans, and progress analytics.',
    shortDescription: 'Cross-platform fitness tracking app',
    thumbnail: '/images/projects/mobile-thumb.jpg',
    images: ['/images/projects/mobile-1.jpg', '/images/projects/mobile-2.jpg'],
    category: 'Mobile Development',
    year: 2023,
    technologies: ['React Native', 'Firebase', 'Node.js']
  },
  {
    id: 'interactive-website',
    title: 'Interactive Portfolio Website',
    description: 'Highly interactive portfolio website with 3D elements, smooth animations, and immersive user experience.',
    shortDescription: 'Interactive portfolio with 3D elements',
    thumbnail: '/images/projects/portfolio-thumb.jpg',
    images: ['/images/projects/portfolio-1.jpg', '/images/projects/portfolio-2.jpg'],
    category: 'Web Development',
    year: 2023,
    technologies: ['Three.js', 'Framer Motion', 'Next.js', 'GSAP']
  },
  {
    id: 'dashboard-ui',
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics dashboard with real-time data visualization and customizable widgets.',
    shortDescription: 'Real-time analytics dashboard',
    thumbnail: '/images/projects/dashboard-thumb.jpg',
    images: ['/images/projects/dashboard-1.jpg', '/images/projects/dashboard-2.jpg'],
    category: 'UI/UX Design',
    year: 2023,
    technologies: ['React', 'D3.js', 'Tailwind CSS']
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics Series',
    description: 'Animated explainer videos and motion graphics for product launches and marketing campaigns.',
    shortDescription: 'Animated explainer videos',
    thumbnail: '/images/projects/motion-thumb.jpg',
    images: ['/images/projects/motion-1.jpg', '/images/projects/motion-2.jpg'],
    category: 'Motion Design',
    year: 2024,
    technologies: ['After Effects', 'Cinema 4D', 'Premiere Pro']
  },
  {
    id: 'api-integration',
    title: 'API Integration Platform',
    description: 'Robust API integration platform connecting multiple services with real-time synchronization.',
    shortDescription: 'API integration platform',
    thumbnail: '/images/projects/api-thumb.jpg',
    images: ['/images/projects/api-1.jpg', '/images/projects/api-2.jpg'],
    category: 'Backend Development',
    year: 2023,
    technologies: ['Node.js', 'GraphQL', 'MongoDB', 'Docker']
  },
  {
    id: 'product-design',
    title: 'Product Design System',
    description: 'Comprehensive design system with components, patterns, and guidelines for consistent product design.',
    shortDescription: 'Comprehensive design system',
    thumbnail: '/images/projects/design-thumb.jpg',
    images: ['/images/projects/design-1.jpg', '/images/projects/design-2.jpg'],
    category: 'Design System',
    year: 2024,
    technologies: ['Figma', 'Storybook', 'React', 'TypeScript']
  }
];
