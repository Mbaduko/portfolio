/**
 * Common GraphQL types and interfaces used across the application
 * @module GraphQLTypes
 */

// Common query result interface with consistent error handling
export interface QueryResult<T> {
  data: T | undefined;
  loading: boolean;
  error: Error | undefined;
  refetch: () => void;
}

// Backend API Types - matching the exact GraphQL schema
export interface BackendTechnology {
  id: string;
  name: string;
  logo: string;
  level: number;
  experience: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface BackendProject {
  id: string;
  title: string;
  description: string;
  status: string;
  role: string;
  livelink: string;
  githublink: string;
  thumbnail: string;
  technologies: BackendTechnology[];
  createdAt: string;
  updatedAt: string;
}

export interface BackendExperience {
  id: string;
  company: string;
  companyLogo: string;
  position: string;
  location: string;
  from: string;
  to: string;
  achievements: string[];
  createdAt: string;
  updatedAt: string;
}

export interface BackendSkill {
  id: string;
  title: string;
  description: string;
  technologies: BackendTechnology[];
  createdAt: string;
  updatedAt: string;
}

export interface BackendCertificate {
  id: string;
  title: string;
  issuer: string;
  category: 'COMPETITION' | 'ACADEMIC' | 'RECOGNITION';
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  issuedDate: string;
  validUntil?: string;
  credentialId: string;
  logo: string;
  description: string;
  skills: string[];
  createdAt: string;
  updatedAt: string;
}

// GraphQL query response wrappers
export interface ProjectsResponse {
  projects: BackendProject[];
}

export interface ProjectResponse {
  project: BackendProject;
}

export interface TechnologiesResponse {
  technologies: BackendTechnology[];
}

export interface TechnologyResponse {
  technology: BackendTechnology;
}

export interface ExperiencesResponse {
  experiences: BackendExperience[];
}

export interface ExperienceResponse {
  experience: BackendExperience;
}

export interface SkillsResponse {
  skills: BackendSkill[];
}

export interface SkillResponse {
  skill: BackendSkill;
}

export interface CertificatesResponse {
  certificates: BackendCertificate[];
}

export interface CertificateResponse {
  certificate: BackendCertificate;
}

export interface PortfolioDataResponse {
  projects: BackendProject[];
  experiences: BackendExperience[];
  technologies: BackendTechnology[];
  skills: BackendSkill[];
  certificates: BackendCertificate[];
}