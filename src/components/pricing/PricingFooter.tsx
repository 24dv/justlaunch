
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface PricingFooterProps {
  onGetStarted: () => void;
}

const PricingFooter = ({ onGetStarted }: PricingFooterProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center mt-12">
      <button
        onClick={onGetStarted}
        className="inline-flex items-center justify-center rounded-full bg-[#0D503C] px-6 py-3 text-base font-medium text-[#F5F5E9] shadow-sm hover:bg-[#0A4231] transition-colors"
      >
        {t('nav.getStarted')}
      </button>
      <p className="text-sm text-[#0D503C]/70 mt-4">
        {t('pricing.noPayment')}
      </p>
    </div>
  );
};

export default PricingFooter;
