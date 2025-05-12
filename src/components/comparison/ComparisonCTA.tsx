
import React from 'react';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ComparisonCTAProps {
  onContactClick: () => void;
  onQuizClick: () => void;
  onWorksClick: () => void;
}

const ComparisonCTA: React.FC<ComparisonCTAProps> = ({ onContactClick, onQuizClick, onWorksClick }) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-10">
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={onContactClick}
          className="bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0A4231] h-12 px-6 py-3 rounded-full text-base font-medium transition-colors hover:scale-105 transform transition duration-200"
        >
          {t('process.getStarted')}
        </Button>
        
        <Button 
          onClick={onQuizClick}
          variant="outline"
          className="border-[#0D503C] text-[#0D503C] bg-[#F2FCE2] hover:bg-[#0D503C]/5 h-12 px-6 py-3 rounded-full text-base font-medium transition-colors hover:scale-105 transform transition duration-200"
        >
          {t('comparison.readyToLaunch')}
        </Button>
      </div>
      
      <button 
        onClick={onWorksClick}
        className="flex items-center gap-1 text-[#0D503C] hover:text-[#0A4231] underline underline-offset-4 font-medium"
      >
        {t('comparison.seeWhatWeCanDo')}
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ComparisonCTA;
