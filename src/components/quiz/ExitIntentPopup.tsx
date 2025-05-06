
import React, { useState, useEffect, useCallback } from 'react';
import { X, Star } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';

const ExitIntentPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const checkIfShouldShow = useCallback(() => {
    const lastClosed = localStorage.getItem('quizPopupLastClosed');
    
    if (lastClosed) {
      const lastClosedDate = new Date(Number(lastClosed));
      const currentDate = new Date();
      
      // Calculate the difference in days
      const differenceInTime = currentDate.getTime() - lastClosedDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      
      // If it's been less than 7 days, don't show
      if (differenceInDays < 7) {
        return false;
      }
    }
    
    return true;
  }, []);

  // Handle exit intent for desktop
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse moves toward the top of the page
      if (e.clientY < 20 && checkIfShouldShow()) {
        setIsOpen(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [checkIfShouldShow]);

  // Handle for mobile/tablet: quick scroll up or tab visibility change
  useEffect(() => {
    let lastScrollTop = 0;
    let scrollingUp = false;
    
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      
      // Detect quick scroll up
      if (st < lastScrollTop) {
        // Scrolling up
        if (!scrollingUp) {
          scrollingUp = true;
          if (checkIfShouldShow() && window.scrollY < 300) {
            setIsOpen(true);
          }
        }
      } else {
        // Scrolling down
        scrollingUp = false;
      }
      
      lastScrollTop = st <= 0 ? 0 : st;
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && checkIfShouldShow()) {
        setIsOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [checkIfShouldShow]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('quizPopupLastClosed', Date.now().toString());
  };

  const openQuiz = () => {
    // Replace with actual Tally quiz URL
    window.open('https://tally.so/r/yourquizlink', '_blank');
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
      >
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 text-[#0D503C]/60 hover:text-[#0D503C] transition-colors"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>
        
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full 
          bg-[#0D503C]/10 mb-6">
            <Star className="text-[#0D503C] w-6 h-6" />
          </div>
          
          <h2 className="text-2xl font-semibold mb-2">Not sure you're ready to launch?</h2>
          <p className="text-[#0D503C]/70 mb-6">Take the quick quiz and get clarity.</p>
          
          <button
            onClick={openQuiz}
            className="w-full px-6 py-3 bg-[#0D503C] text-[#F5F5E9] rounded-full 
            hover:bg-[#0A4231] transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
          >
            <span>Start Quiz</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
