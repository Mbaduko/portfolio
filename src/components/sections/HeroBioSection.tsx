'use client';

import { useMemo, useCallback } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { useProjects, useExperiences, useTechnologies, useSkills } from '@/lib/graphql/hooks';
import { 
  calculateYearsExperience, 
  calculateProjectsCount, 
  calculateTechnologiesCount, 
  calculateAverageSkill,
  scrollToSection 
} from '@/lib/utils/portfolio';
import { generateExpertise } from '@/lib/utils/expertise';

/**
 * Hero section component showcasing professional bio and key statistics
 * Displays dynamic portfolio data with modern glassmorphic design
 */
export default function HeroBioSection() {
  // Fetch data from GraphQL backend
  const { data: projects } = useProjects();
  const { data: experiences } = useExperiences();
  const { data: technologies } = useTechnologies();
  const { data: skills } = useSkills();

  // Memoized calculations for performance
  const stats = useMemo(() => ({
    yearsExperience: calculateYearsExperience(experiences),
    projectsCount: calculateProjectsCount(projects),
    technologiesCount: calculateTechnologiesCount(technologies),
    averageSkill: calculateAverageSkill(technologies)
  }), [experiences, projects, technologies]);

  const expertise = useMemo(() => generateExpertise(skills), [skills]);

  // Event handlers with proper accessibility
  const handleNavigation = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
  }, []);

  const handleViewWork = useCallback(() => {
    handleNavigation('projects');
  }, [handleNavigation]);

  const handleGetInTouch = useCallback(() => {
    handleNavigation('contact');
  }, [handleNavigation]);

  const handleQuickFactClick = useCallback((fact: string) => {
    const sectionMap: Record<string, string> = {
      experience: 'experience',
      projects: 'projects', 
      technologies: 'technologies',
      contact: 'contact'
    };
    
    const sectionId = sectionMap[fact];
    if (sectionId) {
      handleNavigation(sectionId);
    }
  }, [handleNavigation]);

  return (
    <SectionWrapper id="home" padding="md" showBackground>
      {/* Hero Title - Optimized for Visibility */}
      <div className="text-center mb-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground">
          Mbaduko Christopher
        </h1>
        <div className="w-24 h-1.5 bg-primary-button mx-auto rounded-full shadow-lg"></div>
      </div>

      {/* Main Content - Optimized Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Professional Journey - Modernized Card */}
        <Card variant="default" className="lg:col-span-2">
          <h3 className="text-xl font-bold text-foreground mb-3 flex items-center">
            <svg className="w-6 h-6 mr-3 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            My Journey
          </h3>
          <p className="text-foreground leading-relaxed mb-3 text-sm">
            From crafting my first <strong className="text-primary-button">&quot;Hello World&quot;</strong> to architecting 
            enterprise solutions, my journey has been driven by an insatiable curiosity for technology. 
            What started as simple scripts evolved into building robust APIs, managing complex databases, 
            and orchestrating cloud infrastructure.
          </p>
          <p className="text-accent-text leading-relaxed text-xs mb-4">
            Today, I blend creativity with technical precision to transform ideas into digital realities, 
            ensuring every line of code tells a story of innovation and excellence.
          </p>
          
          {/* Call to Action - Modern Button Components */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              variant="primary" 
              size="md" 
              onClick={handleViewWork}
              aria-label="Navigate to projects section"
              icon={
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              }
            >
              View My Work
            </Button>
            <Button 
              variant="secondary" 
              size="md" 
              onClick={handleGetInTouch}
              aria-label="Navigate to contact section"
              icon={
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              }
            >
              Get In Touch
            </Button>
          </div>
        </Card>

        {/* Core Expertise - Modern Card Grid */}
        <div className="grid grid-cols-2 gap-3">
          {expertise.map((item) => (
            <Card 
              key={item.title} 
              variant="expertise"
              hover
              onClick={() => handleNavigation('skills')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNavigation('skills')}
              aria-label={`Navigate to skills section to learn about ${item.title}`}
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-primary-button/20 w-10 h-10 rounded-xl flex items-center justify-center">
                  <span className="text-primary-button" aria-hidden="true">{item.icon}</span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-accent-text text-xs leading-tight">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Facts - Modern Stats Dashboard */}
      <Card variant="stats">
        <h3 className="text-lg font-bold text-foreground mb-3 text-center">Quick Facts</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button 
            className="text-center cursor-pointer hover:scale-105 transition-all duration-300 p-2 rounded-xl hover:bg-primary-button/15"
            onClick={() => handleQuickFactClick('experience')}
            aria-label={`${stats.yearsExperience} years of professional experience. Click to view experience section.`}
          >
            <div className="flex justify-center mb-1">
              <svg className="w-5 h-5 text-primary-button" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-xl font-bold text-primary-button mb-1">{stats.yearsExperience}</div>
            <div className="text-accent-text text-xs font-medium">Years Experience</div>
          </button>
          
          <button 
            className="text-center cursor-pointer hover:scale-105 transition-all duration-300 p-2 rounded-xl hover:bg-primary-button/15"
            onClick={() => handleQuickFactClick('projects')}
            aria-label={`${stats.projectsCount} projects completed. Click to view projects section.`}
          >
            <div className="flex justify-center mb-1">
              <svg className="w-5 h-5 text-primary-button" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-xl font-bold text-primary-button mb-1">{stats.projectsCount}</div>
            <div className="text-accent-text text-xs font-medium">Projects Completed</div>
          </button>
          
          <button 
            className="text-center cursor-pointer hover:scale-105 transition-all duration-300 p-2 rounded-xl hover:bg-primary-button/15"
            onClick={() => handleQuickFactClick('technologies')}
            aria-label={`${stats.technologiesCount} technologies mastered. Click to view technologies section.`}
          >
            <div className="flex justify-center mb-1">
              <svg className="w-5 h-5 text-primary-button" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-xl font-bold text-primary-button mb-1">{stats.technologiesCount}</div>
            <div className="text-accent-text text-xs font-medium">Technologies Mastered</div>
          </button>
          
          <button 
            className="text-center cursor-pointer hover:scale-105 transition-all duration-300 p-2 rounded-xl hover:bg-primary-button/15"
            onClick={() => handleQuickFactClick('contact')}
            aria-label={`${stats.averageSkill}% average skill level. Click to view contact section.`}
          >
            <div className="flex justify-center mb-1">
              <svg className="w-5 h-5 text-primary-button" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="text-xl font-bold text-primary-button mb-1">{stats.averageSkill}%</div>
            <div className="text-accent-text text-xs font-medium">Average Skill</div>
          </button>
        </div>
      </Card>
    </SectionWrapper>
  );
}
