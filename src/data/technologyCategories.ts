import { TechnologyCategory } from '@/types/portfolio';
import { TECHNOLOGIES } from './technologies';

// Store icon SVG paths as strings
export const CATEGORY_ICONS = {
  frontend: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z',
  backend: 'M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z',
  database: 'M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z',
  devops: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z'
} as const;

export const TECHNOLOGY_CATEGORIES: TechnologyCategory[] = [
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description: 'Modern web technologies and frameworks',
    icon: CATEGORY_ICONS.frontend,
    technologies: [
      { ...TECHNOLOGIES.react, level: 95, experience: '3+ years' },
      { ...TECHNOLOGIES.nextjs, level: 90, experience: '2+ years' },
      { ...TECHNOLOGIES.typescript, level: 85, experience: '2+ years' },
      { ...TECHNOLOGIES.tailwind, level: 95, experience: '3+ years' },
      { ...TECHNOLOGIES.vue, level: 80, experience: '2+ years' }
    ]
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    description: 'Server-side technologies and APIs',
    icon: CATEGORY_ICONS.backend,
    technologies: [
      { ...TECHNOLOGIES.nodejs, level: 95, experience: '3+ years' },
      { ...TECHNOLOGIES.express, level: 90, experience: '3+ years' },
      { ...TECHNOLOGIES.python, level: 85, experience: '2+ years' },
      { ...TECHNOLOGIES.django, level: 80, experience: '2+ years' },
      { ...TECHNOLOGIES.socketio, level: 85, experience: '2+ years' }
    ]
  },
  {
    id: 'database-storage',
    title: 'Database & Storage',
    description: 'Data management and persistence solutions',
    icon: CATEGORY_ICONS.database,
    technologies: [
      { ...TECHNOLOGIES.mongodb, level: 90, experience: '3+ years' },
      { ...TECHNOLOGIES.postgresql, level: 85, experience: '2+ years' },
      { ...TECHNOLOGIES.mysql, level: 80, experience: '2+ years' },
      { ...TECHNOLOGIES.redis, level: 85, experience: '2+ years' },
      { ...TECHNOLOGIES.firebase, level: 80, experience: '2+ years' }
    ]
  },
  {
    id: 'devops-cloud',
    title: 'DevOps & Cloud',
    description: 'Infrastructure and deployment technologies',
    icon: CATEGORY_ICONS.devops,
    technologies: [
      { ...TECHNOLOGIES.docker, level: 90, experience: '3+ years' },
      { ...TECHNOLOGIES.aws, level: 85, experience: '2+ years' },
      { ...TECHNOLOGIES.kubernetes, level: 80, experience: '2+ years' },
      { ...TECHNOLOGIES.linux, level: 90, experience: '3+ years' },
      { ...TECHNOLOGIES.git, level: 95, experience: '3+ years' }
    ]
  }
];

export const getTechnologyCategoryById = (id: string): TechnologyCategory | undefined => {
  return TECHNOLOGY_CATEGORIES.find(category => category.id === id);
};

export default TECHNOLOGY_CATEGORIES;