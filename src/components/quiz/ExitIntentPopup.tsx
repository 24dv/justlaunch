
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { X } from 'lucide-react';
import { useExitIntent } from '../../hooks/useExitIntent';
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';

const ExitIntentPopup: React.FC = () => {
  const { language } = useLanguage();
  const { showExitIntent, hideExitIntent } = useExitIntent({
    cookieExpiry: 7,
    cookieName: 'quiz_exit_intent_shown',
    topThreshold: 100, // Detect earlier - within 100px of top
    initialDelay: 0 // Show immediately - no delay
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Dialog open={showExitIntent} onOpenChange={hideExitIntent}>
      <DialogContent className="sm:max-w-md p-0 rounded-xl border-0 overflow-hidden shadow-xl">
        <div className="relative bg-[#F5F5E9]">
          <div className="absolute top-2 right-2">
            <button
              onClick={hideExitIntent}
              className="rounded-full p-1 bg-[#0D503C]/10 hover:bg-[#0D503C]/20 transition-colors text-[#0D503C]"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="flex flex-col items-start px-6 py-7">
            <DialogTitle className="sr-only">Exit Intent Quiz Popup</DialogTitle>
            
            <h3 className="text-2xl font-serif text-[#0D503C] mb-2.5">
              {language === 'en' 
                ? "Not sure you're ready to launch?" 
                : "Niet zeker of je klaar bent om te lanceren?"}
            </h3>
            
            <p className="text-[#0D503C]/80 mb-6" id="dialog-description">
              {language === 'en' 
                ? "Take the quick quiz and get clarity." 
                : "Doe de snelle quiz en krijg duidelijkheid."}
            </p>
            
            <a 
              href="https://tally.so/r/yourquizlink" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0D503C]/90 transition-all rounded-md font-medium text-center"
              onClick={hideExitIntent}
            >
              {language === 'en' ? 'Start Quiz' : 'Begin Quiz'}
            </a>
          </div>
          
          <div className="h-1.5 bg-gradient-to-r from-[#F9A7A7] via-[#0D503C] to-[#F5F5E9]"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
