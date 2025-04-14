
import React from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface CookieBannerProps {
  onAccept: () => void;
  onDecline: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept, onDecline }) => {
  const { language } = useLanguage();
  
  const translations = {
    en: {
      title: "Cookie Consent",
      description: "We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking \"Accept All\", you consent to our use of cookies.",
      acceptAll: "Accept All",
      decline: "Decline",
      settings: "Cookie Settings"
    },
    nl: {
      title: "Cookie Toestemming",
      description: "Wij gebruiken cookies om uw surfervaring te verbeteren, gepersonaliseerde advertenties of inhoud te tonen en ons verkeer te analyseren. Door op \"Alles accepteren\" te klikken, stemt u in met ons gebruik van cookies.",
      acceptAll: "Alles Accepteren",
      decline: "Weigeren",
      settings: "Cookie-instellingen"
    }
  };

  const text = translations[language as keyof typeof translations];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#F5F5E9] shadow-[0_-4px_10px_rgba(0,0,0,0.1)] border-t border-[#0D503C]/10">
      <div className="container mx-auto">
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-1">
          <div className="max-w-xl pr-8">
            <h3 className="text-sm font-semibold mb-1 text-[#0D503C]">{text.title}</h3>
            <p className="text-xs text-[#0D503C]/80">{text.description}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
            <button 
              onClick={onDecline}
              className="px-4 py-2 text-xs font-medium rounded-full border border-[#0D503C] text-[#0D503C] hover:bg-[#0D503C]/5 transition-colors"
            >
              {text.decline}
            </button>
            <button 
              onClick={onAccept}
              className="px-4 py-2 text-xs font-medium rounded-full bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0A4231] transition-colors"
            >
              {text.acceptAll}
            </button>
          </div>
          
          <button 
            onClick={onDecline} 
            className="absolute right-0 top-0 text-[#0D503C]/60 hover:text-[#0D503C] md:relative"
            aria-label="Close cookie banner"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
