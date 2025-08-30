'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ExperienceSection() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const experiences = [
    {
      id: 1,
      company: "TechCorp Solutions",
      companyLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      position: "Senior Full Stack Developer",
      location: "Kigali, Rwanda",
      duration: "Jan 2023 - Present",
      shortDescription: "Leading development of enterprise web applications using React, Node.js, and PostgreSQL.",
      fullDescription: "Leading development of enterprise web applications using React, Node.js, and PostgreSQL. Mentoring junior developers and implementing CI/CD pipelines.",
      technologies: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" }
      ],
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led a team of 5 developers on a major client project",
        "Implemented automated testing increasing coverage to 85%"
      ]
    },
    {
      id: 2,
      company: "Digital Innovations Ltd",
      companyLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg",
      position: "Backend Developer",
      location: "Remote",
      duration: "Mar 2022 - Dec 2022",
      shortDescription: "Developed RESTful APIs and microservices using Python, Django, and MongoDB.",
      fullDescription: "Developed RESTful APIs and microservices using Python, Django, and MongoDB. Collaborated with frontend team to ensure seamless integration.",
      technologies: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
      ],
      achievements: [
        "Built 15+ REST APIs serving 10,000+ daily requests",
        "Implemented caching strategy reducing database queries by 60%",
        "Designed database schema for a new e-commerce platform"
      ]
    },
    {
      id: 3,
      company: "StartupHub",
      companyLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
      position: "Junior Developer",
      location: "Kigali, Rwanda",
      duration: "Jun 2021 - Feb 2022",
      shortDescription: "Contributed to various web development projects using modern JavaScript frameworks.",
      fullDescription: "Contributed to various web development projects using modern JavaScript frameworks. Participated in code reviews and agile development processes.",
      technologies: [
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
      ],
      achievements: [
        "Developed 3 client websites from concept to deployment",
        "Improved code quality through peer code reviews",
        "Learned modern development practices and tools"
      ]
    },
    {
      id: 4,
      company: "Freelance Developer",
      companyLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazon/amazon-original.svg",
      position: "Web Developer",
      location: "Remote",
      duration: "Jan 2021 - May 2021",
      shortDescription: "Worked with various clients to build custom websites and web applications.",
      fullDescription: "Worked with various clients to build custom websites and web applications. Managed project timelines and client communications.",
      technologies: [
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" }
      ],
      achievements: [
        "Completed 8 client projects successfully",
        "Built responsive websites for small businesses",
        "Developed custom WordPress themes and plugins"
      ]
    }
  ];

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleImageError = (imageKey: string) => {
    setImageErrors(prev => new Set(prev).add(imageKey));
  };

  const isImageError = (imageKey: string) => {
    return imageErrors.has(imageKey);
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
        {experiences.map((experience, index) => (
          <div key={experience.id} className="relative group">
            {/* Timeline connector */}
            {index < experiences.length - 1 && (
              <div className="absolute left-6 top-20 w-0.5 h-24 bg-gradient-to-b from-primary-button/40 to-secondary-bg/20"></div>
            )}

            <div className="flex items-start space-x-6">
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-12 h-12 bg-primary-button/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>

              {/* Experience content */}
              <div className="flex-1 bg-gradient-to-br from-secondary-bg/60 to-secondary-bg/30 p-8 rounded-xl border border-secondary-bg/30 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-primary-button/20">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground bg-gradient-to-r from-foreground to-accent-text bg-clip-text text-transparent">
                      {experience.position}
                    </h3>
                    <div className="flex items-center space-x-3">
                      {/* Company Logo */}
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-2 border border-secondary-bg/30 shadow-sm">
                        {isImageError(`company-${experience.id}`) ? (
                          <span className="text-xs font-bold text-primary-button">
                            {experience.company.charAt(0)}
                          </span>
                        ) : (
                          <img 
                            src={experience.companyLogo} 
                            alt={`${experience.company} logo`}
                            className="w-full h-full object-contain"
                            onError={() => handleImageError(`company-${experience.id}`)}
                          />
                        )}
                      </div>
                      <p className="text-primary-button font-semibold text-lg">{experience.company}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-accent-text" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-accent-text text-sm">{experience.location}</p>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 flex items-center space-x-4">
                    <span className="bg-gradient-to-r from-primary-button/20 to-primary-button/10 text-primary-button px-4 py-2 rounded-full text-sm font-semibold border border-primary-button/20">
                      {experience.duration}
                    </span>
                    <button
                      onClick={() => toggleExpanded(experience.id)}
                      className="text-accent-text hover:text-primary-button transition-all duration-300 hover:scale-110"
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

                {/* Description */}
                <p className="text-accent-text text-base leading-relaxed mb-6">
                  {expandedItems.includes(experience.id) ? experience.fullDescription : experience.shortDescription}
                </p>

                {/* Technologies - Show only when expanded */}
                {expandedItems.includes(experience.id) && (
                  <div className="mb-6">
                    <h4 className="text-base font-semibold text-foreground mb-4 flex items-center space-x-2">
                      <svg className="w-5 h-5 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>Technologies Used</span>
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {experience.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gradient-to-r from-primary-button/15 to-primary-button/5 text-primary-button px-4 py-2.5 rounded-xl text-sm font-semibold border border-primary-button/25 hover:scale-105 hover:border-primary-button/40 transition-all duration-200 flex items-center gap-3 shadow-sm hover:shadow-md">
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
                )}

                {/* Key Achievements - Show only when expanded */}
                {expandedItems.includes(experience.id) && (
                  <div>
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
        ))}
      </div>
    </SectionWrapper>
  );
}
