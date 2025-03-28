
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const FaqHeader = () => {
  const { t } = useLanguage();
  
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0D503C] mb-4 font-serif tracking-tight">
        {t('faq.title')}
      </h2>
      <p className="text-xl text-[#0D503C]/80">
        {t('faq.subtitle')}
      </p>
      <div className="w-24 h-1 bg-[#0D503C] mx-auto mt-6" />
    </div>
  );
};

export default FaqHeader;
