import type { ComponentPropsWithoutRef } from 'react';

/**
 * Reusable card component with glassmorphic styling
 */
interface CardProps extends ComponentPropsWithoutRef<'div'> {
  variant?: 'default' | 'expertise' | 'stats';
  children: React.ReactNode;
  hover?: boolean;
}

export const Card = ({ 
  variant = 'default', 
  children, 
  hover = false,
  className = '',
  ...props 
}: CardProps) => {
  const baseClasses = "rounded-3xl border shadow-xl transition-all duration-300";
  
  const variantClasses = {
    default: "bg-gradient-to-br from-secondary-bg/40 to-secondary-bg/20 border-secondary-bg/30 p-6",
    expertise: "bg-gradient-to-br from-secondary-bg/40 to-secondary-bg/20 border-secondary-bg/30 hover:border-primary-button/30 p-3 shadow-md",
    stats: "bg-gradient-to-r from-primary-button/15 to-accent-text/15 border-primary-button/30 p-5"
  };
  
  const hoverClasses = hover ? "cursor-pointer hover:scale-105 hover:shadow-lg" : "";
  
  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};