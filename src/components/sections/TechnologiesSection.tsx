'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';

export default function TechnologiesSection() {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const technologyCategories = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Modern web technologies and frameworks",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
      technologies: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 95, experience: "3+ years" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", level: 90, experience: "2+ years" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 85, experience: "2+ years" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", level: 95, experience: "3+ years" },
        { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", level: 80, experience: "2+ years" }
      ]
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Server-side technologies and APIs",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      technologies: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 95, experience: "3+ years" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 90, experience: "3+ years" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 85, experience: "2+ years" },
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", level: 80, experience: "2+ years" },
        { name: "Socket.io", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg", level: 85, experience: "2+ years" }
      ]
    },
    {
      id: 3,
      title: "Database & Storage",
      description: "Data management and persistence solutions",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      technologies: [
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 90, experience: "3+ years" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 85, experience: "2+ years" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 80, experience: "2+ years" },
        { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", level: 85, experience: "2+ years" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", level: 80, experience: "2+ years" }
      ]
    },
    {
      id: 4,
      title: "DevOps & Cloud",
      description: "Infrastructure and deployment technologies",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
        </svg>
      ),
      technologies: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: 90, experience: "3+ years" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", level: 85, experience: "2+ years" },
        { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", level: 80, experience: "2+ years" },
        { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", level: 90, experience: "3+ years" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 95, experience: "3+ years" }
      ]
    }
  ];

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
          {technologyCategories.map((category) => (
            <div key={category.id} className="bg-gradient-to-br from-secondary-bg/80 to-secondary-bg/50 p-8 rounded-2xl border border-secondary-bg/40 hover:border-primary-button/20 transition-all duration-300 shadow-lg hover:shadow-xl">
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-button/20 to-primary-button/10 rounded-xl flex items-center justify-center border border-primary-button/20">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground bg-gradient-to-r from-foreground to-accent-text bg-clip-text text-transparent">
                    {category.title}
                  </h3>
                  <p className="text-accent-text text-sm mt-1">{category.description}</p>
                </div>
              </div>

              {/* Technologies List */}
              <div className="space-y-4">
                {category.technologies.map((tech, index) => (
                                     <div key={index} className="flex items-center space-x-4 p-4 bg-secondary-bg/60 rounded-xl border border-secondary-bg/30 hover:border-primary-button/30 transition-all duration-300">
                                         {/* Technology Logo */}
                     <div className="w-10 h-10 bg-gradient-to-br from-primary-button/20 to-primary-button/10 rounded-lg flex items-center justify-center p-2 border border-primary-button/20 flex-shrink-0">
                      {isImageError(`tech-${category.id}-${index}`) ? (
                        <span className="text-sm font-bold text-primary-button">
                          {tech.name.charAt(0)}
                        </span>
                      ) : (
                        <img 
                          src={tech.logo} 
                          alt={`${tech.name} logo`}
                          className="w-full h-full object-contain"
                          onError={() => handleImageError(`tech-${category.id}-${index}`)}
                        />
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
          ))}
        </div>

        {/* Summary Stats */}
                 <div className="bg-gradient-to-r from-secondary-bg/70 to-secondary-bg/50 rounded-2xl p-8 border border-secondary-bg/40">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Technology Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <svg className="w-8 h-8 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-primary-button mb-1">20+</div>
              <div className="text-accent-text text-sm font-medium">Technologies</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <svg className="w-8 h-8 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-primary-button mb-1">87%</div>
              <div className="text-accent-text text-sm font-medium">Average Skill</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <svg className="w-8 h-8 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-primary-button mb-1">4</div>
              <div className="text-accent-text text-sm font-medium">Categories</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <svg className="w-8 h-8 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-primary-button mb-1">3+</div>
              <div className="text-accent-text text-sm font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
