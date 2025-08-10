import { forwardRef } from 'react';

/**
 * Reusable Button component with multiple variants
 */
const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'right',
  href,
  target,
  rel,
  onClick,
  ...props 
}, ref) => {
  const baseClasses = 'group relative inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-500 transform overflow-hidden focus:outline-none focus:ring-0';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 hover:from-blue-400 hover:to-teal-400 shadow-lg hover:shadow-blue-500/30 hover:shadow-2xl hover:scale-105',
    secondary: 'border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-200 px-6 py-3 hover:bg-gray-100 dark:hover:bg-zinc-800/50 hover:border-blue-400/50 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10',
    ghost: 'text-zinc-600 dark:text-zinc-300 p-2 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20 backdrop-blur-sm',
    card: 'bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-700 p-6 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-teal-500/10 hover:scale-105 hover:border-blue-400/30 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 backdrop-blur-sm text-left'
  };
  
  const sizes = {
    small: 'text-sm px-4 py-2',
    medium: 'text-base px-6 py-3',
    large: 'text-lg px-10 py-5'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`.trim();
  
  const content = (
    <>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
      )}
      {variant === 'secondary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></span>
      )}
      {variant === 'card' && (
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm"></div>
      )}
      
      {Icon && iconPosition === 'left' && (
        <Icon className={`w-4 h-4 group-hover:scale-110 transition-all duration-300 relative z-10 ${loading ? 'animate-spin' : ''}`} />
      )}
      
      <span className="relative z-10">{children}</span>
      
      {Icon && iconPosition === 'right' && (
        <Icon className={`w-4 h-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300 relative z-10 ${loading ? 'animate-spin' : ''}`} />
      )}
    </>
  );
  
  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }
  
  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;