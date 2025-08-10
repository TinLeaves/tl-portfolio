import { useState, useEffect, useRef } from 'react';

// Detect if device is touch-enabled and screen size
function useDeviceDetection() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    // Detect touch capability
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouch);

    // Detect screen size - include tablets (up to 1024px)
    const updateScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024); // lg breakpoint - includes tablets
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return { isTouchDevice, isMobileOrTablet };
}

export function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const elementRef = useRef(null);
  const { isTouchDevice, isMobileOrTablet } = useDeviceDetection();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // If touch device on mobile/tablet, immediately set to visible and full progress
    if (isTouchDevice && isMobileOrTablet) {
      setIsVisible(true);
      setScrollProgress(1);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Start tracking scroll progress when element becomes visible
          const updateScrollProgress = () => {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top;
            const elementHeight = rect.height;
            const windowHeight = window.innerHeight;
            
            // Calculate how much of the element has been scrolled into view
            const startTrigger = windowHeight - elementHeight * 0.2; // Start animating when 20% visible
            const endTrigger = windowHeight * 0.3; // Finish animating when element reaches 30% from top
            
            if (elementTop <= startTrigger && elementTop >= endTrigger) {
              const progress = 1 - ((elementTop - endTrigger) / (startTrigger - endTrigger));
              setScrollProgress(Math.max(0, Math.min(1, progress)));
            } else if (elementTop < endTrigger) {
              setScrollProgress(1);
            } else {
              setScrollProgress(0);
            }
          };

          // Update on scroll
          window.addEventListener('scroll', updateScrollProgress, { passive: true });
          updateScrollProgress(); // Initial calculation

          return () => {
            window.removeEventListener('scroll', updateScrollProgress);
          };
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, isTouchDevice, isMobileOrTablet]);

  return { elementRef, isVisible, scrollProgress };
}

// Individual item animation - each item animates when it comes into view
export function useIndividualScrollAnimation(threshold = 0.3) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const elementRef = useRef(null);
  const { isTouchDevice, isMobileOrTablet } = useDeviceDetection();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // If touch device on mobile/tablet, immediately set to visible and full progress
    if (isTouchDevice && isMobileOrTablet) {
      setIsVisible(true);
      setProgress(1);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          const updateProgress = () => {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top;
            const elementHeight = rect.height;
            const windowHeight = window.innerHeight;
            
            // Start animating when element is 70% visible, finish when 20% from top
            const startTrigger = windowHeight - elementHeight * 0.3;
            const endTrigger = windowHeight * 0.2;
            
            if (elementTop <= startTrigger && elementTop >= endTrigger) {
              const progress = 1 - ((elementTop - endTrigger) / (startTrigger - endTrigger));
              setProgress(Math.max(0, Math.min(1, progress)));
            } else if (elementTop < endTrigger) {
              setProgress(1);
            } else {
              setProgress(0);
            }
          };

          window.addEventListener('scroll', updateProgress, { passive: true });
          updateProgress();

          return () => {
            window.removeEventListener('scroll', updateProgress);
          };
        } else {
          setIsVisible(false);
          setProgress(0);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, isTouchDevice, isMobileOrTablet]);

  return { elementRef, isVisible, progress };
}

// Timeline animation - for connecting lines between items
export function useTimelineAnimation(totalItems, threshold = 0.1) {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [lineProgress, setLineProgress] = useState({});
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const { isTouchDevice, isMobileOrTablet } = useDeviceDetection();

  const setItemRef = (index) => (ref) => {
    if (ref) {
      itemRefs.current[index] = ref;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container || itemRefs.current.length === 0) return;

    // If touch device on mobile/tablet, immediately set all items to visible and full progress
    if (isTouchDevice && isMobileOrTablet) {
      const allItems = new Set(Array.from({ length: totalItems }, (_, i) => i));
      const allProgress = {};
      for (let i = 0; i < totalItems; i++) {
        allProgress[i] = 1;
      }
      setVisibleItems(allItems);
      setLineProgress(allProgress);
      return;
    }

    const observers = [];

    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
            
            // Calculate line progress for this item
            const updateLineProgress = () => {
              const rect = item.getBoundingClientRect();
              const elementTop = rect.top;
              const elementHeight = rect.height;
              const windowHeight = window.innerHeight;
              
              const startTrigger = windowHeight - elementHeight * 0.3;
              const endTrigger = windowHeight * 0.5;
              
              let progress = 0;
              if (elementTop <= startTrigger && elementTop >= endTrigger) {
                progress = 1 - ((elementTop - endTrigger) / (startTrigger - endTrigger));
              } else if (elementTop < endTrigger) {
                progress = 1;
              }
              
              setLineProgress(prev => ({
                ...prev,
                [index]: Math.max(0, Math.min(1, progress))
              }));
            };

            window.addEventListener('scroll', updateLineProgress, { passive: true });
            updateLineProgress();

            return () => {
              window.removeEventListener('scroll', updateLineProgress);
            };
          } else {
            setVisibleItems(prev => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
            setLineProgress(prev => {
              const newProgress = { ...prev };
              delete newProgress[index];
              return newProgress;
            });
          }
        },
        { threshold }
      );

      observer.observe(item);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [totalItems, threshold, isTouchDevice, isMobileOrTablet]);

  return { containerRef, setItemRef, visibleItems, lineProgress };
}