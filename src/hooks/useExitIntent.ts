
import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from './use-mobile';
import { setCookie, getCookie } from './exit-intent/cookie-utils';
import { UseExitIntentOptions, UseExitIntentReturn } from './exit-intent/types';
import { setupDesktopDetection } from './exit-intent/desktop-detection';
import { setupMobileDetection } from './exit-intent/mobile-detection';
import { setupVisibilityAndInactivityDetection } from './exit-intent/visibility-detection';

export const useExitIntent = ({
  cooldownTime = 5000,
  useCookie = true,
  cookieExpiry = 7,
  cookieName = 'exit_intent_shown',
  topThreshold = 100, 
  initialDelay = 0 
}: UseExitIntentOptions = {}): UseExitIntentReturn => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [lastDetection, setLastDetection] = useState(0);
  const [isFirstTimeVisitor, setIsFirstTimeVisitor] = useState(false);
  const isMobile = useIsMobile();
  
  // Ref for tracking mouse positions
  const mousePositionsRef = useRef<{ x: number; y: number; timestamp: number }[]>([]);

  // Explicitly mark the popup as seen by the user
  const markPopupAsSeen = () => {
    if (useCookie) {
      setCookie(cookieName, 'true', cookieExpiry);
      console.log(`Exit intent popup marked as seen, won't show again for ${cookieExpiry} days`);
    }
  };
  
  const hideExitIntent = () => {
    setShowExitIntent(false);
  };

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = useCookie && getCookie(cookieName) === 'true';
    
    if (hasSeenPopup) {
      console.log('User has already seen the exit intent popup, not showing it again');
      setIsFirstTimeVisitor(false);
      return;
    } else {
      setIsFirstTimeVisitor(true);
    }
    
    const showExitIntentPopup = () => {
      setLastDetection(Date.now());
      
      // For first-time visitors, we can add an initial delay if specified
      if (initialDelay > 0) {
        setTimeout(() => {
          setShowExitIntent(true);
        }, initialDelay);
      } else {
        // Show immediately
        setShowExitIntent(true);
      }
    };

    // Set up detection for both desktop and mobile
    const cleanupDesktopDetection = setupDesktopDetection(
      isMobile, 
      topThreshold, 
      cooldownTime, 
      lastDetection, 
      showExitIntentPopup,
      mousePositionsRef
    );
    
    const cleanupMobileDetection = setupMobileDetection(
      isMobile, 
      cooldownTime, 
      lastDetection, 
      showExitIntentPopup
    );
    
    const cleanupVisibilityAndInactivity = setupVisibilityAndInactivityDetection(
      cooldownTime, 
      lastDetection, 
      showExitIntentPopup
    );

    // Cleanup all event listeners
    return () => {
      cleanupDesktopDetection();
      cleanupMobileDetection();
      cleanupVisibilityAndInactivity();
    };
  }, [cooldownTime, cookieExpiry, cookieName, isMobile, lastDetection, useCookie, topThreshold, initialDelay]);
  
  return {
    showExitIntent,
    hideExitIntent,
    isFirstTimeVisitor,
    markPopupAsSeen
  };
};
