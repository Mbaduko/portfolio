'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import { useTechnologies } from '@/lib/graphql/hooks';

export default function TechnologiesSection() {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  // Fetch technologies from GraphQL backend
  const { data: technologies, loading, error } = useTechnologies();

  // Handle loading state
  if (loading) {
    return (
      <SectionWrapper id="technologies" padding="lg" showBackground>
        <SectionHeader
          title="Technologies"
          subtitle="Tools and frameworks I work with"
        />
        <div className="text-center py-20">
          <p className="text-muted-foreground">Loading technologies...</p>
        </div>
      </SectionWrapper>
    );
  }

  // Handle error state
  if (error || !technologies) {
    return (
      <SectionWrapper id="technologies" padding="lg" showBackground>
        <SectionHeader
          title="Technologies"
          subtitle="Tools and frameworks I work with"
        />
        <div className="text-center py-20">
          <p className="text-muted-foreground">Unable to load technologies at the moment.</p>
        </div>
      </SectionWrapper>
    );
  }

  // Group technologies from GraphQL backend by category
  const groupedTechnologies = technologies.reduce((acc, tech) => {
    const category = tech.category || 'other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tech);
    return acc;
  }, {} as Record<string, typeof technologies>);

  // Create category metadata dynamically from backend category names
  const getCategoryInfo = (category: string) => {
    // Default icon for any category
    const defaultIcon = (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    );

    // Capitalize and format the category name from backend
    const formatCategoryTitle = (cat: string) => {
      return cat
        .split(/[-_\s]+/) // Split on hyphens, underscores, or spaces
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    };

    // Generate a generic description
    const generateDescription = (cat: string) => {
      return `${formatCategoryTitle(cat)} technologies and tools`;
    };

    return {
      title: formatCategoryTitle(category),
      description: generateDescription(category),
      icon: defaultIcon
    };
  };

  const handleImageError = (imageKey: string) => {
    setImageErrors(prev => new Set(prev).add(imageKey));
  };

  const isImageError = (imageKey: string) => {
    return imageErrors.has(imageKey);
  };

  return (
    <SectionWrapper id="technologies" padding="lg" showBackground>
      <SectionHeader
        title="Technology Stack"
        subtitle="Tools, frameworks, and technologies I work with"
        icon={
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        }
        variant="primary"
      />
      
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(groupedTechnologies).map(([categoryKey, categoryTechs]) => {
            const categoryInfo = getCategoryInfo(categoryKey);
            return (
              <div key={categoryKey} className="bg-gradient-to-br from-secondary-bg/80 to-secondary-bg/50 p-8 rounded-2xl border border-secondary-bg/40 hover:border-primary-button/20 transition-all duration-300 shadow-lg hover:shadow-xl">
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-button/20 to-primary-button/10 rounded-xl flex items-center justify-center border border-primary-button/20">
                    {categoryInfo.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-accent-text bg-clip-text text-transparent">
                      {categoryInfo.title}
                    </h3>
                    <p className="text-accent-text text-sm mt-1">{categoryInfo.description}</p>
                  </div>
                </div>

                {/* Technologies List */}
                <div className="space-y-4">
                  {categoryTechs.map((tech) => (
                    <div key={tech.id} className="flex items-center space-x-4 p-4 bg-secondary-bg/60 rounded-xl border border-secondary-bg/30 hover:border-primary-button/30 transition-all duration-300">
                      {/* Technology Logo */}
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-button/20 to-primary-button/10 rounded-lg flex items-center justify-center p-2 border border-primary-button/20 flex-shrink-0">
                        {!isImageError(`${categoryKey}-${tech.name}`) ? (
                          <img 
                            src={tech.logo} 
                            alt={`${tech.name} logo`}
                            className="w-full h-full object-contain"
                            onError={() => handleImageError(`${categoryKey}-${tech.name}`)}
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-accent-text/20 to-accent-text/10 rounded flex items-center justify-center">
                            <span className="text-accent-text font-bold text-xs">
                              {tech.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Technology Info */}
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-foreground mb-1">{tech.name}</h4>
                        <p className="text-xs text-accent-text mb-2">{tech.experience}</p>
                        <div className="w-full bg-secondary-bg/80 rounded-full h-1.5 overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-primary-button/60 to-primary-button/40 transition-all duration-1000 ease-out"
                            style={{ width: `${tech.level}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Skill Level */}
                      <div className="text-right flex-shrink-0">
                        <span className="text-xs font-semibold text-accent-text">
                          {tech.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats - Dynamic from Backend Data */}
        <div className="bg-gradient-to-r from-secondary-bg/70 to-secondary-bg/50 rounded-2xl p-8 border border-secondary-bg/40">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Technology Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <svg className="w-8 h-8 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-primary-button mb-1">{technologies.length}</div>
              <div className="text-accent-text text-sm font-medium">Technologies</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <svg className="w-8 h-8 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-primary-button mb-1">
                {(() => {
                  if (technologies.length === 0) return '0';
                  
                  const validLevels = technologies
                    .map(tech => {
                      // Handle various formats that might come from backend
                      let level = tech.level;
                      
                      // If it's a string, try to parse it
                      if (typeof level === 'string') {
                        level = parseFloat(level);
                      }
                      
                      // Convert to number and validate
                      const numLevel = Number(level);
                      
                      // Only accept valid percentages (0-100)
                      return (!isNaN(numLevel) && numLevel >= 0 && numLevel <= 100) ? numLevel : null;
                    })
                    .filter(level => level !== null) as number[];
                  
                  if (validLevels.length === 0) return '0';
                  
                  const average = validLevels.reduce((acc, level) => acc + level, 0) / validLevels.length;
                  return Math.round(average);
                })()}%
              </div>
              <div className="text-accent-text text-sm font-medium">Average Skill</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <svg className="w-8 h-8 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-primary-button mb-1">
                {Object.keys(groupedTechnologies).length}
              </div>
              <div className="text-accent-text text-sm font-medium">Categories</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <svg className="w-8 h-8 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-primary-button mb-1">
                {(() => {
                  const years = technologies
                    .map(tech => tech.experience ? parseInt(tech.experience.match(/(\d+)/)?.[0] || '0') : 0)
                    .filter(year => year > 0);
                  return years.length > 0 ? Math.max(...years) : '3+';
                })()}
              </div>
              <div className="text-accent-text text-sm font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
