import { useState } from 'react';
import { Clipboard } from 'lucide-react';
import { IoLogoGithub, IoLogoLinkedin, IoMailSharp } from "react-icons/io5";
import { PERSONAL_INFO } from '../../utils/constants';

/**
 * Individual contact card components
 */
export function ContactCard({ children, className = '', animated = false, animationIndex = 0, visibleItems = new Set() }) {
  const isVisible = visibleItems.has(animationIndex);
  
  return (
    <div className={`
      group relative flex items-center justify-between p-6 
      bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-700 
      rounded-xl hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-teal-500/10 
      hover:scale-105 transition-all duration-500 hover:border-blue-400/30 
      shadow-lg hover:shadow-xl hover:shadow-blue-500/20 backdrop-blur-sm overflow-hidden 
      transform ${isVisible && animated ? 'translate-y-0 opacity-100' : animated ? '-translate-y-4 opacity-0' : ''} 
      ${className}
    `}>
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm"></div>
      {children}
    </div>
  );
}

export function GitHubCard({ animated = false, animationIndex = 0, visibleItems = new Set() }) {
  return (
    <ContactCard animated={animated} animationIndex={animationIndex} visibleItems={visibleItems}>
      <a
        href={PERSONAL_INFO.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 relative z-10 w-full"
      >
        <IoLogoGithub size={40} className="text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300" />
        <span className="text-lg font-semibold text-zinc-600 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">GitHub/TinLeaves</span>
      </a>
    </ContactCard>
  );
}

export function LinkedInCard({ animated = false, animationIndex = 0, visibleItems = new Set() }) {
  return (
    <ContactCard animated={animated} animationIndex={animationIndex} visibleItems={visibleItems}>
      <a
        href={PERSONAL_INFO.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 relative z-10 w-full"
      >
        <IoLogoLinkedin size={40} className="text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300" />
        <span className="text-lg font-semibold text-zinc-600 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">LinkedIn/Steven Lai</span>
      </a>
    </ContactCard>
  );
}

export function EmailCard({ animated = false, animationIndex = 0, visibleItems = new Set() }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <ContactCard animated={animated} animationIndex={animationIndex} visibleItems={visibleItems}>
      <div className="flex items-center gap-4 relative z-10">
        <IoMailSharp size={30} className="text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300" />
        <span className="text-lg font-semibold text-zinc-600 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">{PERSONAL_INFO.email}</span>
      </div>
      <div className="flex items-center gap-4 relative z-10">
        <button
          onClick={copyEmailToClipboard}
          className="group/btn p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-blue-500/20 transition-all duration-300"
        >
          <Clipboard size={20} className="group-hover/btn:scale-110 transition-transform duration-300" />
        </button>
        {isCopied && (
          <span className="text-sm text-blue-400 font-medium">Copied!</span>
        )}
      </div>
    </ContactCard>
  );
}