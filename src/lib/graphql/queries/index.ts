import { gql } from '@apollo/client';
import { 
  TECHNOLOGY_FRAGMENT,
  EXPERIENCE_FRAGMENT,
  PROJECT_FRAGMENT,
  SKILL_FRAGMENT,
  CERTIFICATE_FRAGMENT
} from '../fragments';

// Projects Queries - matches backend API
export const GET_PROJECTS = gql`
  query GetAllProjects {
    projects {
      ...ProjectDetails
    }
  }
  ${PROJECT_FRAGMENT}
`;

export const GET_PROJECT_BY_ID = gql`
  query GetProject($id: ID!) {
    project(id: $id) {
      ...ProjectDetails
    }
  }
  ${PROJECT_FRAGMENT}
`;

// Technologies Queries - matches backend API
export const GET_TECHNOLOGIES = gql`
  query GetAllTechnologies {
    technologies {
      ...TechnologyDetails
    }
  }
  ${TECHNOLOGY_FRAGMENT}
`;

export const GET_TECHNOLOGY_BY_ID = gql`
  query GetTechnology($id: ID!) {
    technology(id: $id) {
      ...TechnologyDetails
    }
  }
  ${TECHNOLOGY_FRAGMENT}
`;

// Experiences Queries - matches backend API
export const GET_EXPERIENCES = gql`
  query GetAllExperiences {
    experiences {
      ...ExperienceDetails
    }
  }
  ${EXPERIENCE_FRAGMENT}
`;

export const GET_EXPERIENCE_BY_ID = gql`
  query GetExperience($id: ID!) {
    experience(id: $id) {
      ...ExperienceDetails
    }
  }
  ${EXPERIENCE_FRAGMENT}
`;

// Skills Queries - matches backend API
export const GET_SKILLS = gql`
  query GetAllSkills {
    skills {
      ...SkillDetails
    }
  }
  ${SKILL_FRAGMENT}
`;

export const GET_SKILL_BY_ID = gql`
  query GetSkill($id: ID!) {
    skill(id: $id) {
      ...SkillDetails
    }
  }
  ${SKILL_FRAGMENT}
`;

// Certificates Queries - matches backend API
export const GET_CERTIFICATES = gql`
  query GetAllCertificates {
    certificates {
      ...CertificateDetails
    }
  }
  ${CERTIFICATE_FRAGMENT}
`;

export const GET_CERTIFICATE_BY_ID = gql`
  query GetCertificate($id: ID!) {
    certificate(id: $id) {
      ...CertificateDetails
    }
  }
  ${CERTIFICATE_FRAGMENT}
`;

// Combined Portfolio Data Query
export const GET_PORTFOLIO_DATA = gql`
  query GetPortfolioData {
    projects {
      ...ProjectDetails
    }
    technologies {
      ...TechnologyDetails
    }
    experiences {
      ...ExperienceDetails
    }
    skills {
      ...SkillDetails
    }
    certificates {
      ...CertificateDetails
    }
  }
  ${PROJECT_FRAGMENT}
  ${TECHNOLOGY_FRAGMENT}
  ${EXPERIENCE_FRAGMENT}
  ${SKILL_FRAGMENT}
  ${CERTIFICATE_FRAGMENT}
`;