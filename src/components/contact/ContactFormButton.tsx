
import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../contexts/LanguageContext';

type ContactFormButtonProps = {
  isSubmitting: boolean;
};

const ContactFormButton = ({ isSubmitting }: ContactFormButtonProps) => {
  const { t, language } = useLanguage();
  
  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      className="w-full py-3 bg-[#0D503C] hover:bg-[#0A4231] text-[#F5F5E9] font-medium rounded-md transition-colors flex items-center justify-center"
    >
      {isSubmitting ? (
        <span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#F5F5E9]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {t('contact.form.submitting')}
        </span>
      ) : (
        <span className="flex items-center">
          {language === 'en' ? 'Book Your Free Intro Call!' : 'Plan je gratis introgesprek!'}
          <Send className="ml-2 h-4 w-4" />
        </span>
      )}
    </Button>
  );
};

export default ContactFormButton;
