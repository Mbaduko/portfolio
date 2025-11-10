'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import { useProjects } from '@/lib/graphql/hooks';

export default function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  
  // Fetch projects from backend GraphQL API
  const { data: projects, loading, error, refetch } = useProjects();

  // Handle loading state
  if (loading) {
    return (
      <SectionWrapper id="projects">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A showcase of my work and contributions"
        />
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <span className="ml-4 text-muted-foreground">Loading projects...</span>
        </div>
      </SectionWrapper>
    );
  }

  // Handle error state
  if (error) {
    return (
      <SectionWrapper id="projects">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A showcase of my work and contributions"
        />
        <div className="text-center py-20">
          <div className="text-red-500 mb-4">
            Failed to load projects: {error.message}
          </div>
          <button 
            onClick={() => refetch()} 
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Try Again
          </button>
        </div>
      </SectionWrapper>
    );
  }

  // Handle no data state
  if (!projects || projects.length === 0) {
    return (
      <SectionWrapper id="projects">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A showcase of my work and contributions"
        />
        <div className="text-center py-20">
          <p className="text-muted-foreground">No projects available at the moment.</p>
        </div>
      </SectionWrapper>
    );
  }

  // Now use data from GraphQL backend
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 4);

  const handleImageError = (imageKey: string) => {
    setImageErrors(prev => new Set(prev).add(imageKey));
  };

  const isImageError = (imageKey: string) => {
    return imageErrors.has(imageKey);
  };

  return (
    <SectionWrapper id="projects" padding="lg" showBackground>
      <SectionHeader
        title="Featured Projects"
        subtitle="Showcase of my best work and contributions"
        icon={
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        }
        variant="secondary"
      />
      
      <div className="space-y-8">
        {/* Make project cards smaller and more compact — match Skills card sizing/layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div key={project.id} className="group relative h-full">
              <div className="bg-secondary-bg/30 rounded-2xl border border-secondary-bg/30 overflow-hidden transition-all duration-200 group-hover:scale-105 flex flex-col h-full">
                {/* Compact thumbnail */}
                <div className="relative h-28 bg-secondary-bg/20 overflow-hidden">
                  {project.thumbnail && !isImageError(`thumb-${project.id}`) ? (
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} thumbnail`}
                      fill
                      className="object-cover transition-transform duration-200 group-hover:scale-105"
                      unoptimized={project.thumbnail?.includes('cloudinary.com') || project.thumbnail?.includes('google.com') || false}
                      onError={() => handleImageError(`thumb-${project.id}`)}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-secondary-bg/40 rounded-lg flex items-center justify-center border border-secondary-bg/20">
                        <svg className="w-7 h-7 text-accent-text" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${
                      project.status === 'Live'
                        ? 'bg-green-500/20 text-green-400 border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-accent-text text-sm mb-4 leading-snug line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-secondary-bg/10 text-accent-text px-3 py-1 rounded-full text-xs font-medium border border-secondary-bg/20 flex items-center gap-2">
                        <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center overflow-hidden">
                          {isImageError(`tech-${project.id}-${index}`) || !tech.logo ? (
                            <span className="text-xs font-bold text-primary-button">{tech.name.charAt(0)}</span>
                          ) : (
                            <Image
                              src={tech.logo}
                              alt={`${tech.name} logo`}
                              width={18}
                              height={18}
                              className="object-contain"
                              unoptimized={tech.logo?.includes('cloudinary.com') || tech.logo?.includes('google.com') || false}
                              onError={() => handleImageError(`tech-${project.id}-${index}`)}
                            />
                          )}
                        </div>
                        <span className="text-xs">{tech.name}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    {project.livelink && (
                      <a
                        href={project.livelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary-button text-white px-3 py-2 rounded-md text-sm font-semibold text-center hover:opacity-90 transition"
                      >
                        View
                      </a>
                    )}
                    {project.githublink && (
                      <a
                        href={project.githublink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-secondary-bg/40 text-foreground px-3 py-2 rounded-md text-sm font-semibold text-center border border-secondary-bg/20 hover:opacity-95 transition"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* See More/Less Button */}
        {projects.length > 4 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="bg-gradient-to-r from-primary-button/20 to-primary-button/10 text-primary-button px-8 py-4 rounded-xl font-semibold hover:from-primary-button/30 hover:to-primary-button/20 transition-all duration-300 border border-primary-button/30 hover:border-primary-button/50 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <div className="flex items-center justify-center space-x-3">
                <svg className={`w-5 h-5 transition-transform duration-300 ${showAllProjects ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span>{showAllProjects ? 'Show Less' : `See More Projects (${projects.length - 4})`}</span>
              </div>
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
