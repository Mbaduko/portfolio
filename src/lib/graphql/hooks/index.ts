import { useQuery } from '@apollo/client/react';
import { 
  GET_PROJECTS,
  GET_PROJECT_BY_ID,
  GET_TECHNOLOGIES,
  GET_TECHNOLOGY_BY_ID,
  GET_EXPERIENCES,
  GET_EXPERIENCE_BY_ID,
  GET_SKILLS,
  GET_SKILL_BY_ID,
  GET_CERTIFICATES,
  GET_CERTIFICATE_BY_ID,
  GET_PORTFOLIO_DATA
} from '../queries';
import type {
  QueryResult,
  BackendProject,
  BackendTechnology,
  BackendExperience,
  BackendSkill,
  BackendCertificate,
  ProjectsResponse,
  ProjectResponse
} from '../types';

/**
 * GraphQL hooks for fetching portfolio data
 * @module GraphQLHooks
 */

/**
 * Fetches all projects from the GraphQL API
 * @returns Query result with projects array, loading state, error, and refetch function
 */
export const useProjects = (): QueryResult<BackendProject[]> => {
  const { data, loading, error, refetch } = useQuery<ProjectsResponse>(GET_PROJECTS, {
    errorPolicy: 'all',
    notifyOnNetworkStatusChange: true,
  });

  return {
    data: data?.projects,
    loading,
    error,
    refetch,
  };
};

/**
 * Fetches a single project by ID from the GraphQL API
 * @param id - The project ID to fetch
 * @returns Query result with project data, loading state, error, and refetch function
 */
export const useProjectById = (id: string): QueryResult<BackendProject> => {
  const { data, loading, error, refetch } = useQuery<ProjectResponse>(GET_PROJECT_BY_ID, {
    variables: { id },
    skip: !id,
    errorPolicy: 'all',
  });

  return {
    data: data?.project,
    loading,
    error,
    refetch,
  };
};

// Technology Hooks
export const useTechnologies = (): QueryResult<BackendTechnology[]> => {
  const { data, loading, error, refetch } = useQuery<{ technologies: BackendTechnology[] }>(GET_TECHNOLOGIES, {
    errorPolicy: 'all',
  });

  return {
    data: data?.technologies,
    loading,
    error,
    refetch,
  };
};

export const useTechnologyById = (id: string): QueryResult<BackendTechnology> => {
  const { data, loading, error, refetch } = useQuery<{ technology: BackendTechnology }>(GET_TECHNOLOGY_BY_ID, {
    variables: { id },
    skip: !id,
    errorPolicy: 'all',
  });

  return {
    data: data?.technology,
    loading,
    error,
    refetch,
  };
};

// Experience Hooks
export const useExperiences = (): QueryResult<BackendExperience[]> => {
  const { data, loading, error, refetch } = useQuery<{ experiences: BackendExperience[] }>(GET_EXPERIENCES, {
    errorPolicy: 'all',
  });

  return {
    data: data?.experiences,
    loading,
    error,
    refetch,
  };
};

export const useExperienceById = (id: string): QueryResult<BackendExperience> => {
  const { data, loading, error, refetch } = useQuery<{ experience: BackendExperience }>(GET_EXPERIENCE_BY_ID, {
    variables: { id },
    skip: !id,
    errorPolicy: 'all',
  });

  return {
    data: data?.experience,
    loading,
    error,
    refetch,
  };
};

// Skill Hooks
export const useSkills = (): QueryResult<BackendSkill[]> => {
  const { data, loading, error, refetch } = useQuery<{ skills: BackendSkill[] }>(GET_SKILLS, {
    errorPolicy: 'all',
  });

  return {
    data: data?.skills,
    loading,
    error,
    refetch,
  };
};

export const useSkillById = (id: string): QueryResult<BackendSkill> => {
  const { data, loading, error, refetch } = useQuery<{ skill: BackendSkill }>(GET_SKILL_BY_ID, {
    variables: { id },
    skip: !id,
    errorPolicy: 'all',
  });

  return {
    data: data?.skill,
    loading,
    error,
    refetch,
  };
};

// Certificate Hooks
export const useCertificates = (): QueryResult<BackendCertificate[]> => {
  const { data, loading, error, refetch } = useQuery<{ certificates: BackendCertificate[] }>(GET_CERTIFICATES, {
    errorPolicy: 'all',
  });

  return {
    data: data?.certificates,
    loading,
    error,
    refetch,
  };
};

export const useCertificateById = (id: string): QueryResult<BackendCertificate> => {
  const { data, loading, error, refetch } = useQuery<{ certificate: BackendCertificate }>(GET_CERTIFICATE_BY_ID, {
    variables: { id },
    skip: !id,
    errorPolicy: 'all',
  });

  return {
    data: data?.certificate,
    loading,
    error,
    refetch,
  };
};

// Combined Portfolio Data Hook with comprehensive error handling
export const usePortfolioData = (): QueryResult<{
  projects: BackendProject[];
  technologies: BackendTechnology[];
  experiences: BackendExperience[];
  skills: BackendSkill[];
  certificates: BackendCertificate[];
}> => {
  const { data, loading, error, refetch } = useQuery<{
    projects: BackendProject[];
    technologies: BackendTechnology[];
    experiences: BackendExperience[];
    skills: BackendSkill[];
    certificates: BackendCertificate[];
  }>(GET_PORTFOLIO_DATA, {
    errorPolicy: 'all',
  });

  // Log errors for debugging
  if (error) {
    console.error('Portfolio data fetch error:', error.message);
  }

  return {
    data,
    loading,
    error,
    refetch,
  };
};

// Export types for use in components
export type {
  BackendTechnology,
  BackendProject,
  BackendExperience,
  BackendSkill,
  BackendCertificate,
  QueryResult
};