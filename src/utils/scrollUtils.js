/**
 * Scroll utilities for smooth navigation and animations
 */

/**
 * Smooth scroll to a section by ID
 * @param {string} sectionId - The section ID to scroll to
 * @param {Object} options - Scroll options
 */
export function scrollToSection(sectionId, options = {}) {
  const { behavior = 'smooth', block = 'start' } = options;
  
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior, block });
    
    // Update URL hash
    window.history.pushState(null, '', `#${sectionId}`);
  }
}

/**
 * Center a section in the viewport
 * @param {HTMLElement} element - The element to center
 * @param {Object} options - Centering options
 */
export function centerElementInViewport(element, options = {}) {
  const { behavior = 'smooth', delay = 0 } = options;
  
  if (!element) return;

  const action = () => {
    const rect = element.getBoundingClientRect();
    const elementTop = window.pageYOffset + rect.top;
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight;
    const scrollTo = elementTop - (windowHeight - elementHeight) / 2;
    
    window.scrollTo({
      top: scrollTo,
      behavior
    });
  };

  if (delay > 0) {
    setTimeout(action, delay);
  } else {
    action();
  }
}

/**
 * Get scroll progress for an element
 * @param {HTMLElement} element - The element to track
 * @param {Object} options - Progress calculation options
 * @returns {number} Progress value between 0 and 1
 */
export function getScrollProgress(element, options = {}) {
  if (!element) return 0;

  const {
    startThreshold = 0.2, // Start when 20% visible
    endThreshold = 0.3     // Finish when 30% from top
  } = options;

  const rect = element.getBoundingClientRect();
  const elementTop = rect.top;
  const elementHeight = rect.height;
  const windowHeight = window.innerHeight;
  
  const startTrigger = windowHeight - elementHeight * startThreshold;
  const endTrigger = windowHeight * endThreshold;
  
  if (elementTop <= startTrigger && elementTop >= endTrigger) {
    const progress = 1 - ((elementTop - endTrigger) / (startTrigger - endTrigger));
    return Math.max(0, Math.min(1, progress));
  } else if (elementTop < endTrigger) {
    return 1;
  } else {
    return 0;
  }
}

/**
 * Throttle function for scroll events
 * @param {Function} func - Function to throttle
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Debounce function for resize events
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}