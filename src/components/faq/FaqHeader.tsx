
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const FaqHeader = () => {
  const { language } = useLanguage();
  
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0D503C] mb-4 font-serif tracking-tight">
        {language === 'nl' ? 'Veelgestelde Vragen' : 'Frequently Asked Questions'}
      </h2>
      <p className="text-xl text-[#0D503C]/80">
        {language === 'nl' 
          ? 'Krijg antwoorden op de meest voorkomende vragen over onze diensten.'
          : 'Get answers to the most common questions about our services.'}
      </p>
      <div className="w-24 h-1 bg-[#0D503C] mx-auto mt-6" />
    </div>
  );
};

export default FaqHeader;
