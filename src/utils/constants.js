// Common constants used across the application
export const PERSONAL_INFO = {
  name: "Steven Lai",
  email: "tinleaves.0@gmail.com",
  title: "Full-Stack Developer",
  description: "Full-Stack Developer specializing in AI Integration & Modern Web Applications. Expert in Next.js, React, TypeScript, and AI-powered solutions.",
  website: "https://tlproject.me",
  github: "https://github.com/TinLeaves",
  linkedin: "https://www.linkedin.com/in/steven-lai-sl1/",
  resume: "/Steven_Lai_Resume.pdf"
};

export const THEME_COLORS = {
  // Background colors
  bg: {
    primary: {
      light: 'white',
      dark: 'zinc-950'
    },
    secondary: {
      light: 'gray-50',
      dark: 'zinc-900'
    },
    tertiary: {
      light: 'gray-100',
      dark: 'zinc-800'
    }
  },
  // Text colors
  text: {
    primary: {
      light: 'zinc-900',
      dark: 'zinc-100'
    },
    secondary: {
      light: 'zinc-600',
      dark: 'zinc-300'
    },
    tertiary: {
      light: 'zinc-500',
      dark: 'zinc-400'
    }
  },
  // Border colors
  border: {
    primary: {
      light: 'zinc-200',
      dark: 'white/10'
    },
    secondary: {
      light: 'zinc-300',
      dark: 'white/5'
    }
  },
  // Accent colors (consistent across themes)
  accent: {
    blue: 'blue-500',
    teal: 'teal-500',
    purple: 'purple-500',
    pink: 'pink-500',
    gradient: {
      blueTeal: 'from-blue-500 to-teal-500',
      blueVia: 'from-blue-300 via-teal-400 to-blue-500',
      purplePink: 'from-purple-500 to-pink-500'
    }
  }
};

export const ANIMATION_DURATIONS = {
  fast: 300,
  medium: 500,
  slow: 700,
  extraSlow: 1000
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

export const NAVIGATION_SECTIONS = ['projects', 'skills', 'about', 'contact'];

export const SEO_CONFIG = {
  title: "Steven Lai - Full-Stack Developer | AI Integration Specialist",
  description: "Steven Lai is a Full-Stack Developer from Vancouver specializing in AI integration and modern web applications. Expert in Next.js, React, TypeScript, and cutting-edge AI solutions.",
  keywords: "Steven Lai, Full-Stack Developer, AI Integration, Next.js, React, TypeScript, Vancouver Developer, Web Development, AI Solutions",
  ogImage: "https://stevenlai.dev/og-image.jpg",
  twitterImage: "https://stevenlai.dev/og-image.jpg"
};