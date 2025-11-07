'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import { useProjects, useExperiences, useTechnologies, useSkills } from '@/lib/graphql/hooks';

export default function HeroBioSection() {
  // Fetch data from GraphQL backend
  const { data: projects } = useProjects();
  const { data: experiences } = useExperiences();
  const { data: technologies } = useTechnologies();
  const { data: skills } = useSkills();

  // Calculate dynamic stats
  const calculateYearsExperience = () => {
    if (!experiences || experiences.length === 0) return '3+';
    
    const currentYear = new Date().getFullYear();
    
    // Find the earliest start year from all experiences
    const startYears = experiences.map(exp => new Date(exp.from).getFullYear());
    const earliestYear = Math.min(...startYears);
    
    // Calculate total years from earliest start to current year
    const totalYears = currentYear - earliestYear;
    return `${totalYears}+`;
  };

  const calculateProjectsCount = () => {
    if (!projects || projects.length === 0) return '25+';
    return `${projects.length}+`;
  };

  const calculateTechnologiesCount = () => {
    if (!technologies || technologies.length === 0) return '15+';
    return `${technologies.length}+`;
  };

  const calculateAverageSkill = () => {
    if (!technologies || technologies.length === 0) return '100';
    
    const validLevels = technologies
      .map(tech => {
        let level = tech.level;
        if (typeof level === 'string') {
          level = parseFloat(level);
        }
        const numLevel = Number(level);
        return (!isNaN(numLevel) && numLevel >= 0 && numLevel <= 100) ? numLevel : null;
      })
      .filter(level => level !== null) as number[];
    
    if (validLevels.length === 0) return '100';
    
    const average = validLevels.reduce((acc, level) => acc + level, 0) / validLevels.length;
    return Math.round(average).toString();
  };

  // Generate dynamic expertise from skills data
  const getExpertiseIcon = (skillTitle: string) => {
    const title = skillTitle.toLowerCase();
    
    if (title.includes('backend') || title.includes('api') || title.includes('server')) {
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      );
    } else if (title.includes('database') || title.includes('sql') || title.includes('data')) {
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      );
    } else if (title.includes('devops') || title.includes('ci/cd') || title.includes('automation') || title.includes('deployment')) {
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zm14 0a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
        </svg>
      );
    } else if (title.includes('frontend') || title.includes('react') || title.includes('web') || title.includes('ui')) {
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 000 2v9a2 2 0 002 2h6a2 2 0 002-2V6a1 1 0 100-2H3zm6 2.5A1.5 1.5 0 007.5 8H7v4a1 1 0 11-2 0V8h-.5A1.5 1.5 0 013 6.5V6h6v.5z" clipRule="evenodd" />
        </svg>
      );
    } else if (title.includes('mobile') || title.includes('android') || title.includes('ios') || title.includes('flutter')) {
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      );
    } else if (title.includes('cloud') || title.includes('aws') || title.includes('azure') || title.includes('gcp')) {
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
        </svg>
      );
    } else if (title.includes('system') || title.includes('admin') || title.includes('linux') || title.includes('security')) {
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    } else if (title.includes('machine learning') || title.includes('ai') || title.includes('data science')) {
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    } else {
      // Default programming icon
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      );
    }
  };

  const generateExpertiseDescription = (skillTitle: string) => {
    const title = skillTitle.toLowerCase();
    
    if (title.includes('backend') || title.includes('api')) {
      return "Scalable APIs & Microservices";
    } else if (title.includes('frontend') || title.includes('react') || title.includes('web')) {
      return "Modern Web Interfaces";
    } else if (title.includes('database') || title.includes('sql')) {
      return "SQL & NoSQL Solutions";
    } else if (title.includes('devops') || title.includes('ci/cd')) {
      return "CI/CD & Infrastructure";
    } else if (title.includes('mobile') || title.includes('android') || title.includes('ios')) {
      return "Cross-Platform Applications";
    } else if (title.includes('cloud') || title.includes('aws') || title.includes('azure')) {
      return "Cloud Architecture & Deployment";
    } else if (title.includes('system') || title.includes('admin') || title.includes('linux')) {
      return "Linux & Cloud Platforms";
    } else if (title.includes('machine learning') || title.includes('ai')) {
      return "Intelligent Solutions";
    } else if (title.includes('security') || title.includes('cybersecurity')) {
      return "Security & Compliance";
    } else {
      return "Professional Development";
    }
  };

  const expertise = skills && skills.length > 0 
    ? skills.slice(0, 4).map(skill => ({
        title: skill.title,
        description: generateExpertiseDescription(skill.title),
        icon: getExpertiseIcon(skill.title)
      }))
    : [
        { 
          title: "Backend Development", 
          description: "Scalable APIs & Microservices", 
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          )
        },
        { 
          title: "Database Management", 
          description: "SQL & NoSQL Solutions", 
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          )
        },
        { 
          title: "DevOps & Automation", 
          description: "CI/CD & Infrastructure", 
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zm14 0a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
            </svg>
          )
        },
        { 
          title: "System Administration", 
          description: "Linux & Cloud Platforms", 
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        }
      ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const mainElement = document.querySelector('main');
    
    if (element && mainElement) {
      const elementTop = element.offsetTop;
      mainElement.scrollTo({
        top: elementTop - 100, // Offset for header
        behavior: 'smooth'
      });
    }
  };

  const handleViewWork = () => {
    scrollToSection('projects');
  };

  const handleGetInTouch = () => {
    scrollToSection('contact');
  };

  const handleQuickFactClick = (fact: string) => {
    switch (fact) {
      case 'experience':
        scrollToSection('experience');
        break;
      case 'projects':
        scrollToSection('projects');
        break;
      case 'technologies':
        scrollToSection('technologies');
        break;
      case 'contact':
        scrollToSection('contact');
        break;
      default:
        break;
    }
  };

  return (
    <SectionWrapper id="home" padding="md" showBackground>
      {/* Hero Title - Optimized for Visibility */}
      <div className="text-center mb-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground via-primary-button to-accent-text bg-clip-text text-transparent">
          Let's Digitize Our Continent!!
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary-button to-accent-text mx-auto rounded-full shadow-lg"></div>
      </div>

      {/* Main Content - Optimized Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Professional Journey - Optimized */}
        <div className="lg:col-span-2 bg-gradient-to-br from-secondary-bg/40 to-secondary-bg/20 rounded-3xl p-6 border border-secondary-bg/30 shadow-xl">
          <h3 className="text-xl font-bold text-foreground mb-3 flex items-center">
            <svg className="w-6 h-6 mr-3 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            My Journey
          </h3>
          <p className="text-foreground leading-relaxed mb-3 text-sm">
            From crafting my first <strong className="text-primary-button">"Hello World"</strong> to architecting 
            enterprise solutions, my journey has been driven by an insatiable curiosity for technology. 
            What started as simple scripts evolved into building robust APIs, managing complex databases, 
            and orchestrating cloud infrastructure.
          </p>
          <p className="text-accent-text leading-relaxed text-xs mb-4">
            Today, I blend creativity with technical precision to transform ideas into digital realities, 
            ensuring every line of code tells a story of innovation and excellence.
          </p>
          
          {/* Call to Action - Optimized */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={handleViewWork}
              className="bg-primary-button text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-primary-button/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm cursor-pointer"
            >
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span>View My Work</span>
              </div>
            </button>
            <button 
              onClick={handleGetInTouch}
              className="bg-primary-button/20 border border-primary-button/30 text-primary-button px-5 py-2.5 rounded-xl font-semibold hover:bg-primary-button/30 hover:border-primary-button/50 transition-all duration-300 transform hover:scale-105 text-sm cursor-pointer"
            >
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Get In Touch</span>
              </div>
            </button>
          </div>
        </div>

        {/* Core Expertise - Optimized Grid */}
        <div className="grid grid-cols-2 gap-3">
          {expertise.map((item, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-secondary-bg/40 to-secondary-bg/20 rounded-2xl p-3 border border-secondary-bg/30 hover:border-primary-button/30 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg shadow-md"
              onClick={() => scrollToSection('skills')}
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-primary-button/20 w-10 h-10 rounded-xl flex items-center justify-center">
                  <span className="text-primary-button">{item.icon}</span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-accent-text text-xs leading-tight">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Facts - Always Visible and Prominent */}
      <div className="bg-gradient-to-r from-primary-button/15 to-accent-text/15 rounded-3xl p-5 border border-primary-button/30 shadow-xl">
        <h3 className="text-lg font-bold text-foreground mb-3 text-center">Quick Facts</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div 
            className="text-center cursor-pointer hover:scale-105 transition-all duration-300 p-2 rounded-xl hover:bg-primary-button/15"
            onClick={() => handleQuickFactClick('experience')}
          >
            <div className="flex justify-center mb-1">
              <svg className="w-5 h-5 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-xl font-bold text-primary-button mb-1">{calculateYearsExperience()}</div>
            <div className="text-accent-text text-xs font-medium">Years Experience</div>
          </div>
          <div 
            className="text-center cursor-pointer hover:scale-105 transition-all duration-300 p-2 rounded-xl hover:bg-primary-button/15"
            onClick={() => handleQuickFactClick('projects')}
          >
            <div className="flex justify-center mb-1">
              <svg className="w-5 h-5 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-xl font-bold text-primary-button mb-1">{calculateProjectsCount()}</div>
            <div className="text-accent-text text-xs font-medium">Projects Completed</div>
          </div>
          <div 
            className="text-center cursor-pointer hover:scale-105 transition-all duration-300 p-2 rounded-xl hover:bg-primary-button/15"
            onClick={() => handleQuickFactClick('technologies')}
          >
            <div className="flex justify-center mb-1">
              <svg className="w-5 h-5 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-xl font-bold text-primary-button mb-1">{calculateTechnologiesCount()}</div>
            <div className="text-accent-text text-xs font-medium">Technologies Mastered</div>
          </div>
          <div 
            className="text-center cursor-pointer hover:scale-105 transition-all duration-300 p-2 rounded-xl hover:bg-primary-button/15"
            onClick={() => handleQuickFactClick('contact')}
          >
            <div className="flex justify-center mb-1">
              <svg className="w-5 h-5 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="text-xl font-bold text-primary-button mb-1">{calculateAverageSkill()}%</div>
            <div className="text-accent-text text-xs font-medium">Average Skill</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
