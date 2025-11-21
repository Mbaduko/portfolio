import type { ComponentPropsWithoutRef } from 'react';

/**
 * Reusable button component with consistent styling and accessibility
 */
interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  icon,
  className = '',
  ...props 
}: ButtonProps) => {
  const baseClasses = "font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center space-x-2 w-full sm:w-auto";
  
  const variantClasses = {
    primary: "bg-primary-button text-white hover:bg-primary-button/90 shadow-lg hover:shadow-xl",
    secondary: "bg-secondary-bg/60 border border-primary-button/25 text-foreground hover:bg-primary-button/10 hover:border-primary-button/40 hover:text-primary-button backdrop-blur-sm shadow-md hover:shadow-lg"
  };
  
  const sizeClasses = {
    sm: "px-3 py-2 text-xs",
    md: "px-5 py-2.5 text-sm", 
    lg: "px-6 py-3 text-base"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};