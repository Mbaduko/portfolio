import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  showBackground?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(({ 
  children, 
  id, 
  className = '', 
  showBackground = false,
  padding = 'lg'
}, ref) => {
  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20'
  };

  return (
    <section 
      ref={ref}
      id={id} 
      className={`
        relative ${paddingClasses[padding]}
        ${showBackground ? 'bg-secondary-bg/10' : ''}
        ${className}
      `}
    >
      {/* Background Pattern (if enabled) */}
      {showBackground && (
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-button/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent-text/10 rounded-full blur-3xl"></div>
        </div>
      )}

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>

      {/* Bottom Spacing */}
      <div className="h-8"></div>
    </section>
  );
});

SectionWrapper.displayName = 'SectionWrapper';

export default SectionWrapper;
