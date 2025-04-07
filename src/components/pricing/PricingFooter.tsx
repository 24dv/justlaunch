
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';

interface PricingFooterProps {
  onGetStarted: () => void;
}

const PricingFooter = ({ onGetStarted }: PricingFooterProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center mt-12">
      <Button
        onClick={onGetStarted}
        className="bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0A4231] rounded-full px-8 py-6 text-lg font-medium"
      >
        {t('nav.getStarted')}
      </Button>
      <p className="text-sm text-[#0D503C]/70 mt-4">
        {t('pricing.noPayment')}
      </p>
    </div>
  );
};

export default PricingFooter;
