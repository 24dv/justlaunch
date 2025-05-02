
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactInfoSection = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <div className="bg-[#0D503C]/5 p-6 rounded-xl mb-8 border-2 border-dashed border-[#0D503C]/30">
        <h3 className="text-xl font-semibold text-[#0D503C] mb-4 font-serif">
          {t('contact.nextSteps')}
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 text-[#0D503C] flex items-center justify-center mr-3 border border-[#0D503C]/20">
              <span className="text-sm font-medium">1</span>
            </div>
            <p className="text-[#0D503C]/80">
              {t('contact.step1')}
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 text-[#0D503C] flex items-center justify-center mr-3 border border-[#0D503C]/20">
              <span className="text-sm font-medium">2</span>
            </div>
            <p className="text-[#0D503C]/80">
              {t('contact.step2')}
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 text-[#0D503C] flex items-center justify-center mr-3 border border-[#0D503C]/20">
              <span className="text-sm font-medium">3</span>
            </div>
            <p className="text-[#0D503C]/80">
              {t('contact.step3')}
            </p>
          </li>
        </ul>
      </div>
      
      <div className="text-[#0D503C]/80">
        <p className="font-medium text-[#0D503C]">{t('contact.questions')}</p>
        <p className="mt-2 text-[#0D503C]">
          <a href="mailto:hello@justlaunch.be" className="text-[#0D503C] font-medium hover:underline">
            {t('contact.email')}
          </a>
        </p>
      </div>
    </>
  );
};

export default ContactInfoSection;
