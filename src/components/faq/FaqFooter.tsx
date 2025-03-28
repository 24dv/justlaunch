
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const FaqFooter = () => {
  const { t } = useLanguage();
  
  return (
    <div className="mt-12 text-center">
      <p className="text-base text-[#0D503C]/80 mb-6">
        {t('faq.moreQuestions')}
      </p>
      <a
        href="#contact"
        className="inline-flex items-center justify-center rounded-full bg-[#0D503C] px-6 py-3 text-base font-medium text-[#F5F5E9] shadow-sm hover:bg-[#0A4231] transition-colors"
      >
        {t('faq.contactUs')}
      </a>
    </div>
  );
};

export default FaqFooter;
