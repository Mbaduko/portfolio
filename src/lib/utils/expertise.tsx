import type { BackendSkill } from '@/lib/graphql/types';

/**
 * Portfolio expertise mapping utilities
 * @module ExpertiseUtils
 */

export interface ExpertiseItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

/**
 * Maps skill titles to appropriate SVG icons
 * @param skillTitle - The title of the skill
 * @returns React SVG element for the skill category
 */
export const getExpertiseIcon = (skillTitle: string): React.ReactNode => {
  const title = skillTitle.toLowerCase();
  
  const iconClasses = "w-6 h-6";
  const iconProps = { className: iconClasses, fill: "currentColor", viewBox: "0 0 20 20" };
  
  if (title.includes('backend') || title.includes('api') || title.includes('server')) {
    return (
      <svg {...iconProps}>
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    );
  }
  
  if (title.includes('database') || title.includes('sql') || title.includes('data')) {
    return (
      <svg {...iconProps}>
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
    );
  }
  
  if (title.includes('devops') || title.includes('ci/cd') || title.includes('automation') || title.includes('deployment')) {
    return (
      <svg {...iconProps}>
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zm14 0a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
      </svg>
    );
  }
  
  if (title.includes('frontend') || title.includes('react') || title.includes('web') || title.includes('ui')) {
    return (
      <svg {...iconProps}>
        <path fillRule="evenodd" d="M3 4a1 1 0 000 2v9a2 2 0 002 2h6a2 2 0 002-2V6a1 1 0 100-2H3zm6 2.5A1.5 1.5 0 007.5 8H7v4a1 1 0 11-2 0V8h-.5A1.5 1.5 0 013 6.5V6h6v.5z" clipRule="evenodd" />
      </svg>
    );
  }
  
  if (title.includes('mobile') || title.includes('android') || title.includes('ios') || title.includes('flutter')) {
    return (
      <svg {...iconProps}>
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    );
  }
  
  if (title.includes('cloud') || title.includes('aws') || title.includes('azure') || title.includes('gcp')) {
    return (
      <svg {...iconProps}>
        <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
      </svg>
    );
  }
  
  if (title.includes('system') || title.includes('admin') || title.includes('linux') || title.includes('security')) {
    return (
      <svg {...iconProps}>
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  
  if (title.includes('machine learning') || title.includes('ai') || title.includes('data science')) {
    return (
      <svg {...iconProps}>
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  
  // Default programming icon
  return (
    <svg {...iconProps}>
      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
};

/**
 * Generates appropriate description for skill categories
 * @param skillTitle - The title of the skill
 * @returns Descriptive string for the skill category
 */
export const generateExpertiseDescription = (skillTitle: string): string => {
  const title = skillTitle.toLowerCase();
  
  const descriptionMap: Record<string, string> = {
    backend: "Scalable APIs & Microservices",
    api: "Scalable APIs & Microservices", 
    frontend: "Modern Web Interfaces",
    react: "Modern Web Interfaces",
    web: "Modern Web Interfaces",
    database: "SQL & NoSQL Solutions",
    sql: "SQL & NoSQL Solutions",
    devops: "CI/CD & Infrastructure",
    "ci/cd": "CI/CD & Infrastructure",
    mobile: "Cross-Platform Applications",
    android: "Cross-Platform Applications", 
    ios: "Cross-Platform Applications",
    cloud: "Cloud Architecture & Deployment",
    aws: "Cloud Architecture & Deployment",
    azure: "Cloud Architecture & Deployment",
    system: "Linux & Cloud Platforms",
    admin: "Linux & Cloud Platforms",
    linux: "Linux & Cloud Platforms", 
    "machine learning": "Intelligent Solutions",
    ai: "Intelligent Solutions",
    security: "Security & Compliance",
    cybersecurity: "Security & Compliance"
  };
  
  for (const [key, description] of Object.entries(descriptionMap)) {
    if (title.includes(key)) {
      return description;
    }
  }
  
  return "Professional Development";
};

/**
 * Generates expertise items from skills data with fallback defaults
 * @param skills - Array of skill objects from GraphQL
 * @returns Array of formatted expertise items
 */
export const generateExpertise = (skills?: BackendSkill[]): ExpertiseItem[] => {
  if (skills?.length) {
    return skills.slice(0, 4).map(skill => ({
      title: skill.title,
      description: generateExpertiseDescription(skill.title),
      icon: getExpertiseIcon(skill.title)
    }));
  }
  
  // Default expertise fallback
  return [
    { 
      title: "Backend Development", 
      description: "Scalable APIs & Microservices", 
      icon: getExpertiseIcon("backend")
    },
    { 
      title: "Database Management", 
      description: "SQL & NoSQL Solutions", 
      icon: getExpertiseIcon("database")
    },
    { 
      title: "DevOps & Automation", 
      description: "CI/CD & Infrastructure", 
      icon: getExpertiseIcon("devops")
    },
    { 
      title: "System Administration", 
      description: "Linux & Cloud Platforms", 
      icon: getExpertiseIcon("system")
    }
  ];
};