import { IoLogoGithub, IoLogoLinkedin, IoMailSharp } from "react-icons/io5";
import { PERSONAL_INFO } from '../../utils/constants';

/**
 * Reusable social links component
 */
export default function SocialLinks({ 
  variant = 'horizontal',
  size = 'medium',
  showLabels = false,
  animated = true,
  className = ''
}) {
  const socialLinks = [
    {
      name: 'GitHub',
      url: PERSONAL_INFO.github,
      icon: IoLogoGithub,
      label: showLabels ? 'GitHub/TinLeaves' : 'GitHub'
    },
    {
      name: 'LinkedIn', 
      url: PERSONAL_INFO.linkedin,
      icon: IoLogoLinkedin,
      label: showLabels ? 'LinkedIn/Steven Lai' : 'LinkedIn'
    },
    {
      name: 'Email',
      url: `mailto:${PERSONAL_INFO.email}`,
      icon: IoMailSharp,
      label: showLabels ? PERSONAL_INFO.email : 'Email'
    }
  ];

  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5 sm:w-6 sm:h-6',
    large: 'w-8 h-8'
  };

  const containerClasses = {
    horizontal: 'flex gap-3 sm:gap-4',
    vertical: 'flex flex-col gap-4',
    grid: 'grid grid-cols-1 sm:grid-cols-3 gap-4'
  };

  const linkBaseClasses = `group transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-300`;
  
  const linkVariantClasses = {
    horizontal: 'p-2 sm:p-3 hover:bg-blue-500/10 rounded-lg sm:rounded-xl border border-transparent hover:border-blue-500/20 backdrop-blur-sm',
    vertical: 'flex items-center gap-4 p-6 bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-700 rounded-xl hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-teal-500/10 hover:scale-105 hover:border-blue-400/30 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 backdrop-blur-sm overflow-hidden',
    grid: 'flex items-center gap-4 p-6 bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-700 rounded-xl hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-teal-500/10 hover:scale-105 hover:border-blue-400/30 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 backdrop-blur-sm overflow-hidden'
  };

  return (
    <div className={`${containerClasses[variant]} ${className}`}>
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        
        return (
          <a
            key={social.name}
            href={social.url}
            target={social.name !== 'Email' ? '_blank' : undefined}
            rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
            className={`
              ${linkBaseClasses} 
              ${linkVariantClasses[variant]}
              ${animated ? 'relative' : ''}
            `}
            style={animated ? {
              transform: `translateY(${animated ? 0 : '-4px'})`,
              opacity: animated ? 1 : 0,
              transitionDelay: `${index * 150}ms`
            } : {}}
          >
            {(variant === 'vertical' || variant === 'grid') && (
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm"></div>
            )}
            
            <div className={`flex items-center ${variant === 'horizontal' ? 'gap-0' : 'gap-4'} relative z-10`}>
              <IconComponent 
                className={`
                  ${sizes[size]} 
                  text-zinc-500 dark:text-zinc-400 
                  group-hover:text-blue-600 dark:group-hover:text-blue-300 
                  group-hover:scale-110 transition-all duration-300
                `} 
              />
              
              {(variant === 'vertical' || variant === 'grid') && showLabels && (
                <span className="text-lg font-semibold text-zinc-600 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                  {social.label}
                </span>
              )}
            </div>
          </a>
        );
      })}
    </div>
  );
}