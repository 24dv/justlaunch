
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
}

export const useExitIntent = ({
  cooldownTime = 5000,
  useCookie = true,
  cookieExpiry = 7,
  cookieName = 'exit_intent_shown'
}: UseExitIntentOptions = {}) => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [lastDetection, setLastDetection] = useState(0);
  const isMobile = useIsMobile();
  
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
  
  useEffect(() => {
    // Check if user has already seen the popup
    if (useCookie && getCookie(cookieName) === 'true') {
      return;
    }
    
    // For desktop: track mouse movement to detect if cursor is moving toward the top of the page
    const handleMouseMove = (e: MouseEvent) => {
      if (
        !isMobile && 
        e.clientY < 20 && // Mouse is near the top of the page
        e.clientY < (e.clientY - 60) && // Moving upward
        Date.now() - lastDetection > cooldownTime // Cooldown expired
      ) {
        setShowExitIntent(true);
        setLastDetection(Date.now());
        if (useCookie) {
          setCookie(cookieName, 'true', cookieExpiry);
        }
      }
    };
    
    // For mobile: track page visibility and scroll direction
    let lastScrollY = 0;
    let scrollingUp = false;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollingUp = currentScrollY < lastScrollY;
      
      // If scrolling up rapidly and not at top of page
      if (
        isMobile &&
        scrollingUp && 
        window.scrollY > 200 &&
        Math.abs(currentScrollY - lastScrollY) > 50 && // Rapid scroll
        Date.now() - lastDetection > cooldownTime // Cooldown expired
      ) {
        setShowExitIntent(true);
        setLastDetection(Date.now());
        if (useCookie) {
          setCookie(cookieName, 'true', cookieExpiry);
        }
      }
      
      lastScrollY = currentScrollY;
    };
    
    // Detect tab switching or browser minimizing
    const handleVisibilityChange = () => {
      if (
        document.visibilityState === 'visible' && 
        Date.now() - lastDetection > cooldownTime // Cooldown expired
      ) {
        setShowExitIntent(true);
        setLastDetection(Date.now());
        if (useCookie) {
          setCookie(cookieName, 'true', cookieExpiry);
        }
      }
    };
    
    if (!isMobile) {
      document.addEventListener('mousemove', handleMouseMove);
    }
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      if (!isMobile) {
        document.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [cooldownTime, cookieExpiry, cookieName, isMobile, lastDetection, useCookie]);
  
  const hideExitIntent = () => {
    setShowExitIntent(false);
  };
  
  return {
    showExitIntent,
    hideExitIntent
  };
};
