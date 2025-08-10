import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Reusable section title component with scroll animations
 */
export default function SectionTitle({ 
  children, 
  className = '',
  animated = true,
  gradient = 'from-blue-300 via-teal-400 to-blue-500',
  size = 'large'
}) {
  const { elementRef, scrollProgress } = useScrollAnimation(0.1);
  
  const sizes = {
    medium: 'text-3xl sm:text-4xl',
    large: 'text-4xl sm:text-5xl',
    xlarge: 'text-5xl sm:text-6xl'
  };
  
  const baseClasses = `font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r ${gradient} bg-clip-text text-transparent tracking-tight ${sizes[size]} ${className}`;
  
  if (!animated) {
    return <h2 className={baseClasses}>{children}</h2>;
  }
  
  return (
    <h2 
      ref={elementRef}
      className={baseClasses}
      style={{
        opacity: scrollProgress,
        transform: `translateY(${(1 - scrollProgress) * 20}px)`
      }}
    >
      {children}
    </h2>
  );
}