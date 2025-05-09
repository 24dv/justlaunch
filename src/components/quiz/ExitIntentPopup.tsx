
import React from 'react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import QuizPopupContent from './QuizPopupContent';
import { useExitIntentDetection } from '../../hooks/useExitIntentDetection';

const ExitIntentPopup: React.FC = () => {
  const { shouldShow, reset, recordQuizTaken } = useExitIntentDetection({
    idleTimeout: 5000,        // 5 seconds of inactivity after scrolling
    timeOnPageTimeout: 45000, // 45 seconds on page
    minScrollDepthPercent: 60 // User has scrolled at least 60% of the page
  });

  const handleClose = () => {
    reset();
  };

  const openQuiz = () => {
    // Updated Tally quiz URL
    window.open('https://forms.justlaunch.be/', '_blank');
    recordQuizTaken();
  };

  return (
    <Dialog open={shouldShow} onOpenChange={(open) => !open && handleClose()}>
      <DialogOverlay className="bg-black/50 backdrop-blur-sm animate-in fade-in" />
      <DialogContent 
        className="bg-[#F5F5E9] text-[#0D503C] p-8 rounded-2xl border border-[#0D503C]/20 
          shadow-xl max-w-md w-[90vw] mx-auto animate-in fade-in slide-in-from-top-0 duration-300"
        onEscapeKeyDown={handleClose}
        onPointerDownOutside={handleClose}
        data-custom-dialog="quiz-popup"
      >
        <QuizPopupContent onClose={handleClose} onOpenQuiz={openQuiz} />
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
