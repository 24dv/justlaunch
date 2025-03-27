
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const PricingFooter = () => {
  const { t } = useLanguage();

  return (
    <div className="mt-12 text-center">
      <a
        href="#contact"
        className="inline-flex items-center text-[#0D503C] hover:text-[#0A4231] font-medium"
      >
        {t('faq.contactUs')}
        <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
};

export default PricingFooter;
