'use client';

import { useState } from 'react';
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <div key={project.id} className="group relative">
              <div className="bg-gradient-to-br from-secondary-bg/60 to-secondary-bg/30 rounded-2xl border border-secondary-bg/30 overflow-hidden hover:border-primary-button/20 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-[1.02]">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-button/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent-text/20 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                </div>

                {/* Thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-secondary-bg/40 to-secondary-bg/20 overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={`${project.title} thumbnail`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="absolute inset-0 flex items-center justify-center">
                            <div class="w-20 h-20 bg-gradient-to-br from-primary-button/20 to-primary-button/10 rounded-xl flex items-center justify-center border border-primary-button/20 shadow-lg">
                              <svg class="w-10 h-10 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-bg/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Title and Status */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-accent-text bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-accent-text text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Role and Status */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-secondary-bg/30 p-3 rounded-lg border border-secondary-bg/20">
                      <span className="text-xs text-accent-text uppercase tracking-wide block mb-1">Role</span>
                      <p className="text-foreground text-sm font-semibold">{project.role}</p>
                    </div>
                    <div className="bg-secondary-bg/30 p-3 rounded-lg border border-secondary-bg/20">
                      <span className="text-xs text-accent-text uppercase tracking-wide block mb-1">Status</span>
                      <p className="text-foreground text-sm font-semibold">{project.status}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center space-x-2">
                      <svg className="w-4 h-4 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>Technologies</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gradient-to-r from-primary-button/15 to-primary-button/5 text-primary-button px-3 py-2 rounded-xl text-xs font-semibold border border-primary-button/25 hover:scale-105 hover:border-primary-button/40 transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md">
                          <div className="w-5 h-5 bg-white rounded-lg flex items-center justify-center p-0.5">
                            {isImageError(`tech-${project.id}-${index}`) ? (
                              <span className="text-xs font-bold text-primary-button">
                                {tech.name.charAt(0)}
                              </span>
                            ) : (
                              <img 
                                src={tech.logo} 
                                alt={`${tech.name} logo`}
                                className="w-full h-full object-contain"
                                onError={() => handleImageError(`tech-${project.id}-${index}`)}
                              />
                            )}
                          </div>
                          <span className="font-medium">{tech.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.livelink && (
                      <a 
                        href={project.livelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-primary-button to-primary-button/90 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:from-primary-button/90 hover:to-primary-button/80 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span>View Live</span>
                        </div>
                      </a>
                    )}
                    {project.githublink && (
                      <a 
                        href={project.githublink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-secondary-bg/50 to-secondary-bg/30 text-foreground px-4 py-3 rounded-xl text-sm font-semibold hover:from-secondary-bg/70 hover:to-secondary-bg/50 transition-all duration-300 text-center border border-secondary-bg/30 hover:border-primary-button/30 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                          </svg>
                          <span>GitHub</span>
                        </div>
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
