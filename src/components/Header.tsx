'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const mainElement = document.querySelector('main');
      if (!mainElement) return;

      const sections = ['home', 'bio', 'skills', 'experience', 'certificates', 'projects', 'technologies', 'contact'];
      const scrollPosition = mainElement.scrollTop;
      const viewportHeight = mainElement.clientHeight;
      const threshold = 100; // Threshold for section detection

      // Check if we're at the very top (hero section)
      if (scrollPosition < threshold) {
        setActiveSection('home');
        return;
      }

      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          // Check if the section is in the viewport
          if (scrollPosition + threshold >= elementTop && 
              scrollPosition + threshold < elementBottom) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
      // Initial call to set correct active section
      handleScroll();
      return () => mainElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background/95 to-background/90 backdrop-blur-md border-b border-secondary-bg/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 text-2xl font-bold bg-gradient-to-r from-foreground via-primary-button to-accent-text bg-clip-text text-transparent hover:scale-105 transition-all duration-300"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-primary-button to-accent-text rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Mbaduko</span>
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-2">
            <button 
              onClick={() => scrollToSection('home')}
              className={`transition-all duration-300 ease-in-out px-4 py-2.5 rounded-xl font-medium ${
                activeSection === 'home' || activeSection === 'bio'
                  ? 'text-white font-semibold bg-gradient-to-r from-primary-button to-primary-button/90 shadow-lg shadow-primary-button/25 border border-primary-button/30' 
                  : 'text-foreground hover:text-white hover:bg-gradient-to-r hover:from-primary-button/80 hover:to-primary-button/60 hover:shadow-md hover:shadow-primary-button/20'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`transition-all duration-300 ease-in-out px-4 py-2.5 rounded-xl font-medium ${
                activeSection === 'skills' 
                  ? 'text-white font-semibold bg-gradient-to-r from-primary-button to-primary-button/90 shadow-lg shadow-primary-button/25 border border-primary-button/30' 
                  : 'text-foreground hover:text-white hover:bg-gradient-to-r hover:from-primary-button/80 hover:to-primary-button/60 hover:shadow-md hover:shadow-primary-button/20'
              }`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className={`transition-all duration-300 ease-in-out px-4 py-2.5 rounded-xl font-medium ${
                activeSection === 'experience' 
                  ? 'text-white font-semibold bg-gradient-to-r from-primary-button to-primary-button/90 shadow-lg shadow-primary-button/25 border border-primary-button/30' 
                  : 'text-foreground hover:text-white hover:bg-gradient-to-r hover:from-primary-button/80 hover:to-primary-button/60 hover:shadow-md hover:shadow-primary-button/20'
              }`}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('certificates')}
              className={`transition-all duration-300 ease-in-out px-4 py-2.5 rounded-xl font-medium ${
                activeSection === 'certificates' 
                  ? 'text-white font-semibold bg-gradient-to-r from-primary-button to-primary-button/90 shadow-lg shadow-primary-button/25 border border-primary-button/30' 
                  : 'text-foreground hover:text-white hover:bg-gradient-to-r hover:from-primary-button/80 hover:to-primary-button/60 hover:shadow-md hover:shadow-primary-button/20'
              }`}
            >
              Certificates
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`transition-all duration-300 ease-in-out px-4 py-2.5 rounded-xl font-medium ${
                activeSection === 'projects' 
                  ? 'text-white font-semibold bg-gradient-to-r from-primary-button to-primary-button/90 shadow-lg shadow-primary-button/25 border border-primary-button/30' 
                  : 'text-foreground hover:text-white hover:bg-gradient-to-r hover:from-primary-button/80 hover:to-primary-button/60 hover:shadow-md hover:shadow-primary-button/20'
              }`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('technologies')}
              className={`transition-all duration-300 ease-in-out px-4 py-2.5 rounded-xl font-medium ${
                activeSection === 'technologies' 
                  ? 'text-white font-semibold bg-gradient-to-r from-primary-button to-primary-button/90 shadow-lg shadow-primary-button/25 border border-primary-button/30' 
                  : 'text-foreground hover:text-white hover:bg-gradient-to-r hover:from-primary-button/80 hover:to-primary-button/60 hover:shadow-md hover:shadow-primary-button/20'
              }`}
            >
              Technologies
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-all duration-300 ease-in-out px-4 py-2.5 rounded-xl font-medium ${
                activeSection === 'contact' 
                  ? 'text-white font-semibold bg-gradient-to-r from-primary-button to-primary-button/90 shadow-lg shadow-primary-button/25 border border-primary-button/30' 
                  : 'text-foreground hover:text-white hover:bg-gradient-to-r hover:from-primary-button/80 hover:to-primary-button/60 hover:shadow-md hover:shadow-primary-button/20'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Resume Button */}
          <div className="flex-shrink-0">
            <button className="bg-gradient-to-r from-primary-button to-primary-button/90 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-primary-button/90 hover:to-primary-button/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl shadow-primary-button/25 hover:shadow-primary-button/40">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span>Resume</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
