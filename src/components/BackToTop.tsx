'use client';

import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Find the main content area that scrolls
      const mainElement = document.querySelector('main');
      if (mainElement) {
        // Show button when user scrolls down 300px in the main content
        if (mainElement.scrollTop > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    // Add scroll listener to the main element instead of window
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.addEventListener('scroll', toggleVisibility);
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener('scroll', toggleVisibility);
      }
    };
  }, []);

  const scrollToTop = () => {
    // Scroll the main content area to top
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-primary-button to-primary-button/90 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 transform hover:from-primary-button/90 hover:to-primary-button/80 border border-primary-button/30"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </>
  );
}
