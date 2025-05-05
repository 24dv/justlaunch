
import { useState, useEffect } from 'react';
import { useIsMobile } from './use-mobile';

interface UseExitIntentOptions {
  // Time in milliseconds for which the detection will be disabled after a successful detection
  cooldownTime?: number;
  // Whether to use a cookie to track if the user has already seen the popup
  useCookie?: boolean;
  // Cookie expiration time in days
  cookieExpiry?: number;
  // Cookie name
  cookieName?: string;
  // Distance from top of the page to trigger exit intent (in pixels)
  topThreshold?: number;
  // Delay before showing popup for first-time visitors (in milliseconds, 0 for immediate)
  initialDelay?: number;
}

export const useExitIntent = ({
  cooldownTime = 5000,
  useCookie = true,
  cookieExpiry = 7,
  cookieName = 'exit_intent_shown',
  topThreshold = 100, // Increased from 20px to 100px for earlier detection
  initialDelay = 0 // No delay by default, show immediately
}: UseExitIntentOptions = {}) => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [lastDetection, setLastDetection] = useState(0);
  const isMobile = useIsMobile();
  const [isFirstTimeVisitor, setIsFirstTimeVisitor] = useState(false);
  
  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  };
  
  const getCookie = (name: string) => {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return '';
  };

  // Track mouse velocity for prediction
  const [mousePositions, setMousePositions] = useState<{ x: number, y: number, timestamp: number }[]>([]);
  
  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = useCookie && getCookie(cookieName) === 'true';
    setIsFirstTimeVisitor(!hasSeenPopup);
    
    if (hasSeenPopup) {
      return;
    }
    
    // For desktop: track mouse movement to detect if cursor is moving toward the top of the page
    let lastMouseY = 0;
    let lastMouseX = 0;
    let lastMoveTime = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      
      // Update mouse position history for velocity tracking
      const newPosition = { 
        x: e.clientX, 
        y: e.clientY, 
        timestamp: currentTime 
      };
      
      setMousePositions(prev => {
        const updated = [...prev, newPosition].slice(-5); // Keep only last 5 positions
        return updated;
      });
      
      // Calculate velocity (pixels per millisecond)
      const deltaY = e.clientY - lastMouseY;
      const deltaTime = currentTime - lastMoveTime;
      const velocityY = deltaTime > 0 ? deltaY / deltaTime : 0;
      
      // Predict if user is about to exit (near top edge OR moving quickly upward toward top)
      const isNearTopEdge = e.clientY < topThreshold;
      const isMovingUpQuickly = velocityY < -0.5 && e.clientY < window.innerHeight * 0.3;
      
      if (
        !isMobile && 
        (isNearTopEdge || isMovingUpQuickly) && 
        Date.now() - lastDetection > cooldownTime // Cooldown expired
      ) {
        console.log("Exit intent detected: Near top or moving up quickly");
        showExitIntentPopup();
      }
      
      // Update last positions for next calculation
      lastMouseY = e.clientY;
      lastMouseX = e.clientX;
      lastMoveTime = currentTime;
    };
    
    // For mobile: track page visibility and scroll direction with enhanced sensitivity
    let lastScrollY = 0;
    let scrollingUp = false;
    let lastScrollTime = Date.now();
    
    const handleScroll = () => {
      const currentTime = Date.now();
      const currentScrollY = window.scrollY;
      scrollingUp = currentScrollY < lastScrollY;
      
      // Calculate scroll velocity
      const deltaY = currentScrollY - lastScrollY;
      const deltaTime = currentTime - lastScrollTime;
      const scrollVelocity = deltaTime > 0 ? deltaY / deltaTime : 0;
      
      // If scrolling up rapidly OR near top of page while scrolling up
      if (
        isMobile &&
        ((scrollingUp && Math.abs(scrollVelocity) > 0.3) || // More sensitive to scroll velocity
         (scrollingUp && window.scrollY < 150)) && // Detect when user scrolls near top
        Date.now() - lastDetection > cooldownTime // Cooldown expired
      ) {
        console.log("Mobile exit intent detected: Rapid scroll up");
        showExitIntentPopup();
      }
      
      lastScrollY = currentScrollY;
      lastScrollTime = currentTime;
    };
    
    // Detect tab switching or browser minimizing
    const handleVisibilityChange = () => {
      if (
        document.visibilityState === 'visible' && 
        Date.now() - lastDetection > cooldownTime // Cooldown expired
      ) {
        console.log("Exit intent detected: Tab focus regained");
        showExitIntentPopup();
      }
    };

    const showExitIntentPopup = () => {
      setLastDetection(Date.now());
      
      // For first-time visitors, we can add an initial delay if specified
      if (initialDelay > 0) {
        setTimeout(() => {
          setShowExitIntent(true);
          if (useCookie) {
            setCookie(cookieName, 'true', cookieExpiry);
          }
        }, initialDelay);
      } else {
        // Show immediately
        setShowExitIntent(true);
        if (useCookie) {
          setCookie(cookieName, 'true', cookieExpiry);
        }
      }
    };

    // Inactivity detection
    let inactivityTimer: number | null = null;
    const handleUserActivity = () => {
      if (inactivityTimer) {
        window.clearTimeout(inactivityTimer);
      }
      // If user is inactive for 30 seconds and hasn't seen popup yet
      inactivityTimer = window.setTimeout(() => {
        if (Date.now() - lastDetection > cooldownTime) {
          console.log("Exit intent detected: User inactivity");
          showExitIntentPopup();
        }
      }, 30000); // 30 seconds of inactivity
    };
    
    // Add event listeners
    if (!isMobile) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mousedown', handleUserActivity);
      document.addEventListener('keydown', handleUserActivity);
    }
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      if (!isMobile) {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mousedown', handleUserActivity);
        document.removeEventListener('keydown', handleUserActivity);
      }
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      if (inactivityTimer) {
        window.clearTimeout(inactivityTimer);
      }
    };
  }, [cooldownTime, cookieExpiry, cookieName, isMobile, lastDetection, useCookie, topThreshold, initialDelay]);
  
  const hideExitIntent = () => {
    setShowExitIntent(false);
  };
  
  return {
    showExitIntent,
    hideExitIntent,
    isFirstTimeVisitor
  };
};
