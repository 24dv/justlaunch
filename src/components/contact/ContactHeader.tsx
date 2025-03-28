
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactHeader = () => {
  const { language } = useLanguage();
  
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0D503C] mb-4 font-serif">
        {language === 'nl' 
          ? 'Klaar om je merk te lanceren — snel en zonder stress?'
          : 'Ready to launch your brand — fast and stress-free?'}
      </h2>
      <p className="text-xl text-[#0D503C]/80 mb-8">
        {language === 'nl'
          ? 'Vul het formulier in en we nemen binnen 24 uur contact met je op om een korte kickoff-call te plannen.'
          : 'Fill out the form and we\'ll get back to you within 24 hours to schedule a quick kickoff call.'}
      </p>
      <div className="w-24 h-1 bg-[#0D503C] mb-8" />
    </>
  );
};

export default ContactHeader;
