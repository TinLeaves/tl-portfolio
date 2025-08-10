import { useState, useEffect } from 'react';
import { BREAKPOINTS } from './constants';

/**
 * Hook to detect device capabilities and screen size
 * @returns {Object} Device detection state
 */
export function useDeviceDetection() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    // Detect touch capability
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouch);

    // Detect screen size - include tablets (up to 1024px)
    const updateScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth < BREAKPOINTS.lg);
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return { isTouchDevice, isMobileOrTablet };
}

/**
 * Get responsive screen size breakpoint
 * @returns {string} Current breakpoint
 */
export function useScreenSize() {
  const [screenSize, setScreenSize] = useState('lg');

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < BREAKPOINTS.sm) setScreenSize('xs');
      else if (width < BREAKPOINTS.md) setScreenSize('sm');
      else if (width < BREAKPOINTS.lg) setScreenSize('md');
      else if (width < BREAKPOINTS.xl) setScreenSize('lg');
      else if (width < BREAKPOINTS['2xl']) setScreenSize('xl');
      else setScreenSize('2xl');
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return screenSize;
}

/**
 * Check if current screen size matches breakpoint
 * @param {string} breakpoint - Breakpoint to check against
 * @returns {boolean} Whether screen matches breakpoint
 */
export function useMediaQuery(breakpoint) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${BREAKPOINTS[breakpoint]}px)`);
    setMatches(mediaQuery.matches);

    const handler = (e) => setMatches(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, [breakpoint]);

  return matches;
}