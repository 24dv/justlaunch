
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';

const FaqFooter = () => {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="mt-12 text-center">
      <p className="text-base text-[#0D503C]/80 mb-6">
        {t('faq.moreQuestions')}
      </p>
      <Button
        onClick={scrollToContact}
        className="bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0A4231] rounded-full px-8 py-6 text-lg font-medium"
      >
        {t('faq.contactUs')}
      </Button>
    </div>
  );
};

export default FaqFooter;
