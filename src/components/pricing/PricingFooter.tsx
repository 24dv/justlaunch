
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const PricingFooter = () => {
  const { t } = useLanguage();

  return (
    <div className="mt-12 space-y-4 text-center">
      <a
        href="#contact"
        className="inline-flex items-center text-[#0D503C] hover:text-[#0A4231] font-medium text-sm transition-colors duration-300 group"
      >
        {t('faq.contactUs')}
        <ArrowRight 
          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" 
        />
      </a>
      <div className="w-full flex justify-center">
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-[#0D503C] text-[#F5F5E9] rounded-full 
          hover:bg-[#0A4231] transition-all duration-300 
          transform hover:scale-105 focus:outline-none focus:ring-2 
          focus:ring-[#0D503C] focus:ring-offset-2"
        >
          {t('nav.getStarted')}
        </a>
      </div>
    </div>
  );
};

export default PricingFooter;
