import type { 
  BackendExperience, 
  BackendProject, 
  BackendTechnology 
} from '@/lib/graphql/types';

/**
 * Portfolio statistics calculation utilities
 * @module PortfolioUtils
 */

/**
 * Calculates the total years of experience from the earliest start date
 * @param experiences - Array of experience objects
 * @returns Formatted string with years and plus sign (e.g., "5+")
 */
/**
 * Calculate years of experience from experience data
 */
export const calculateYearsExperience = (experiences: BackendExperience[] | undefined): number => {
  if (!experiences || experiences.length === 0) return 0;
  
  const startYears = experiences
    .map(exp => new Date(exp.from).getFullYear())
    .filter(year => !isNaN(year));
  
  if (startYears.length === 0) return 0;
  
  const earliestYear = Math.min(...startYears);
  const currentYear = new Date().getFullYear();
  
  return Math.max(0, currentYear - earliestYear);
};

/**
 * Calculates the total number of completed projects
 * @param projects - Array of project objects
 * @returns Formatted string with count and plus sign (e.g., "25+")
 */
/**
 * Calculate total number of projects
 */
export const calculateProjectsCount = (projects: BackendProject[] | undefined): number => {
  return projects?.length || 0;
};

/**
 * Calculates the total number of technologies mastered
 * @param technologies - Array of technology objects
 * @returns Formatted string with count and plus sign (e.g., "15+")
 */
export const calculateTechnologiesCount = (technologies?: BackendTechnology[]): string => {
  if (!technologies?.length) return '15+';
  return `${technologies.length}+`;
};

/**
 * Calculates the average skill level across all technologies
 * @param technologies - Array of technology objects with level property
 * @returns Average skill level as percentage string (e.g., "85%")
 */
export const calculateAverageSkill = (technologies?: BackendTechnology[]): string => {
  if (!technologies?.length) return '100';
  
  const validLevels = technologies
    .map(tech => {
      let level = tech.level;
      if (typeof level === 'string') {
        level = parseFloat(level);
      }
      const numLevel = Number(level);
      return (!isNaN(numLevel) && numLevel >= 0 && numLevel <= 100) ? numLevel : null;
    })
    .filter((level): level is number => level !== null);
  
  if (!validLevels.length) return '100';
  
  const average = validLevels.reduce((acc, level) => acc + level, 0) / validLevels.length;
  return Math.round(average).toString();
};

/**
 * Smooth scrolls to a section with proper offset for fixed header
 * @param sectionId - The ID of the target section
 * @param headerOffset - Offset for fixed header (default: 100px)
 */
export const scrollToSection = (sectionId: string, headerOffset: number = 100): void => {
  const element = document.getElementById(sectionId);
  const mainElement = document.querySelector('main');
  
  if (!element || !mainElement) return;
  
  const elementTop = element.offsetTop;
  mainElement.scrollTo({
    top: elementTop - headerOffset,
    behavior: 'smooth'
  });
};