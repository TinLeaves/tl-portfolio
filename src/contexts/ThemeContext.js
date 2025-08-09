import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      // Default to dark theme but respect system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      // Background colors
      bg: {
        primary: isDark ? 'zinc-950' : 'white',
        secondary: isDark ? 'zinc-900' : 'gray-50',
        tertiary: isDark ? 'zinc-800' : 'gray-100'
      },
      // Text colors
      text: {
        primary: isDark ? 'zinc-100' : 'zinc-900',
        secondary: isDark ? 'zinc-300' : 'zinc-600',
        tertiary: isDark ? 'zinc-400' : 'zinc-500'
      },
      // Border colors
      border: {
        primary: isDark ? 'white/10' : 'zinc-200',
        secondary: isDark ? 'white/5' : 'zinc-300'
      },
      // Accent colors (consistent across themes)
      accent: {
        purple: 'purple-500',
        pink: 'pink-500',
        gradient: 'from-purple-500 to-pink-500'
      }
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}