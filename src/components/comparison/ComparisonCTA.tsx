
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
          className="bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0A4231] px-5 py-3 rounded-full text-base h-[44px] transition-colors"
        >
          {t('compare.cta.freeIntroCall')}
        </Button>
        
        <Button 
          onClick={onFormClick}
          variant="outline"
          className="bg-[#F9A7A7]/20 border border-[#F9A7A7] text-[#0D503C] hover:bg-[#F9A7A7]/30 px-5 py-3 rounded-full text-base h-[44px] transition-colors"
        >
          {t('compare.cta.readyToLaunch')}
        </Button>
      </div>
    </div>
  );
};

export default ComparisonCTA;
