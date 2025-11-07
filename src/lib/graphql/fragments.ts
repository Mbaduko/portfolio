import { gql } from '@apollo/client';

// Technology Fragment - matches backend API
export const TECHNOLOGY_FRAGMENT = gql`
  fragment TechnologyDetails on Technology {
    id
    name
    logo
    level
    experience
    category
    createdAt
    updatedAt
  }
`;

// Project Fragment - matches backend API
export const PROJECT_FRAGMENT = gql`
  fragment ProjectDetails on Project {
    id
    title
    description
    status
    role
    livelink
    githublink
    thumbnail
    technologies {
      ...TechnologyDetails
    }
    createdAt
    updatedAt
  }
  ${TECHNOLOGY_FRAGMENT}
`;

// Experience Fragment - matches backend API
export const EXPERIENCE_FRAGMENT = gql`
  fragment ExperienceDetails on Experience {
    id
    company
    companyLogo
    position
    location
    from
    to
    achievements
    createdAt
    updatedAt
  }
`;

// Skill Fragment - matches backend API
export const SKILL_FRAGMENT = gql`
  fragment SkillDetails on Skill {
    id
    title
    description
    technologies {
      ...TechnologyDetails
    }
    createdAt
    updatedAt
  }
  ${TECHNOLOGY_FRAGMENT}
`;

// Certificate Fragment - matches backend API
export const CERTIFICATE_FRAGMENT = gql`
  fragment CertificateDetails on Certificate {
    id
    title
    issuer
    category
    priority
    issuedDate
    validUntil
    credentialId
    logo
    description
    skills
    createdAt
    updatedAt
  }
`;