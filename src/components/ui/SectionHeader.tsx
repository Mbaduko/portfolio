interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  showDivider?: boolean;
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  icon, 
  variant = 'primary',
  showDivider = true 
}: SectionHeaderProps) {
  const variants = {
    primary: {
      bg: 'bg-primary-button/15',
      border: 'border-primary-button/30',
      text: 'text-primary-button',
      iconBg: 'bg-primary-button/20'
    },
    secondary: {
      bg: 'bg-secondary-bg/40',
      border: 'border-secondary-bg/40',
      text: 'text-accent-text',
      iconBg: 'bg-secondary-bg/50'
    },
    accent: {
      bg: 'bg-accent-text/15',
      border: 'border-accent-text/30',
      text: 'text-accent-text',
      iconBg: 'bg-accent-text/20'
    }
  };

  const currentVariant = variants[variant];

  return (
    <div className="relative mb-12">
      {/* Section Header */}
      <div className={`relative ${currentVariant.bg} border ${currentVariant.border} rounded-2xl p-6 backdrop-blur-sm`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-10">
          <div className="absolute inset-0 bg-white/3"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
        </div>

        {/* Content */}
        <div className="relative flex items-center space-x-4">
          {/* Icon */}
          {icon && (
            <div className={`${currentVariant.iconBg} w-12 h-12 rounded-xl flex items-center justify-center border ${currentVariant.border}`}>
              <div className={`${currentVariant.text} text-xl`}>
                {icon}
              </div>
            </div>
          )}

          {/* Text Content */}
          <div className="flex-1">
            <h2 className={`text-base sm:text-xl font-semibold tracking-tight ${currentVariant.text} mb-1`}>
              {title}
            </h2>
            {subtitle && (
              <p className="hidden sm:block text-accent-text text-sm font-medium">
                {subtitle}
              </p>
            )}
          </div>

          {/* Decorative Elements */}
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${currentVariant.text} bg-current`}></div>
            <div className={`w-1 h-1 rounded-full ${currentVariant.text} bg-current opacity-60`}></div>
            <div className={`w-0.5 h-0.5 rounded-full ${currentVariant.text} bg-current opacity-40`}></div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 ${currentVariant.bg} rounded-b-2xl`}></div>
      </div>

      {/* Section Divider */}
      {showDivider && (
        <div className="relative mt-8 mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-secondary-bg/30"></div>
          </div>
          <div className="relative flex justify-center">
            <div className={`${currentVariant.bg} px-4 py-2 rounded-full border ${currentVariant.border}`}>
              <div className={`w-2 h-2 rounded-full ${currentVariant.text} bg-current`}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
