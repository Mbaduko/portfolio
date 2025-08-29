interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  showBackground?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function SectionWrapper({ 
  children, 
  id, 
  className = '', 
  showBackground = false,
  padding = 'lg'
}: SectionWrapperProps) {
  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20'
  };

  return (
    <section 
      id={id} 
      className={`
        relative ${paddingClasses[padding]}
        ${showBackground ? 'bg-gradient-to-br from-secondary-bg/20 to-transparent' : ''}
        ${className}
      `}
    >
      {/* Background Pattern (if enabled) */}
      {showBackground && (
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-primary-button/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-tl from-accent-text/20 to-transparent rounded-full blur-3xl"></div>
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
}
