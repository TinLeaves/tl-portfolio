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
  const [themeMode, setThemeMode] = useState('system'); // 'system', 'light', 'dark'
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedThemeMode = localStorage.getItem('themeMode');
    
    if (savedThemeMode) {
      setThemeMode(savedThemeMode);
      if (savedThemeMode === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(prefersDark);
      } else {
        setIsDark(savedThemeMode === 'dark');
      }
    } else if (savedTheme) {
      // Migration: convert old theme setting
      const isOldDark = savedTheme === 'dark';
      setThemeMode(isOldDark ? 'dark' : 'light');
      setIsDark(isOldDark);
    } else {
      // First time: default to system preference
      setThemeMode('system');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  // Listen to system preference changes when in system mode
  useEffect(() => {
    if (themeMode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => {
        setIsDark(e.matches);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [themeMode]);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    localStorage.setItem('themeMode', themeMode);
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark, themeMode]);

  const toggleTheme = () => {
    if (themeMode === 'system') {
      // If currently following system, override to opposite of current
      const newMode = isDark ? 'light' : 'dark';
      setThemeMode(newMode);
      setIsDark(newMode === 'dark');
    } else if (themeMode === 'light') {
      // Switch to dark
      setThemeMode('dark');
      setIsDark(true);
    } else {
      // Switch to light
      setThemeMode('light');
      setIsDark(false);
    }
  };

  const theme = {
    isDark,
    themeMode,
    toggleTheme,
    colors: {
      // Background colors
      bg: {
        primary: isDark ? 'black' : 'white',
        secondary: isDark ? 'zinc-900' : 'gray-50',
        tertiary: isDark ? 'zinc-800' : 'gray-100'
      },
      // Text colors
      text: {
        primary: isDark ? 'gray-100' : 'gray-900',
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