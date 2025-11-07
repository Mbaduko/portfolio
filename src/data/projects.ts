import { Project } from '@/types/portfolio';
import { getTechnologiesByIds } from './technologies';

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with authentication, payment integration, and admin dashboard.',
    status: 'Live',
    role: 'Full Stack Developer',
    owner: 'Personal Project',
    liveLink: 'https://ecommerce-demo.com',
    githubLink: 'https://github.com/mbaduko/ecommerce-platform',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center',
    technologies: getTechnologiesByIds(['nextjs', 'nodejs', 'mongodb', 'stripe', 'tailwind']),
    featured: true,
    startDate: '2024-01-01'
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates, kanban boards, and team collaboration.',
    status: 'Live',
    role: 'Backend Developer',
    owner: 'Company Project',
    liveLink: 'https://taskmanager-demo.com',
    githubLink: 'https://github.com/mbaduko/task-manager',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center',
    technologies: getTechnologiesByIds(['react', 'express', 'socketio', 'postgresql', 'redis']),
    featured: true,
    startDate: '2023-09-01',
    endDate: '2023-12-01'
  },
  {
    id: 'api-gateway',
    title: 'API Gateway',
    description: 'Microservices API gateway with authentication, rate limiting, and service discovery.',
    status: 'In Development',
    role: 'DevOps Engineer',
    owner: 'Personal Project',
    githubLink: 'https://github.com/mbaduko/api-gateway',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center',
    technologies: getTechnologiesByIds(['docker', 'kubernetes', 'redis', 'nginx', 'nodejs']),
    featured: false,
    startDate: '2024-03-01'
  },
  {
    id: 'devops-pipeline',
    title: 'DevOps Pipeline',
    description: 'Automated CI/CD pipeline with testing, security scanning, and monitoring dashboards.',
    status: 'Live',
    role: 'DevOps Engineer',
    owner: 'Client Project',
    liveLink: 'https://pipeline-demo.com',
    githubLink: 'https://github.com/mbaduko/devops-pipeline',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center',
    technologies: getTechnologiesByIds(['jenkins', 'aws', 'terraform', 'docker']),
    featured: true,
    startDate: '2023-06-01',
    endDate: '2023-11-01'
  },
  {
    id: 'social-media-dashboard',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with real-time metrics and reporting.',
    status: 'Live',
    role: 'Frontend Developer',
    owner: 'Client Project',
    liveLink: 'https://social-dashboard.com',
    githubLink: 'https://github.com/mbaduko/social-dashboard',
    thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center',
    technologies: getTechnologiesByIds(['react', 'typescript', 'chartjs', 'firebase', 'materialui']),
    featured: false,
    startDate: '2023-04-01',
    endDate: '2023-08-01'
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management System',
    description: 'Comprehensive inventory tracking system with barcode scanning and automated alerts.',
    status: 'Live',
    role: 'Full Stack Developer',
    owner: 'Company Project',
    liveLink: 'https://inventory-system.com',
    githubLink: 'https://github.com/mbaduko/inventory-system',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center',
    technologies: getTechnologiesByIds(['vue', 'laravel', 'mysql', 'bootstrap']),
    featured: false,
    startDate: '2023-02-01',
    endDate: '2023-07-01'
  },
  {
    id: 'chat-application',
    title: 'Real-time Chat Application',
    description: 'Instant messaging app with file sharing, voice messages, and group chat functionality.',
    status: 'Live',
    role: 'Backend Developer',
    owner: 'Personal Project',
    liveLink: 'https://chat-app.com',
    githubLink: 'https://github.com/mbaduko/chat-app',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center',
    technologies: getTechnologiesByIds(['socketio', 'express', 'mongodb']),
    featured: false,
    startDate: '2022-11-01',
    endDate: '2023-01-01'
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast App',
    description: 'Weather application with location-based forecasts, radar maps, and severe weather alerts.',
    status: 'Live',
    role: 'Frontend Developer',
    owner: 'Personal Project',
    liveLink: 'https://weather-app.com',
    githubLink: 'https://github.com/mbaduko/weather-app',
    thumbnail: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop&crop=center',
    technologies: getTechnologiesByIds(['reactnative', 'expo']),
    featured: false,
    startDate: '2022-09-01',
    endDate: '2022-12-01'
  },
  {
    id: 'restaurant-management',
    title: 'Restaurant Management System',
    description: 'Complete restaurant management solution with order tracking, menu management, and POS integration.',
    status: 'In Development',
    role: 'Full Stack Developer',
    owner: 'Client Project',
    githubLink: 'https://github.com/mbaduko/restaurant-system',
    thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center',
    technologies: getTechnologiesByIds(['angular', 'nodejs', 'postgresql', 'stripe', 'socketio']),
    featured: false,
    startDate: '2024-02-01'
  },
  {
    id: 'lms-platform',
    title: 'Learning Management System',
    description: 'Educational platform with course creation, student progress tracking, and interactive assessments.',
    status: 'Live',
    role: 'Backend Developer',
    owner: 'Company Project',
    liveLink: 'https://lms-platform.com',
    githubLink: 'https://github.com/mbaduko/lms-platform',
    thumbnail: 'https://images.unsplash.com/photo-1523240794102-9ebd0b167f70?w=400&h=300&fit=crop&crop=center',
    technologies: getTechnologiesByIds(['django', 'python', 'postgresql', 'redis']),
    featured: false,
    startDate: '2022-06-01',
    endDate: '2022-11-01'
  },
  {
    id: 'crypto-tracker',
    title: 'Cryptocurrency Tracker',
    description: 'Real-time cryptocurrency price tracking with portfolio management and market analysis tools.',
    status: 'Live',
    role: 'Full Stack Developer',
    owner: 'Personal Project',
    liveLink: 'https://crypto-tracker.com',
    githubLink: 'https://github.com/mbaduko/crypto-tracker',
    thumbnail: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=300&fit=crop&crop=center',
    technologies: getTechnologiesByIds(['nextjs', 'typescript', 'chartjs', 'tailwind']),
    featured: false,
    startDate: '2022-03-01',
    endDate: '2022-08-01'
  },
  {
    id: 'fitness-app',
    title: 'Fitness Tracking App',
    description: 'Comprehensive fitness tracking application with workout planning, progress monitoring, and social features.',
    status: 'Live',
    role: 'Mobile Developer',
    owner: 'Client Project',
    liveLink: 'https://fitness-app.com',
    githubLink: 'https://github.com/mbaduko/fitness-app',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
    technologies: getTechnologiesByIds(['reactnative', 'firebase', 'expo']),
    featured: false,
    startDate: '2022-01-01',
    endDate: '2022-05-01'
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return PROJECTS.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return PROJECTS.filter(project => project.featured);
};

export const getLiveProjects = (): Project[] => {
  return PROJECTS.filter(project => project.status === 'Live');
};

export const getProjectsByTechnology = (technologyId: string): Project[] => {
  return PROJECTS.filter(project => 
    project.technologies.some(tech => tech.id === technologyId)
  );
};

export const getProjectsByRole = (role: string): Project[] => {
  return PROJECTS.filter(project => 
    project.role.toLowerCase().includes(role.toLowerCase())
  );
};

export default PROJECTS;