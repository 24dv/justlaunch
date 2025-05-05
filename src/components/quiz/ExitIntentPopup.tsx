
import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { useLanguage } from '../../contexts/LanguageContext';

const COOKIE_NAME = 'exitIntentPopupShown';
const COOKIE_DURATION = 7; // days

const ExitIntentPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const checkCookie = (): boolean => {
    const cookie = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${COOKIE_NAME}=`));
    
    return !!cookie;
  };

  const setCookie = (): void => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + COOKIE_DURATION);
    document.cookie = `${COOKIE_NAME}=true; expires=${expirationDate.toUTCString()}; path=/`;
  };

  useEffect(() => {
    let lastScrollTop = 0;
    let isDesktop = window.innerWidth >= 1024;
    let isExitDetected = false;
    
    // Skip if cookie is already set
    if (checkCookie()) {
      return;
    }

    // Exit intent for desktop (mouse movement)
    const handleMouseMove = (e: MouseEvent) => {
      if (!isExitDetected && e.clientY < 10 && isDesktop) {
        isExitDetected = true;
        setIsOpen(true);
        setCookie();
      }
    };

    // For mobile: track scroll direction
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Trigger for quick scroll up
      if (!isExitDetected && !isDesktop && scrollTop < lastScrollTop && scrollTop > 300 && (lastScrollTop - scrollTop) > 50) {
        isExitDetected = true;
        setIsOpen(true);
        setCookie();
      }
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    // For mobile: detect visibility change (tab switching)
    const handleVisibilityChange = () => {
      if (!isExitDetected && !isDesktop && document.visibilityState === 'visible') {
        isExitDetected = true;
        setIsOpen(true);
        setCookie();
      }
    };

    // Set correct device type
    const handleResize = () => {
      isDesktop = window.innerWidth >= 1024;
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openExternalQuiz = () => {
    window.open('https://tally.so/r/yourquizlink', '_blank');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md rounded-xl bg-[#F5F5E9] border-2 border-[#0D503C]">
        <DialogClose className="absolute right-4 top-4 rounded-full h-8 w-8 flex items-center justify-center bg-[#0D503C]/10 hover:bg-[#0D503C]/20 transition-colors">
          <X className="h-4 w-4 text-[#0D503C]" />
        </DialogClose>
        
        <div className="p-4">
          <h2 className="text-2xl font-serif text-[#0D503C] mb-2">
            {language === 'en' ? 'Not sure you\'re ready to launch?' : 'Twijfel je of je klaar bent om te lanceren?'}
          </h2>
          
          <p className="text-[#0D503C]/80 mb-6">
            {language === 'en' ? 'Take the quick quiz and get clarity.' : 'Doe de snelle quiz en krijg duidelijkheid.'}
          </p>
          
          <button
            onClick={openExternalQuiz}
            className="w-full px-5 py-3 bg-[#0D503C] text-[#F5F5E9] rounded-full hover:bg-[#0D503C]/90 transition-colors font-medium"
          >
            {language === 'en' ? 'Start Quiz' : 'Begin Quiz'}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
