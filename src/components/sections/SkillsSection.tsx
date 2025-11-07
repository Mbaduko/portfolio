'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import { useSkills } from '@/lib/graphql/hooks';

export default function SkillsSection() {
  // Fetch skills from GraphQL backend
  const { data: skills, loading, error } = useSkills();

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

  // Helper function to get fallback icon for skills
  const getSkillIcon = (title: string) => {
    // Return a generic icon since backend doesn't provide icon data
    return (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    );
  };

  return (
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
        {skills.map((skill) => (
          <div key={skill.id} className="bg-gradient-to-br from-secondary-bg/40 to-secondary-bg/20 p-6 rounded-2xl border border-secondary-bg/30 hover:border-primary-button/20 transition-all duration-300 group hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-button/20 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
              {getSkillIcon(skill.title)}
            </div>
            
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-foreground to-accent-text bg-clip-text text-transparent">
              {skill.title}
            </h3>
            
            <p className="text-accent-text text-sm mb-6 leading-relaxed">
              {skill.description}
            </p>
            
            {/* Technologies List */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center">
                <svg className="w-4 h-4 mr-2 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Technologies
              </h4>
              <div className="flex flex-wrap gap-3">
                {skill.technologies.map((tech, index) => (
                  <span key={index} className="bg-gradient-to-r from-primary-button/15 to-primary-button/5 text-primary-button px-4 py-2.5 rounded-xl text-sm font-semibold border border-primary-button/25 hover:scale-105 hover:border-primary-button/40 transition-all duration-200 flex items-center gap-3 shadow-sm hover:shadow-md">
                    <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center p-1">
                      <img 
                        src={tech.logo} 
                        alt={`${tech.name} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<span class="text-xs font-bold text-primary-button">${tech.name.charAt(0)}</span>`;
                          }
                        }}
                      />
                    </div>
                    <span className="font-medium">{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
