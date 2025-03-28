
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactInfoSection = () => {
  const { language } = useLanguage();
  
  return (
    <>
      <div className="bg-[#0D503C]/5 p-6 rounded-xl mb-8 border-2 border-dashed border-[#0D503C]/30">
        <h3 className="text-xl font-semibold text-[#0D503C] mb-4 font-serif">
          {language === 'nl' ? 'Wat gebeurt er hierna?' : 'What happens next?'}
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 text-[#0D503C] flex items-center justify-center mr-3 border border-[#0D503C]/20">
              <span className="text-sm font-medium">1</span>
            </div>
            <p className="text-[#0D503C]/80">
              {language === 'nl' 
                ? 'We plannen een kort gesprek om je project goed af te stemmen'
                : 'We\'ll schedule a short call to align on your project'}
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 text-[#0D503C] flex items-center justify-center mr-3 border border-[#0D503C]/20">
              <span className="text-sm font-medium">2</span>
            </div>
            <p className="text-[#0D503C]/80">
              {language === 'nl'
                ? 'Je ontvangt een vragenlijst om je stijl, content en visie te delen'
                : 'You\'ll receive a questionnaire to share your style, content, and vision'}
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 text-[#0D503C] flex items-center justify-center mr-3 border border-[#0D503C]/20">
              <span className="text-sm font-medium">3</span>
            </div>
            <p className="text-[#0D503C]/80">
              {language === 'nl'
                ? 'We sturen je een tijdlijn en beginnen zo snel mogelijk'
                : 'We\'ll send you a timeline and get started asap'}
            </p>
          </li>
        </ul>
      </div>
      
      <div className="text-[#0D503C]/80">
        <p className="font-medium text-[#0D503C]">
          {language === 'nl' ? 'Vragen? Neem direct contact met ons op:' : 'Questions? Contact us directly:'}
        </p>
        <p className="mt-2 text-[#0D503C]">
          <a href="mailto:hello@justlaunch.be" className="text-[#0D503C] font-medium hover:underline">
            hello@justlaunch.be
          </a>
        </p>
      </div>
    </>
  );
};

export default ContactInfoSection;
