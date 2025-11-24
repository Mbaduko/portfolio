'use client';

import React from 'react';
import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import { useTechnologies, useExperiences } from '@/lib/graphql/hooks';
import type { BackendTechnology } from '@/lib/graphql/types';

// TechnologyCard component for individual category display
interface CategoryInfo {
  title: string;
  description: string;
  icon: React.ReactElement;
}

interface TechnologyCardProps {
  categoryKey: string;
  categoryTechs: BackendTechnology[];
  categoryInfo: CategoryInfo;
  isExpanded: boolean;
  onToggle: () => void;
  imageErrors: Set<string>;
  handleImageError: (key: string) => void;
  isValidImageUrl: (url?: string) => boolean;
}

function TechnologyCard({ 
  categoryKey, 
  categoryTechs, 
  categoryInfo, 
  isExpanded, 
  onToggle,
  imageErrors,
  handleImageError,
  isValidImageUrl
}: TechnologyCardProps) {
  const isImageError = useCallback((imageKey: string) => {
    return imageErrors.has(imageKey);
  }, [imageErrors]);

  const shouldShowExpandButton = categoryTechs.length > 3;
  const visibleTechs = shouldShowExpandButton && !isExpanded ? categoryTechs.slice(0, 3) : categoryTechs;
  const hiddenCount = shouldShowExpandButton ? categoryTechs.length - 3 : 0;

  return (
    <div className="bg-secondary-bg/60 p-4 sm:p-6 md:p-8 rounded-2xl border border-secondary-bg/40 hover:border-primary-button/20 transition-all duration-300 shadow-lg hover:shadow-xl">
      {/* Category Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-primary-button/15 rounded-xl flex items-center justify-center border border-primary-button/20">
            {categoryInfo.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">
              {categoryInfo.title}
            </h3>
            <p className="text-accent-text text-sm mt-1">{categoryInfo.description}</p>
          </div>
        </div>
        {/* Mobile: Toggle button always visible */}
        <button
          onClick={onToggle}
          className="sm:hidden flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-primary-button/10 hover:bg-primary-button/20 border border-primary-button/20 text-primary-button text-sm transition-all duration-200"
        >
          <span>{isExpanded ? 'Hide' : 'View'}</span>
          <svg 
            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {/* Desktop: Show expand/collapse only if needed */}
        {shouldShowExpandButton && (
          <button
            onClick={onToggle}
            className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-primary-button/10 hover:bg-primary-button/20 border border-primary-button/20 text-primary-button text-sm transition-all duration-200"
          >
            <span>{isExpanded ? 'Show Less' : `+${hiddenCount} more`}</span>
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>

      {/* Technologies List */}
      <div className="sm:hidden text-accent-text text-sm mb-4">
        {categoryTechs.length} technologies
      </div>

      <div className="hidden sm:block space-y-4">
        {visibleTechs.map((tech) => (
          <div key={tech.id} className="flex items-center space-x-4 p-4 bg-secondary-bg/60 rounded-xl border border-secondary-bg/30 hover:border-primary-button/30 transition-all duration-300">
            {/* Technology Logo */}
            <div className="w-10 h-10 bg-primary-button/15 rounded-lg flex items-center justify-center p-2 border border-primary-button/20 flex-shrink-0">
              {!isImageError(`${categoryKey}-${tech.name}`) && tech.logo && isValidImageUrl(tech.logo) ? (
                <Image 
                  src={tech.logo} 
                  alt={`${tech.name} logo`}
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                  onError={() => handleImageError(`${categoryKey}-${tech.name}`)}
                  unoptimized={tech.logo?.includes('cloudinary.com') || tech.logo?.includes('google.com') || false}
                />
              ) : (
                <div className="w-full h-full bg-accent-text/15 rounded flex items-center justify-center">
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
                  className="h-full rounded-full bg-primary-button/50 transition-all duration-1000 ease-out"
                  data-level={tech.level}
                  ref={(el) => {
                    if (el) {
                      el.style.width = `${tech.level}%`;
                    }
                  }}
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
      {/* Mobile: Technologies list, only if expanded */}
      {isExpanded && (
        <div className="sm:hidden space-y-4 mt-4">
          {visibleTechs.map((tech) => (
            <div key={tech.id} className="flex items-center space-x-4 p-4 bg-secondary-bg/60 rounded-xl border border-secondary-bg/30 hover:border-primary-button/30 transition-all duration-300">
              {/* Technology Logo */}
              <div className="w-10 h-10 bg-primary-button/15 rounded-lg flex items-center justify-center p-2 border border-primary-button/20 flex-shrink-0">
                {!isImageError(`${categoryKey}-${tech.name}`) && tech.logo && isValidImageUrl(tech.logo) ? (
                  <Image 
                    src={tech.logo} 
                    alt={`${tech.name} logo`}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                    onError={() => handleImageError(`${categoryKey}-${tech.name}`)}
                    unoptimized={tech.logo?.includes('cloudinary.com') || tech.logo?.includes('google.com') || false}
                  />
                ) : (
                  <div className="w-full h-full bg-accent-text/15 rounded flex items-center justify-center">
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
                    className="h-full rounded-full bg-primary-button/50 transition-all duration-1000 ease-out"
                    data-level={tech.level}
                    ref={(el) => {
                      if (el) {
                        el.style.width = `${tech.level}%`;
                      }
                    }}
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
      )}
    </div>
  );
}

export default function TechnologiesSection() {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  // Fetch technologies from GraphQL backend
  const { data: technologies, loading, error } = useTechnologies();
  
  // Fetch experiences for years calculation
  const { data: experiences } = useExperiences();

  // Auto-collapse when section is not visible
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setExpandedCategories(new Set());
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleCategory = useCallback((categoryKey: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryKey)) {
        newSet.delete(categoryKey);
      } else {
        newSet.add(categoryKey);
      }
      return newSet;
    });
  }, []);

  const handleImageError = useCallback((imageKey: string) => {
    setImageErrors(prev => new Set(prev).add(imageKey));
  }, []);

  const isValidImageUrl = useCallback((url: string | null | undefined) => {
    if (!url || typeof url !== 'string') {
      return false;
    }
    try {
      const urlObj = new URL(url);
      // Check if it's not a Google image search result
      if (urlObj.hostname === 'www.google.com' && urlObj.pathname.includes('/imgres')) {
        return false;
      }
      // Allow common image hosting domains
      const allowedDomains = [
        'images.seeklogo.com',
        'cdn.jsdelivr.net',
        'raw.githubusercontent.com',
        'avatars.githubusercontent.com',
        'upload.wikimedia.org',
        'res.cloudinary.com',
        'i.imgur.com',
        'cdn.icon-icons.com',
        'logos-world.net'
      ];
      return allowedDomains.some(domain => urlObj.hostname.includes(domain)) || 
             urlObj.protocol === 'https:';
    } catch {
      return false;
    }
  }, []);

  // Group technologies from GraphQL backend by category
  const groupedTechnologies = useMemo(() => {
    if (!technologies) return {};
    return technologies.reduce((acc, tech) => {
      const category = tech.category || 'other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(tech);
      return acc;
    }, {} as Record<string, typeof technologies>);
  }, [technologies]);

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

  // Create category metadata dynamically from backend category names
  const getCategoryInfo = (category: string) => {
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

    // Get specific icon based on category keywords
    const getCategoryIcon = (cat: string) => {
      const lowerCat = cat.toLowerCase();
      
      // Frontend/UI related
      if (lowerCat.includes('frontend') || lowerCat.includes('ui') || lowerCat.includes('client') || lowerCat.includes('web')) {
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        );
      }
      
      // Backend/Server related
      if (lowerCat.includes('backend') || lowerCat.includes('server') || lowerCat.includes('api') || lowerCat.includes('service')) {
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        );
      }
      
      // Database related
      if (lowerCat.includes('database') || lowerCat.includes('db') || lowerCat.includes('storage') || lowerCat.includes('data')) {
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
          </svg>
        );
      }
      
      // DevOps/Cloud related
      if (lowerCat.includes('devops') || lowerCat.includes('cloud') || lowerCat.includes('deploy') || lowerCat.includes('infrastructure') || lowerCat.includes('ops')) {
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
          </svg>
        );
      }
      
      // Mobile related
      if (lowerCat.includes('mobile') || lowerCat.includes('android') || lowerCat.includes('ios') || lowerCat.includes('app')) {
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM6 4a1 1 0 011-1h6a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V4zm4 12a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        );
      }
      
      // Testing related
      if (lowerCat.includes('test') || lowerCat.includes('qa') || lowerCat.includes('quality')) {
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        );
      }
      
      // Tools/Utilities related
      if (lowerCat.includes('tool') || lowerCat.includes('util') || lowerCat.includes('framework') || lowerCat.includes('library')) {
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        );
      }
      
      // Design/Graphics related
      if (lowerCat.includes('design') || lowerCat.includes('graphic') || lowerCat.includes('ui/ux') || lowerCat.includes('creative')) {
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        );
      }
      
      // Default icon for unmatched categories
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      );
    };

    return {
      title: formatCategoryTitle(category),
      description: generateDescription(category),
      icon: getCategoryIcon(category)
    };
  };



  return (
    <SectionWrapper id="technologies" padding="lg" showBackground ref={sectionRef}>
      <SectionHeader
        title="Technology Stack"
        subtitle="Tools, frameworks, and technologies I work with"
        icon={
          <svg className="w-6 h-6 text-icon-text" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        }
        variant="primary"
      />
      
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedTechnologies).map(([categoryKey, categoryTechs]) => {
            const categoryInfo = getCategoryInfo(categoryKey);
            const isExpanded = expandedCategories.has(categoryKey);
            
            return (
              <TechnologyCard
                key={categoryKey}
                categoryKey={categoryKey}
                categoryTechs={categoryTechs}
                categoryInfo={categoryInfo}
                isExpanded={isExpanded}
                onToggle={() => toggleCategory(categoryKey)}
                imageErrors={imageErrors}
                handleImageError={handleImageError}
                isValidImageUrl={isValidImageUrl}
              />
            );
          })}
        </div>

        {/* Summary Stats - Dynamic from Backend Data, hidden on mobile */}
        <div className="hidden sm:block bg-secondary-bg/60 rounded-2xl p-8 border border-secondary-bg/40">
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
                  if (!experiences || experiences.length === 0) return '3+';
                  
                  const currentYear = new Date().getFullYear();
                  
                  // Find the earliest start year from all experiences
                  const startYears = experiences.map(exp => new Date(exp.from).getFullYear());
                  const earliestYear = Math.min(...startYears);
                  
                  // Calculate total years from earliest start to current year
                  const totalYears = currentYear - earliestYear;
                  return `${totalYears}+`;
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
