"use client";

import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';
import MobileDrawer from '@/components/ui/MobileDrawer';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const mainElement = document.querySelector('main');
      if (!mainElement) return;

      const sections = ['home', 'bio', 'skills', 'experience', 'certificates', 'projects', 'technologies', 'contact'];
      const scrollPosition = mainElement.scrollTop;
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

  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const { resolvedTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-secondary-bg/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo (left on all screens) */}
          <div className="flex-shrink-0 order-1 md:order-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 text-2xl font-bold text-foreground hover:text-primary-button hover:scale-105 transition-all duration-300"
            >
              <div className="w-8 h-8 bg-icon-bg rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-icon-text" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Mbaduko</span>
            </button>
          </div>

          {/* Navigation (center on large screens) */}
          <nav className="hidden md:flex flex-1 justify-center space-x-2 order-2">
            <button 
              onClick={() => scrollToSection('home')}
              className={`transition-all duration-300 ease-in-out px-4 py-2.5 rounded-xl font-medium ${
                activeSection === 'home' || activeSection === 'bio'
                  ? 'text-white font-semibold bg-primary-button shadow-lg shadow-primary-button/25 border border-primary-button/30' 
                  : 'text-foreground hover:text-primary-button hover:bg-primary-button/80 hover:shadow-md hover:shadow-primary-button/20'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`transition-all duration-300 ease-in-out px-4 py-2.5 rounded-xl font-medium ${
                activeSection === 'skills' 
                  ? 'text-white font-semibold bg-primary-button shadow-lg shadow-primary-button/25 border border-primary-button/30' 
                  : 'text-foreground hover:text-primary-button hover:bg-primary-button/80 hover:shadow-md hover:shadow-primary-button/20'
              }`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className={`transition-all duration-300 ease-in-out px-4 py-2.5 rounded-xl font-medium ${
                activeSection === 'experience' 
                  ? 'text-white font-semibold bg-primary-button shadow-lg shadow-primary-button/25 border border-primary-button/30' 
                  : 'text-foreground hover:text-primary-button hover:bg-primary-button/80 hover:shadow-md hover:shadow-primary-button/20'
              }`}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('certificates')}
              className={`transition-all duration-300 ease-in-out px-4 py-2.5 rounded-xl font-medium ${
                activeSection === 'certificates' 
                  ? 'text-white font-semibold bg-primary-button shadow-lg shadow-primary-button/25 border border-primary-button/30' 
                  : 'text-foreground hover:text-primary-button hover:bg-primary-button/80 hover:shadow-md hover:shadow-primary-button/20'
              }`}
            >
              Certificates
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`transition-all duration-300 ease-in-out px-4 py-2.5 rounded-xl font-medium ${
                activeSection === 'projects' 
                  ? 'text-white font-semibold bg-primary-button shadow-lg shadow-primary-button/25 border border-primary-button/30' 
                  : 'text-foreground hover:text-primary-button hover:bg-primary-button/80 hover:shadow-md hover:shadow-primary-button/20'
              }`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('technologies')}
              className={`transition-all duration-300 ease-in-out px-4 py-2.5 rounded-xl font-medium ${
                activeSection === 'technologies' 
                  ? 'text-white font-semibold bg-primary-button shadow-lg shadow-primary-button/25 border border-primary-button/30' 
                  : 'text-foreground hover:text-primary-button hover:bg-primary-button/80 hover:shadow-md hover:shadow-primary-button/20'
              }`}
            >
              Technologies
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-all duration-300 ease-in-out px-4 py-2.5 rounded-xl font-medium ${
                activeSection === 'contact' 
                  ? 'text-white font-semibold bg-primary-button shadow-lg shadow-primary-button/25 border border-primary-button/30' 
                  : 'text-foreground hover:text-primary-button hover:bg-primary-button/80 hover:shadow-md hover:shadow-primary-button/20'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Theme toggle + mobile hamburger (right) */}
          <div className="flex items-center space-x-3 order-3 md:order-3">
            <ThemeToggle />

            <div className="md:hidden">
              <button
                ref={mobileTriggerRef}
                onClick={() => setMobileOpen((s) => !s)}
                aria-label="Toggle menu"
                className={`p-2 rounded-lg transition-all ${resolvedTheme === 'dark' ? 'bg-secondary-bg/30 hover:bg-secondary-bg/40' : 'bg-secondary-bg/40 hover:bg-secondary-bg/50'}`}
              >
                <svg className={`w-6 h-6 ${resolvedTheme === 'dark' ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} initialFocusRef={mobileTriggerRef as React.RefObject<HTMLElement>} />
    </header>
  );
}
