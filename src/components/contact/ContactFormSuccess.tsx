
import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactFormSuccess = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-8">
      <div className="h-12 w-12 bg-[#F9A7A7]/30 rounded-full flex items-center justify-center mb-4 border border-[#F9A7A7]">
        <Check className="h-6 w-6 text-[#0D503C]" />
      </div>
      <h3 className="text-2xl font-bold text-[#0D503C] mb-2 font-serif">{t('contact.success.title')}</h3>
      <p className="text-[#0D503C]/80">
        {t('contact.success.message')}
      </p>
    </div>
  );
};

export default ContactFormSuccess;
