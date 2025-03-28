
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const FaqFooter = () => {
  const { language } = useLanguage();
  
  return (
    <div className="mt-12 text-center">
      <p className="text-base text-[#0D503C]/80 mb-6">
        {language === 'nl' ? 'Nog vragen? We zijn er om te helpen!' : 'Still have questions? We\'re here to help!'}
      </p>
      <a
        href="#contact"
        className="inline-flex items-center justify-center rounded-full bg-[#0D503C] px-6 py-3 text-base font-medium text-[#F5F5E9] shadow-sm hover:bg-[#0A4231] transition-colors"
      >
        {language === 'nl' ? 'Neem Contact Op' : 'Contact Us'}
      </a>
    </div>
  );
};

export default FaqFooter;
