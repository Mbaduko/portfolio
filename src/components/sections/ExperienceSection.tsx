'use client';

import { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import { useExperiences } from '@/lib/graphql/hooks';

export default function ExperienceSection() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  // Fetch experiences from GraphQL backend
  const { data: experiences, loading, error } = useExperiences();

  /**
   * Format date range for display
   */
  const formatDateRange = useCallback((from: string, to: string) => {
    const fromDate = new Date(from).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    const toDate = to ? new Date(to).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present';
    return `${fromDate} - ${toDate}`;
  }, []);

  const toggleExpanded = useCallback((id: string) => {
    setExpandedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  }, []);

  const handleImageError = useCallback((imageKey: string) => {
    setImageErrors(prev => new Set(prev).add(imageKey));
  }, []);

  const isImageError = useCallback((imageKey: string) => {
    return imageErrors.has(imageKey);
  }, [imageErrors]);

  // Memoized experiences rendering for performance
  const renderedExperiences = useMemo(() => {
    return experiences?.map((experience, index) => (
      <div key={experience.id} className="relative group">
        {/* Timeline connector */}
        {index < (experiences?.length || 0) - 1 && (
          <div className="absolute left-5 top-16 sm:top-20 w-0.5 h-16 sm:h-24 bg-primary-button/20"></div>
        )}

        <div className="flex items-start space-x-6">
          {/* Timeline dot */}
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-icon-bg rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 border border-primary-button/20 shadow-sm">
            <svg className="w-5 h-5 text-icon-text" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
          </div>

          {/* Experience content */}
          <div className="flex-1 bg-secondary-bg/45 p-4 sm:p-6 md:p-8 rounded-xl border border-secondary-bg/30 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-primary-button/20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-button/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-text/10 rounded-full translate-y-12 -translate-x-12"></div>
            </div>

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div className="space-y-3">
                {/* Mobile: horizontal bar layout */}
                <div className="flex items-center space-x-3 sm:hidden">
                  {/* Company Logo */}
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-2 border border-secondary-bg/30 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                    {isImageError(`company-${experience.id}`) || !experience.companyLogo ? (
                      <span className="text-xs font-bold text-primary-button">
                        {experience.company.charAt(0)}
                      </span>
                    ) : (
                      <Image 
                        src={experience.companyLogo} 
                        alt={`${experience.company} logo`}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                        onError={() => handleImageError(`company-${experience.id}`)}
                        unoptimized={experience.companyLogo?.includes('cloudinary.com') || experience.companyLogo?.includes('google.com') || false}
                      />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base font-bold text-foreground leading-tight">{experience.position}</h3>
                    <p className="text-primary-button font-semibold text-sm">{experience.company}</p>
                  </div>
                </div>
                {/* Desktop: stacked layout */}
                <div className="hidden sm:block">
                  <h3 className="text-xl font-bold text-foreground">
                    {experience.position}
                  </h3>
                  <div className="flex items-center space-x-3">
                    {/* Company Logo */}
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-2 border border-secondary-bg/30 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                      {isImageError(`company-${experience.id}`) || !experience.companyLogo ? (
                        <span className="text-xs font-bold text-primary-button">
                          {experience.company.charAt(0)}
                        </span>
                      ) : (
                        <Image 
                          src={experience.companyLogo} 
                          alt={`${experience.company} logo`}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                          onError={() => handleImageError(`company-${experience.id}`)}
                          unoptimized={experience.companyLogo?.includes('cloudinary.com') || experience.companyLogo?.includes('google.com') || false}
                        />
                      )}
                    </div>
                    <p className="text-primary-button font-semibold text-lg">{experience.company}</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent-text" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-accent-text text-sm">{experience.location}</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 flex items-center space-x-4">
                <span className="text-primary-button text-sm font-semibold sm:bg-primary-button/15 sm:px-4 sm:py-2 sm:rounded-full sm:border sm:border-primary-button/20 sm:shadow-sm sm:hover:shadow-md sm:transition-all sm:duration-300 ml-auto">
                  {formatDateRange(experience.from, experience.to)}
                </span>
                <button
                  onClick={() => toggleExpanded(experience.id)}
                  aria-label={expandedItems.includes(experience.id) ? "Collapse experience details" : "Expand experience details"}
                  className="hidden sm:inline-flex bg-secondary-bg/50 hover:bg-secondary-bg/70 text-accent-text hover:text-primary-button transition-all duration-300 hover:scale-110 p-2 rounded-lg border border-secondary-bg/30 hover:border-primary-button/30 cursor-pointer relative z-10 min-w-[40px] min-h-[40px]"
                >
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${
                      expandedItems.includes(experience.id) ? 'rotate-180' : ''
                    }`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Key Achievements - Show only when expanded */}
            {expandedItems.includes(experience.id) && (
              <div className="hidden sm:block">
                <h4 className="text-base font-semibold text-foreground mb-4 flex items-center space-x-2">
                  <svg className="w-5 h-5 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Key Achievements</span>
                </h4>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="text-accent-text text-sm flex items-start space-x-3 bg-secondary-bg/30 p-3 rounded-lg border-l-4 border-primary-button/30">
                      <span className="text-primary-button mt-0.5 text-lg">•</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    ));
  }, [experiences, expandedItems, formatDateRange, toggleExpanded, handleImageError, isImageError]);

  // Handle loading state
  if (loading) {
    return (
      <SectionWrapper id="experience" padding="lg" showBackground>
        <SectionHeader
          title="Professional Experience"
          subtitle="My journey and roles"
        />
        <div className="text-center py-20">
          <p className="text-muted-foreground">Loading experiences...</p>
        </div>
      </SectionWrapper>
    );
  }

  // Handle error state
  if (error || !experiences) {
    return (
      <SectionWrapper id="experience" padding="lg" showBackground>
        <SectionHeader
          title="Professional Experience"
          subtitle="My journey and roles"
        />
        <div className="text-center py-20">
          <p className="text-muted-foreground">Unable to load experiences at the moment.</p>
        </div>
      </SectionWrapper>
    );
  };

  return (
    <SectionWrapper id="experience" padding="lg">
      <SectionHeader
        title="Professional Experience"
        subtitle="Work history and career progression"
        icon={
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
          </svg>
        }
        variant="accent"
      />

      <div className="space-y-8">
        {renderedExperiences}
      </div>
    </SectionWrapper>
  );
}
