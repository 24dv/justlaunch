
import React from 'react';
import { Button } from '../ui/button';
import { useLanguage } from '../../contexts/LanguageContext';

interface ComparisonCTAProps {
  onContactClick: () => void;
  onFormClick: () => void;
}

const ComparisonCTA: React.FC<ComparisonCTAProps> = ({ onContactClick, onFormClick }) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-10">
      <p className="text-base text-[#0D503C]/80">
        {t('compare.cta.hardWay')}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={onContactClick}
          className="bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0A4231] px-5 py-3 rounded-full text-base h-[44px] transform transition-transform hover:scale-[1.02]"
        >
          {t('compare.cta.freeIntroCall')}
        </Button>
        
        <Button 
          onClick={onFormClick}
          variant="outline"
          className="border-[#0D503C] text-[#0D503C] bg-[#0D503C]/10 hover:bg-[#0A4231] hover:text-[#F5F5E9] hover:border-[#0A4231] px-5 py-3 rounded-full text-base h-[44px] transform transition-transform hover:scale-[1.02]"
        >
          {t('compare.cta.readyToLaunch')}
        </Button>
      </div>
    </div>
  );
};

export default ComparisonCTA;
