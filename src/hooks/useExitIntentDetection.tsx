
import { useState, useEffect, useCallback, useRef } from 'react';

interface ExitIntentOptions {
  // Time in milliseconds after which to show popup if user is idle
  idleTimeout?: number;
  // Time in milliseconds after which to show popup if user is on the page
  timeOnPageTimeout?: number;
  // Minimum scroll depth (in percentage) before triggering on idle
  minScrollDepthPercent?: number;
}

export function useExitIntentDetection({
  idleTimeout = 5000,
  timeOnPageTimeout = 45000,
  minScrollDepthPercent = 60
}: ExitIntentOptions = {}) {
  const [shouldShow, setShouldShow] = useState(false);
  
  // Refs for tracking scroll and time behavior
  const lastScrollTop = useRef(0);
  const scrollVelocity = useRef(0);
  const scrollTimeStamp = useRef(Date.now());
  const pageEntryTime = useRef(Date.now());
  const hasShownRef = useRef(false);
  const maxScrollDepth = useRef(0);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasEngaged = useRef(false);

  const checkIfShouldShow = useCallback(() => {
    const lastClosed = localStorage.getItem('quizPopupLastClosed');
    const quizTaken = localStorage.getItem('quizTaken');
    
    // Don't show if user has already taken the quiz
    if (quizTaken === 'true' || hasShownRef.current) {
      return false;
    }
    
    if (lastClosed) {
      const lastClosedDate = new Date(Number(lastClosed));
      const currentDate = new Date();
      
      // Calculate the difference in hours
      const differenceInTime = currentDate.getTime() - lastClosedDate.getTime();
      const differenceInHours = differenceInTime / (1000 * 3600); // Convert milliseconds to hours
      
      // If it's been less than 48 hours, don't show
      if (differenceInHours < 48) {
        return false;
      }
    }
    
    return true;
  }, []);

  // Function to show the popup if conditions are met
  const tryToShowPopup = useCallback(() => {
    if (checkIfShouldShow() && !hasShownRef.current) {
      setShouldShow(true);
      hasShownRef.current = true;
    }
  }, [checkIfShouldShow]);

  // Handle exit intent for desktop
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse moves toward the top of the page
      if (e.clientY < 20) {
        tryToShowPopup();
      }
    };

    // Add for desktop only
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      document.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
    return undefined;
  }, [tryToShowPopup]);

  // Mobile detection using improved scroll detection
  useEffect(() => {
    // Tracking variables for scroll behavior
    let scrollTimer: ReturnType<typeof setTimeout>;
    let lastScrollTime = Date.now();
    
    const handleScroll = () => {
      // Reset idle timer whenever user scrolls
      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
      }
      
      // Update engaged state when user scrolls
      hasEngaged.current = true;
      
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const currentTime = Date.now();
      const timeDelta = currentTime - scrollTimeStamp.current;
      
      // Update max scroll depth
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercent = (currentScrollTop / (scrollHeight - clientHeight)) * 100;
      maxScrollDepth.current = Math.max(maxScrollDepth.current, scrollPercent);
      
      // Calculate scroll velocity (px per millisecond)
      if (timeDelta > 0) {
        scrollVelocity.current = Math.abs(currentScrollTop - lastScrollTop.current) / timeDelta;
      }
      
      // Detect bounce patterns: fast upward scroll near top
      const isScrollingUp = currentScrollTop < lastScrollTop.current;
      const isNearTop = currentScrollTop < 300;
      const isScrollingFast = scrollVelocity.current > 0.5; // Threshold for "fast" scrolling
      const isQuickDirection = currentTime - lastScrollTime < 200; // Quick direction change
      
      if (isScrollingUp && (isNearTop || isScrollingFast)) {
        // Higher chance of exit intent - show popup
        if (scrollVelocity.current > 1.0 || isQuickDirection) {
          tryToShowPopup();
        }
      }
      
      // Set idle timer after scrolling stops
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        // Check if user has scrolled significantly then stopped
        if (maxScrollDepth.current > minScrollDepthPercent && hasEngaged.current) {
          idleTimer.current = setTimeout(() => {
            tryToShowPopup();
          }, idleTimeout); // Show after idle time of inactivity after scrolling deeply
        }
      }, 200);
      
      // Update tracking variables
      lastScrollTop.current = currentScrollTop;
      scrollTimeStamp.current = currentTime;
      lastScrollTime = currentTime;
    };

    // Visibility change detection
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // If the user returns to the tab and has been on the page for a while
        const timeOnPage = Date.now() - pageEntryTime.current;
        if (timeOnPage > 15000) { // 15 seconds
          tryToShowPopup();
        }
      }
    };
    
    // Touch events detection
    const handleTouchStart = (e: TouchEvent) => {
      hasEngaged.current = true;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      // Detect edge swipes that might indicate trying to go back/exit
      if (e.changedTouches && e.changedTouches[0]) {
        const touchX = e.changedTouches[0].clientX;
        const touchY = e.changedTouches[0].clientY;
        
        // Edge swipe detection
        if (touchX < 20 || touchX > window.innerWidth - 20 || touchY < 20) {
          tryToShowPopup();
        }
      }
    };
    
    // Time-based trigger
    const timeBasedPopupTrigger = setTimeout(() => {
      // Show popup after timeOnPageTimeout if user is still on the page
      if (hasEngaged.current) {
        tryToShowPopup();
      }
    }, timeOnPageTimeout);
    
    // Add all event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      // Clean up all event listeners
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      clearTimeout(timeBasedPopupTrigger);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      clearTimeout(scrollTimer);
    };
  }, [tryToShowPopup, idleTimeout, timeOnPageTimeout, minScrollDepthPercent]);

  // Reset tracking when component mounts
  useEffect(() => {
    pageEntryTime.current = Date.now();
    hasShownRef.current = false;
    maxScrollDepth.current = 0;
    hasEngaged.current = false;
    
    return () => {
      // Clear any lingering timers on unmount
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  const reset = () => {
    setShouldShow(false);
    localStorage.setItem('quizPopupLastClosed', Date.now().toString());
  };

  const recordQuizTaken = () => {
    localStorage.setItem('quizTaken', 'true');
    reset();
  };

  return {
    shouldShow,
    reset,
    recordQuizTaken
  };
}
