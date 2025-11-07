import { Technology } from '@/types/portfolio';

// Master registry of all technologies used across the portfolio
// This eliminates duplication and ensures consistency
export const TECHNOLOGIES: Record<string, Technology> = {
  // Frontend
  react: {
    id: 'react',
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    category: 'frontend'
  },
  nextjs: {
    id: 'nextjs',
    name: 'Next.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    category: 'frontend'
  },
  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    category: 'frontend'
  },
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    category: 'frontend'
  },
  vue: {
    id: 'vue',
    name: 'Vue.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    category: 'frontend'
  },
  angular: {
    id: 'angular',
    name: 'Angular',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    category: 'frontend'
  },
  tailwind: {
    id: 'tailwind',
    name: 'Tailwind CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    category: 'frontend'
  },
  materialui: {
    id: 'materialui',
    name: 'Material-UI',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    category: 'frontend'
  },
  bootstrap: {
    id: 'bootstrap',
    name: 'Bootstrap',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    category: 'frontend'
  },
  html: {
    id: 'html',
    name: 'HTML',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    category: 'frontend'
  },
  css: {
    id: 'css',
    name: 'CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    category: 'frontend'
  },

  // Backend
  nodejs: {
    id: 'nodejs',
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    category: 'backend'
  },
  express: {
    id: 'express',
    name: 'Express.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    category: 'backend'
  },
  python: {
    id: 'python',
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    category: 'backend'
  },
  django: {
    id: 'django',
    name: 'Django',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    category: 'backend'
  },
  php: {
    id: 'php',
    name: 'PHP',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    category: 'backend'
  },
  laravel: {
    id: 'laravel',
    name: 'Laravel',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
    category: 'backend'
  },
  socketio: {
    id: 'socketio',
    name: 'Socket.io',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
    category: 'backend'
  },

  // Databases
  mongodb: {
    id: 'mongodb',
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    category: 'database'
  },
  postgresql: {
    id: 'postgresql',
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    category: 'database'
  },
  mysql: {
    id: 'mysql',
    name: 'MySQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    category: 'database'
  },
  redis: {
    id: 'redis',
    name: 'Redis',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    category: 'database'
  },
  firebase: {
    id: 'firebase',
    name: 'Firebase',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    category: 'database'
  },
  supabase: {
    id: 'supabase',
    name: 'Supabase',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    category: 'database'
  },
  prisma: {
    id: 'prisma',
    name: 'Prisma',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
    category: 'database'
  },
  sequelize: {
    id: 'sequelize',
    name: 'Sequelize',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg',
    category: 'database'
  },

  // DevOps & Cloud
  docker: {
    id: 'docker',
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    category: 'devops'
  },
  kubernetes: {
    id: 'kubernetes',
    name: 'Kubernetes',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    category: 'devops'
  },
  aws: {
    id: 'aws',
    name: 'AWS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    category: 'devops'
  },
  linux: {
    id: 'linux',
    name: 'Linux',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    category: 'devops'
  },
  jenkins: {
    id: 'jenkins',
    name: 'Jenkins',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
    category: 'devops'
  },
  terraform: {
    id: 'terraform',
    name: 'Terraform',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
    category: 'devops'
  },
  nginx: {
    id: 'nginx',
    name: 'Nginx',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
    category: 'devops'
  },
  git: {
    id: 'git',
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    category: 'devops'
  },
  
  // Mobile & Other
  reactnative: {
    id: 'reactnative',
    name: 'React Native',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    category: 'mobile'
  },
  expo: {
    id: 'expo',
    name: 'Expo',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg',
    category: 'mobile'
  },
  stripe: {
    id: 'stripe',
    name: 'Stripe',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg',
    category: 'other'
  },
  wordpress: {
    id: 'wordpress',
    name: 'WordPress',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
    category: 'other'
  },
  chartjs: {
    id: 'chartjs',
    name: 'Chart.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chartjs/chartjs-original.svg',
    category: 'other'
  }
};

// Helper functions to get technologies by category or IDs
export const getTechnologyById = (id: string): Technology | undefined => {
  return TECHNOLOGIES[id];
};

export const getTechnologiesByIds = (ids: string[]): Technology[] => {
  return ids.map(id => TECHNOLOGIES[id]).filter(Boolean);
};

export const getTechnologiesByCategory = (category: Technology['category']): Technology[] => {
  return Object.values(TECHNOLOGIES).filter(tech => tech.category === category);
};

export const getAllTechnologies = (): Technology[] => {
  return Object.values(TECHNOLOGIES);
};

// Export commonly used technology sets
export const FRONTEND_TECHNOLOGIES = getTechnologiesByCategory('frontend');
export const BACKEND_TECHNOLOGIES = getTechnologiesByCategory('backend');
export const DATABASE_TECHNOLOGIES = getTechnologiesByCategory('database');
export const DEVOPS_TECHNOLOGIES = getTechnologiesByCategory('devops');