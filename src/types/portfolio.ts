// Shared type definitions for portfolio data

export interface Technology {
  id: string;
  name: string;
  logo: string;
  level?: number;
  experience?: string;
  category?: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'other';
}

export interface Skill {
  id: string;
  title: string;
  description: string;
  icon: string; // SVG path string
  technologies: Technology[];
}

export interface Experience {
  id: string;
  company: string;
  companyLogo: string;
  position: string;
  location: string;
  duration: string;
  shortDescription: string;
  fullDescription: string;
  technologies: Technology[];
  achievements: string[];
  startDate: string;
  endDate?: string;
  isCurrentRole: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'Live' | 'In Development' | 'Completed';
  role: string;
  owner: string;
  liveLink?: string;
  githubLink?: string;
  thumbnail: string;
  technologies: Technology[];
  featured?: boolean;
  startDate: string;
  endDate?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'professional' | 'competition' | 'academic' | 'skills' | 'recognition';
  type: 'certification' | 'hackathon' | 'achievement' | 'publication' | 'specialization' | 'appreciation' | 'coding';
  logo: string;
  description: string;
  skills: string[];
  credentialId: string;
  status: 'Active' | 'Achievement' | 'Recognition' | 'Completed' | 'Published';
  validUntil?: string;
  priority: 'high' | 'medium' | 'low';
  verificationUrl?: string;
}

export interface TechnologyCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: (Technology & { level: number; experience: string })[];
}

export interface CertificateCategory {
  id: string;
  name: string;
  count: number;
}

// GraphQL-style input types for mutations (future use)
export interface CreateProjectInput {
  title: string;
  description: string;
  technologies: string[]; // Technology IDs
  liveLink?: string;
  githubLink?: string;
  thumbnail?: string;
}

export interface UpdateExperienceInput {
  id: string;
  position?: string;
  description?: string;
  technologies?: string[]; // Technology IDs
  achievements?: string[];
}

// Response types for GraphQL queries
export interface PortfolioData {
  technologies: Technology[];
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  certificates: Certificate[];
  technologyCategories: TechnologyCategory[];
}

// Utility types for component props
export interface ComponentDataProps<T> {
  data: T[];
  loading?: boolean;
  error?: Error | null;
}