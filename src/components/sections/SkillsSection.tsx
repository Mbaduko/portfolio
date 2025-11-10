'use client';

import React from 'react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import { useSkills } from '@/lib/graphql/hooks';
import type { BackendSkill, BackendTechnology } from '@/lib/graphql/types';

// Small presentational card for a single skill with collapsible technologies list
function SkillCard({ 
  skill, 
  getSkillIcon, 
  isVisible, 
  onExpandedChange 
}: { 
  skill: BackendSkill; 
  getSkillIcon: (t: string) => React.ReactElement;
  isVisible: boolean;
  onExpandedChange: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const visibleCount = 4;

  const techs: BackendTechnology[] = Array.isArray(skill.technologies) ? skill.technologies : [];
  const shownTechs = expanded ? techs : techs.slice(0, visibleCount);

  // Auto-collapse when not visible (always return to collapsed state)
  useEffect(() => {
    if (!isVisible) {
      setExpanded(false);
    }
  }, [isVisible]);

  return (
    <div className="bg-secondary-bg/30 p-6 rounded-2xl border border-secondary-bg/30 hover:border-primary-button/20 transition-all duration-300 group hover:scale-105 flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center justify-center w-10 h-10 bg-primary-button/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
          {getSkillIcon(skill.title)}
        </div>

        <h3 className="text-lg font-semibold text-foreground">{skill.title}</h3>
      </div>

      <p className="text-accent-text text-sm mb-4 leading-relaxed">{skill.description}</p>

      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-foreground flex items-center">
          <svg className="w-4 h-4 mr-2 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          Technologies
        </h4>

        {techs.length > visibleCount && (
          <button
            type="button"
            onClick={() => {
              setExpanded(!expanded);
              onExpandedChange();
            }}
            className="text-xs text-primary-button hover:underline"
          >
            {expanded ? 'Show less' : `+${techs.length - visibleCount} more`}
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-3 mb-3">
        {shownTechs.map((tech: BackendTechnology, index: number) => (
          <span key={index} className="bg-primary-button/10 text-primary-button px-4 py-2.5 rounded-xl text-sm font-semibold border border-primary-button/25 transition-all duration-200 flex items-center gap-3">
            <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center p-1 overflow-hidden">
              {tech.logo ? (
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  width={24}
                  height={24}
                  className="w-full h-full object-contain"
                  unoptimized={tech.logo?.includes('cloudinary.com') || tech.logo?.includes('google.com') || false}
                />
              ) : (
                <span className="text-xs font-bold text-primary-button">{tech.name.charAt(0)}</span>
              )}
            </div>
            <span className="font-medium">{tech.name}</span>
          </span>
        ))}
      </div>

      {/* keep card height consistent */}
      <div className="mt-auto" />
    </div>
  );
}

export default function SkillsSection() {
  // Fetch skills from GraphQL backend
  const { data: skills, loading, error } = useSkills();
  
  // Track visibility for auto-collapse behavior
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection observer to detect when skills section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);
      },
      { threshold: 0.1 } // Trigger when 10% of section is visible
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleExpandedChange = () => {
    // No need to save states since we always return to collapsed
  };

  // Handle loading state
  if (loading) {
    return (
      <SectionWrapper id="skills" padding="lg" showBackground>
        <SectionHeader
          title="Core Skills"
          subtitle="Technologies and expertise"
        />
        <div className="text-center py-20">
          <p className="text-muted-foreground">Loading skills...</p>
        </div>
      </SectionWrapper>
    );
  }

  // Handle error state
  if (error || !skills) {
    return (
      <SectionWrapper id="skills" padding="lg" showBackground>
        <SectionHeader
          title="Core Skills"
          subtitle="Technologies and expertise"
        />
        <div className="text-center py-20">
          <p className="text-muted-foreground">Unable to load skills at the moment.</p>
        </div>
      </SectionWrapper>
    );
  }

  // Helper function to get dynamic icon for skills based on title keywords
  const getSkillIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();
    
    // Frontend/UI Development
    if (lowerTitle.includes('frontend') || lowerTitle.includes('ui') || lowerTitle.includes('web') || lowerTitle.includes('client')) {
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      );
    }
    
    // Backend/API Development
    if (lowerTitle.includes('backend') || lowerTitle.includes('server') || lowerTitle.includes('api') || lowerTitle.includes('service')) {
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      );
    }
    
    // Database/Data Management
    if (lowerTitle.includes('database') || lowerTitle.includes('data') || lowerTitle.includes('sql') || lowerTitle.includes('storage')) {
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
          <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
          <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
        </svg>
      );
    }
    
    // DevOps/Infrastructure/Cloud
    if (lowerTitle.includes('devops') || lowerTitle.includes('cloud') || lowerTitle.includes('infrastructure') || lowerTitle.includes('deployment')) {
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
        </svg>
      );
    }
    
    // Mobile Development
    if (lowerTitle.includes('mobile') || lowerTitle.includes('android') || lowerTitle.includes('ios') || lowerTitle.includes('app')) {
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM6 4a1 1 0 011-1h6a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V4zm4 12a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      );
    }
    
    // Security/Cybersecurity
    if (lowerTitle.includes('security') || lowerTitle.includes('cyber') || lowerTitle.includes('auth') || lowerTitle.includes('encryption')) {
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      );
    }
    
    // Testing/Quality Assurance
    if (lowerTitle.includes('test') || lowerTitle.includes('qa') || lowerTitle.includes('quality') || lowerTitle.includes('automation')) {
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      );
    }
    
    // Design/UX/Creative
    if (lowerTitle.includes('design') || lowerTitle.includes('ux') || lowerTitle.includes('ui') || lowerTitle.includes('creative') || lowerTitle.includes('graphic')) {
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      );
    }
    
    // Analytics/Data Science/AI
    if (lowerTitle.includes('analytics') || lowerTitle.includes('data science') || lowerTitle.includes('ai') || lowerTitle.includes('machine learning') || lowerTitle.includes('ml')) {
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      );
    }
    
    // Project Management/Leadership
    if (lowerTitle.includes('project') || lowerTitle.includes('management') || lowerTitle.includes('leadership') || lowerTitle.includes('team')) {
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      );
    }
    
    // Default icon for unmatched skills
    return (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    );
  };

  return (
    <div ref={sectionRef}>
      <SectionWrapper id="skills" padding="lg" showBackground>
        <SectionHeader
          title="Skills & Expertise"
          subtitle="Technical competencies and specializations"
          icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          }
          variant="secondary"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill) => {
            return (
              <SkillCard 
                key={skill.id} 
                skill={skill} 
                getSkillIcon={getSkillIcon} 
                isVisible={isVisible}
                onExpandedChange={handleExpandedChange}
              />
            );
          })}
        </div>
      </SectionWrapper>
    </div>
  );
}
