/**
 * Animation utilities and common animation functions
 */

/**
 * Staggered animation helper
 * @param {Function} callback - Callback to execute for each item
 * @param {number} itemCount - Number of items to animate
 * @param {number} delay - Delay between each item
 * @param {number} startDelay - Initial delay before first item
 */
export function staggerAnimation(callback, itemCount, delay = 150, startDelay = 0) {
  const timeouts = [];
  
  for (let i = 0; i < itemCount; i++) {
    const timeout = setTimeout(() => {
      callback(i);
    }, startDelay + (i * delay));
    
    timeouts.push(timeout);
  }
  
  // Return cleanup function
  return () => {
    timeouts.forEach(timeout => clearTimeout(timeout));
  };
}

/**
 * Create animation style object based on progress
 * @param {number} progress - Progress value between 0 and 1
 * @param {Object} options - Animation options
 * @returns {Object} Style object with transform and opacity
 */
export function createScrollAnimation(progress, options = {}) {
  const {
    translateY = 40,
    translateX = 0,
    scale = 0.1,
    opacity = true
  } = options;

  return {
    opacity: opacity ? progress : 1,
    transform: `
      translateY(${(1 - progress) * translateY}px)
      translateX(${(1 - progress) * translateX}px)
      scale(${0.9 + progress * scale})
    `.trim()
  };
}

/**
 * Create fade animation styles
 * @param {boolean} isVisible - Whether element is visible
 * @param {number} duration - Animation duration in ms
 * @param {number} delay - Animation delay in ms
 * @returns {Object} Style object for fade animation
 */
export function createFadeAnimation(isVisible, duration = 300, delay = 0) {
  return {
    opacity: isVisible ? 1 : 0,
    transition: `opacity ${duration}ms ease-out ${delay}ms`,
    transitionDelay: `${delay}ms`
  };
}

/**
 * Create slide animation styles
 * @param {boolean} isVisible - Whether element is visible
 * @param {string} direction - Direction to slide from ('up', 'down', 'left', 'right')
 * @param {number} distance - Distance to slide in pixels
 * @param {number} duration - Animation duration in ms
 * @param {number} delay - Animation delay in ms
 * @returns {Object} Style object for slide animation
 */
export function createSlideAnimation(isVisible, direction = 'up', distance = 40, duration = 500, delay = 0) {
  const transforms = {
    up: `translateY(${isVisible ? 0 : distance}px)`,
    down: `translateY(${isVisible ? 0 : -distance}px)`,
    left: `translateX(${isVisible ? 0 : distance}px)`,
    right: `translateX(${isVisible ? 0 : -distance}px)`
  };

  return {
    opacity: isVisible ? 1 : 0,
    transform: transforms[direction],
    transition: `all ${duration}ms ease-out ${delay}ms`
  };
}

/**
 * Create scale animation styles
 * @param {boolean} isVisible - Whether element is visible
 * @param {number} fromScale - Initial scale value
 * @param {number} toScale - Final scale value
 * @param {number} duration - Animation duration in ms
 * @param {number} delay - Animation delay in ms
 * @returns {Object} Style object for scale animation
 */
export function createScaleAnimation(isVisible, fromScale = 0.8, toScale = 1, duration = 500, delay = 0) {
  return {
    opacity: isVisible ? 1 : 0,
    transform: `scale(${isVisible ? toScale : fromScale})`,
    transition: `all ${duration}ms ease-out ${delay}ms`
  };
}

/**
 * Create typewriter effect timing
 * @param {Array} texts - Array of texts to cycle through
 * @param {Object} options - Typewriter options
 * @returns {Object} Typewriter configuration
 */
export function createTypewriterConfig(texts, options = {}) {
  const {
    speed = 80,
    deleteSpeed = 40,
    pauseTime = 1500
  } = options;

  return {
    texts,
    speed,
    deleteSpeed,
    pauseTime
  };
}

/**
 * Create CSS animation keyframes as a string
 * @param {string} name - Animation name
 * @param {Object} keyframes - Keyframe definitions
 * @returns {string} CSS keyframes string
 */
export function createKeyframes(name, keyframes) {
  const keyframeStrings = Object.entries(keyframes).map(([percentage, styles]) => {
    const styleString = Object.entries(styles).map(([prop, value]) => {
      // Convert camelCase to kebab-case
      const cssProp = prop.replace(/([A-Z])/g, '-$1').toLowerCase();
      return `${cssProp}: ${value};`;
    }).join(' ');
    
    return `${percentage} { ${styleString} }`;
  }).join(' ');

  return `@keyframes ${name} { ${keyframeStrings} }`;
}