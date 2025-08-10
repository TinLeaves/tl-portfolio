/**
 * Reusable section divider component
 */
export default function SectionDivider({ variant = 'blueTeal', className = '' }) {
  const variants = {
    blueTeal: {
      line: 'from-transparent via-blue-200/50 to-transparent dark:via-blue-700/30',
      dot: 'from-blue-400 to-teal-400'
    },
    tealBlue: {
      line: 'from-transparent via-teal-200/50 to-transparent dark:via-teal-700/30',
      dot: 'from-teal-400 to-blue-400'
    },
    purple: {
      line: 'from-transparent via-purple-200/50 to-transparent dark:via-purple-700/30',
      dot: 'from-purple-400 to-pink-400'
    }
  };

  const { line, dot } = variants[variant];

  return (
    <div className={`relative py-12 ${className}`}>
      <div className="absolute inset-0 flex items-center max-w-4xl mx-auto px-6">
        <div className={`w-full h-px bg-gradient-to-r ${line}`}></div>
      </div>
      <div className="relative flex justify-center">
        <div className={`w-3 h-3 bg-gradient-to-r ${dot} rounded-full shadow-lg`}></div>
      </div>
    </div>
  );
}