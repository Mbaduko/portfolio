import { Skill } from '@/types/portfolio';
import { getTechnologiesByIds } from './technologies';

// Store icon SVG paths as strings to avoid JSX compilation issues
export const SKILL_ICONS = {
  webDevelopment: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z',
  databaseManagement: 'M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z',
  systemAdministration: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z'
} as const;

export const SKILLS: Skill[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Building responsive, user-friendly web applications using modern technologies and frameworks.',
    icon: SKILL_ICONS.webDevelopment,
    technologies: getTechnologiesByIds([
      'react', 
      'nextjs', 
      'vue', 
      'angular', 
      'typescript', 
      'tailwind', 
      'materialui', 
      'bootstrap'
    ])
  },
  {
    id: 'database-management',
    title: 'Database Management',
    description: 'Designing and maintaining databases to ensure data integrity and optimal performance.',
    icon: SKILL_ICONS.databaseManagement,
    technologies: getTechnologiesByIds([
      'mongodb', 
      'postgresql', 
      'mysql', 
      'redis', 
      'firebase', 
      'supabase', 
      'prisma', 
      'sequelize'
    ])
  },
  {
    id: 'system-administration',
    title: 'System Administration',
    description: 'Linux server setup, automation, and infrastructure management with modern DevOps practices.',
    icon: SKILL_ICONS.systemAdministration,
    technologies: getTechnologiesByIds([
      'docker', 
      'kubernetes', 
      'aws', 
      'linux', 
      'jenkins', 
      'terraform', 
      'nginx', 
      'git'
    ])
  }
];

export const getSkillById = (id: string): Skill | undefined => {
  return SKILLS.find(skill => skill.id === id);
};

export const getSkillsByTechnology = (technologyId: string): Skill[] => {
  return SKILLS.filter(skill => 
    skill.technologies.some(tech => tech.id === technologyId)
  );
};

export default SKILLS;