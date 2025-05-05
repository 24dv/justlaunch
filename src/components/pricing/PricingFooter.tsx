
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const PricingFooter = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-12 text-center"> 
      <div className="w-full flex justify-center">
        <button
          onClick={scrollToContact}
          className="inline-block px-6 py-3 bg-[#0D503C] text-[#F5F5E9] rounded-full 
          hover:bg-[#0A4231] transition-all duration-200 ease-in-out 
          transform hover:scale-[1.02] focus:outline-none focus:ring-2 
          focus:ring-[#0D503C] focus:ring-offset-2"
        >
          {t('nav.getStarted')}
        </button>
      </div>
    </div>
  );
};

export default PricingFooter;
