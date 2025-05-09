
import React from 'react';
import { X, Star } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface QuizPopupContentProps {
  onClose: () => void;
  onOpenQuiz: () => void;
}

const QuizPopupContent: React.FC<QuizPopupContentProps> = ({ onClose, onOpenQuiz }) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center text-center">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full 
      bg-[#0D503C]/10 mb-6">
        <Star className="text-[#0D503C] w-6 h-6" />
      </div>
      
      <h2 className="text-2xl font-semibold mb-2">{t('quiz.popup.title')}</h2>
      <p className="text-[#0D503C]/70 mb-6">{t('quiz.popup.description')}</p>
      
      <button
        onClick={onOpenQuiz}
        className="w-full px-6 py-3 bg-[#0D503C] text-[#F5F5E9] rounded-full 
        hover:bg-[#0A4231] transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
      >
        <span>{t('quiz.popup.buttonText')}</span>
      </button>
      
      {/* Custom close button positioned absolutely */}
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-[#0D503C]/60 hover:text-[#0D503C] transition-colors"
        aria-label="Close dialog"
      >
        <X size={20} />
      </button>
      
      {/* Hide default dialog close button */}
      <style dangerouslySetInnerHTML={{ __html: `
        [data-custom-dialog="quiz-popup"] .absolute.right-4.top-4.rounded-sm.opacity-70 {
          display: none !important;
        }
      `}} />
    </div>
  );
};

export default QuizPopupContent;
