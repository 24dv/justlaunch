
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const FaqFooter = () => {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="mt-12 text-center">
      <p className="text-base text-[#0D503C]/80 mb-6">
        {t('faq.moreQuestions')}
      </p>
      <button
        onClick={scrollToContact}
        className="inline-flex items-center justify-center rounded-full bg-[#0D503C] px-6 py-3 text-base font-medium text-[#F5F5E9] shadow-sm hover:bg-[#0A4231] transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D503C]"
      >
        {t('faq.contactUs')}
      </button>
    </div>
  );
};

export default FaqFooter;
