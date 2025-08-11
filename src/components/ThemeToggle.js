import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { isDark, themeMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-xl bg-gray-100/60 dark:bg-zinc-800/30 border border-gray-200/50 dark:border-zinc-700/50 hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-500 ${
            isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 text-blue-300 transition-all duration-500 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
          }`} 
        />
      </div>
    </button>
  );
}