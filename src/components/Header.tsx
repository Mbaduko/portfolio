'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const mainElement = document.querySelector('main');
      if (!mainElement) return;

      const sections = ['home', 'bio', 'skills', 'projects', 'technologies', 'contact'];
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-secondary-bg/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-foreground hover:text-accent-text transition-colors"
            >
              Mbaduko
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`transition-all duration-300 ease-in-out px-3 py-2 rounded-lg ${
                activeSection === 'home' || activeSection === 'bio'
                  ? 'text-accent-text font-semibold bg-secondary-bg/50 border border-accent-text/20 shadow-sm' 
                  : 'text-foreground hover:text-accent-text hover:bg-secondary-bg/30'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`transition-all duration-300 ease-in-out px-3 py-2 rounded-lg ${
                activeSection === 'skills' 
                  ? 'text-accent-text font-semibold bg-secondary-bg/50 border border-accent-text/20 shadow-sm' 
                  : 'text-foreground hover:text-accent-text hover:bg-secondary-bg/30'
              }`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`transition-all duration-300 ease-in-out px-3 py-2 rounded-lg ${
                activeSection === 'projects' 
                  ? 'text-accent-text font-semibold bg-secondary-bg/50 border border-accent-text/20 shadow-sm' 
                  : 'text-foreground hover:text-accent-text hover:bg-secondary-bg/30'
              }`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('technologies')}
              className={`transition-all duration-300 ease-in-out px-3 py-2 rounded-lg ${
                activeSection === 'technologies' 
                  ? 'text-accent-text font-semibold bg-secondary-bg/50 border border-accent-text/20 shadow-sm' 
                  : 'text-foreground hover:text-accent-text hover:bg-secondary-bg/30'
              }`}
            >
              Technologies
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-all duration-300 ease-in-out px-3 py-2 rounded-lg ${
                activeSection === 'contact' 
                  ? 'text-accent-text font-semibold bg-secondary-bg/50 border border-accent-text/20 shadow-sm' 
                  : 'text-foreground hover:text-accent-text hover:bg-secondary-bg/30'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Resume Button */}
          <div className="flex-shrink-0">
            <button className="bg-primary-button text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-button/90 transition-colors">
              Resume
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
