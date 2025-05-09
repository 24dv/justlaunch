
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, Star } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { useLanguage } from '../../contexts/LanguageContext';

const ExitIntentPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();
  
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
      setIsOpen(true);
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

  // 1. Improved scroll detection for mobile
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
        if (maxScrollDepth.current > 60 && hasEngaged.current) {
          idleTimer.current = setTimeout(() => {
            tryToShowPopup();
          }, 5000); // Show after 5 seconds of inactivity after scrolling deeply
        }
      }, 200);
      
      // Update tracking variables
      lastScrollTop.current = currentScrollTop;
      scrollTimeStamp.current = currentTime;
      lastScrollTime = currentTime;
    };

    // 2. Visibility change detection
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // If the user returns to the tab and has been on the page for a while
        const timeOnPage = Date.now() - pageEntryTime.current;
        if (timeOnPage > 15000) { // 15 seconds
          tryToShowPopup();
        }
      }
    };
    
    // 3. Touch events detection
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
    
    // 4. Time-based trigger
    const timeBasedPopupTrigger = setTimeout(() => {
      // Show popup after 45 seconds if user is still on the page
      if (hasEngaged.current) {
        tryToShowPopup();
      }
    }, 45000);
    
    // 5. Bottom of page trigger
    const handleScrollForBottom = () => {
      const scrollPosition = window.pageYOffset + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      
      // If user reaches bottom of page
      if (totalHeight - scrollPosition < 100) {
        tryToShowPopup();
      }
    };

    // Add all event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', handleScrollForBottom, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      // Clean up all event listeners
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollForBottom);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      clearTimeout(timeBasedPopupTrigger);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      clearTimeout(scrollTimer);
    };
  }, [tryToShowPopup]);

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

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('quizPopupLastClosed', Date.now().toString());
  };

  const openQuiz = () => {
    // Updated Tally quiz URL
    window.open('https://forms.justlaunch.be/', '_blank');
    localStorage.setItem('quizTaken', 'true');
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogOverlay className="bg-black/50 backdrop-blur-sm animate-in fade-in" />
      <DialogContent 
        className="bg-[#F5F5E9] text-[#0D503C] p-8 rounded-2xl border border-[#0D503C]/20 
        shadow-xl max-w-md w-[90vw] mx-auto animate-in fade-in slide-in-from-top-0 duration-300"
        onEscapeKeyDown={handleClose}
        onPointerDownOutside={handleClose}
        // Add this class to identify our custom content
        data-custom-dialog="quiz-popup"
      >
        {/* Use global styles that specifically target our dialog to hide the default close button */}
        <style dangerouslySetInnerHTML={{ __html: `
          [data-custom-dialog="quiz-popup"] .absolute.right-4.top-4.rounded-sm.opacity-70 {
            display: none !important;
          }
        `}} />
        
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full 
          bg-[#0D503C]/10 mb-6">
            <Star className="text-[#0D503C] w-6 h-6" />
          </div>
          
          <h2 className="text-2xl font-semibold mb-2">{t('quiz.popup.title')}</h2>
          <p className="text-[#0D503C]/70 mb-6">{t('quiz.popup.description')}</p>
          
          <button
            onClick={openQuiz}
            className="w-full px-6 py-3 bg-[#0D503C] text-[#F5F5E9] rounded-full 
            hover:bg-[#0A4231] transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
          >
            <span>{t('quiz.popup.buttonText')}</span>
          </button>
          
          {/* Custom close button positioned absolutely */}
          <button 
            onClick={handleClose} 
            className="absolute top-4 right-4 text-[#0D503C]/60 hover:text-[#0D503C] transition-colors"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
