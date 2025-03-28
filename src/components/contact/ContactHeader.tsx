
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactHeader = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0D503C] mb-4 font-serif">
        {t('contact.title')}
      </h2>
      <p className="text-xl text-[#0D503C]/80 mb-8">
        {t('contact.subtitle')}
      </p>
      <div className="w-24 h-1 bg-[#0D503C] mb-8" />
    </>
  );
};

export default ContactHeader;
