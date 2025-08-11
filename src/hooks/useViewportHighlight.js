import { useState, useEffect, useRef } from 'react';
import { useDeviceDetection } from '../utils/deviceUtils';

/**
 * Hook to determine which item is most prominently visible in the viewport
 * @param {number} itemCount - Total number of items to track
 * @param {number} threshold - Intersection threshold (default: 0.1)
 * @returns {Object} - Contains containerRef, setItemRef function, and highlightedIndex
 */
export function useViewportHighlight(itemCount, threshold = 0.1) {
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const { isTouchDevice, isMobileOrTablet } = useDeviceDetection();

  const setItemRef = (index) => (ref) => {
    if (ref) {
      itemRefs.current[index] = ref;
    }
  };

  useEffect(() => {
    // Enable viewport highlighting on all devices including touch/mobile

    const updateHighlightedCard = () => {
      let maxVisibility = 0;
      let mostVisibleIndex = -1;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;

        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        // Calculate how much of the card is visible
        const visibleTop = Math.max(0, -rect.top);
        const visibleBottom = Math.min(rect.height, windowHeight - rect.top);
        const visibleLeft = Math.max(0, -rect.left);
        const visibleRight = Math.min(rect.width, windowWidth - rect.left);
        
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibleWidth = Math.max(0, visibleRight - visibleLeft);
        const visibleArea = visibleHeight * visibleWidth;
        const totalArea = rect.width * rect.height;
        
        const visibilityRatio = totalArea > 0 ? visibleArea / totalArea : 0;

        // Check if the card is reasonably centered in viewport
        const cardCenterY = rect.top + rect.height / 2;
        const viewportCenterY = windowHeight / 2;
        const distanceFromCenter = Math.abs(cardCenterY - viewportCenterY);
        const maxDistance = windowHeight / 2;
        const centeringBonus = 1 - (distanceFromCenter / maxDistance);

        // Combined score: visibility + centering bonus
        const score = visibilityRatio * (0.7 + 0.3 * centeringBonus);

        // Only consider cards that are at least 30% visible
        if (visibilityRatio > 0.3 && score > maxVisibility) {
          maxVisibility = score;
          mostVisibleIndex = index;
        }
      });

      // Only update if there's a significant change to avoid flickering
      if (mostVisibleIndex !== highlightedIndex) {
        setHighlightedIndex(mostVisibleIndex);
      }
    };

    // Throttle the scroll handler for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateHighlightedCard();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Set up observers for when items enter/leave viewport
    const observers = [];
    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          // Trigger update when visibility changes
          if (entry.isIntersecting) {
            updateHighlightedCard();
          } else if (highlightedIndex === index) {
            // If the highlighted card is no longer visible, clear highlight
            setHighlightedIndex(-1);
          }
        },
        { threshold }
      );

      observer.observe(item);
      observers.push(observer);
    });

    // Initial calculation
    updateHighlightedCard();

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateHighlightedCard);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHighlightedCard);
      observers.forEach(observer => observer.disconnect());
    };
  }, [itemCount, threshold, highlightedIndex]);

  return { containerRef, setItemRef, highlightedIndex };
}