import { useState, useEffect } from 'react';

interface UseExitIntentOptions {
  enabled?: boolean;
  delay?: number;
  showOnce?: boolean;
}

export const useExitIntent = (options: UseExitIntentOptions = {}) => {
  const { enabled = true, delay = 1000, showOnce = true } = options;
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (!enabled || (showOnce && hasShown)) return;

    let timeoutId: NodeJS.Timeout;
    let isMouseLeaving = false;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the page
      if (e.clientY <= 0 && !isMouseLeaving && !hasShown) {
        isMouseLeaving = true;
        
        timeoutId = setTimeout(() => {
          setShowPopup(true);
          setHasShown(true);
          isMouseLeaving = false;
        }, delay);
      }
    };

    const handleMouseEnter = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      isMouseLeaving = false;
    };

    // Also trigger on mobile scroll to top
    const handleScroll = () => {
      if (window.scrollY === 0 && !hasShown) {
        // User scrolled back to top, might be leaving
        timeoutId = setTimeout(() => {
          if (window.scrollY === 0 && !hasShown) {
            setShowPopup(true);
            setHasShown(true);
          }
        }, delay * 2); // Longer delay for scroll trigger
      }
    };

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [enabled, delay, showOnce, hasShown]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return { showPopup, closePopup };
};