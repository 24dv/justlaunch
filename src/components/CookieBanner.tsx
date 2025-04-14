
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
    <div className="fixed bottom-4 left-4 z-50 max-w-xs rounded-lg bg-[#F5F5E9] shadow-lg border border-[#0D503C]/10 overflow-hidden">
      <div className="relative p-4">
        <div className="pr-6">
          <h3 className="text-sm font-semibold mb-1 text-[#0D503C]">{text.title}</h3>
          <p className="text-xs text-[#0D503C]/80 mb-3">{text.description}</p>
        </div>
        
        <div className="flex flex-col gap-2">
          <button 
            onClick={onAccept}
            className="px-4 py-2 text-xs font-medium rounded-full bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0A4231] transition-colors w-full"
          >
            {text.acceptAll}
          </button>
          <button 
            onClick={onDecline}
            className="px-4 py-2 text-xs font-medium rounded-full border border-[#0D503C] text-[#0D503C] hover:bg-[#0D503C]/5 transition-colors w-full"
          >
            {text.decline}
          </button>
        </div>
        
        <button 
          onClick={onDecline} 
          className="absolute right-2 top-2 text-[#0D503C]/60 hover:text-[#0D503C]"
          aria-label="Close cookie banner"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
