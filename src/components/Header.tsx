'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'bio', 'skills'];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      // Check if we're at the very top (hero section)
      if (scrollPosition < 200) {
        setActiveSection('home');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
              className={`transition-all duration-200 px-3 py-2 rounded-lg ${
                activeSection === 'home' || activeSection === 'bio'
                  ? 'text-accent-text font-semibold bg-secondary-bg/50 border border-accent-text/20' 
                  : 'text-foreground hover:text-accent-text hover:bg-secondary-bg/30'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`transition-all duration-200 px-3 py-2 rounded-lg ${
                activeSection === 'skills' 
                  ? 'text-accent-text font-semibold bg-secondary-bg/50 border border-accent-text/20' 
                  : 'text-foreground hover:text-accent-text hover:bg-secondary-bg/30'
              }`}
            >
              Skills
            </button>
            <button className="text-foreground hover:text-accent-text transition-colors">
              Projects
            </button>
            <button className="text-foreground hover:text-accent-text transition-colors">
              Technologies
            </button>
            <button className="text-foreground hover:text-accent-text transition-colors">
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
