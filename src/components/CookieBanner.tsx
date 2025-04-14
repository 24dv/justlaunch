
import React from 'react';
import { X, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

interface CookieBannerProps {
  onAccept: () => void;
  onDecline: () => void;
  onShowPreferences: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept, onDecline, onShowPreferences }) => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  const translations = {
    en: {
      title: "Cookie Consent",
      description: "We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking \"Accept All\", you consent to our use of cookies.",
      acceptAll: "Accept All",
      decline: "Decline",
      customize: "Customize",
      privacyPolicy: "Privacy Policy"
    },
    nl: {
      title: "Cookie Toestemming",
      description: "Wij gebruiken cookies om uw surfervaring te verbeteren, gepersonaliseerde advertenties of inhoud te tonen en ons verkeer te analyseren. Door op \"Alles accepteren\" te klikken, stemt u in met ons gebruik van cookies.",
      acceptAll: "Alles Accepteren",
      decline: "Weigeren",
      customize: "Aanpassen",
      privacyPolicy: "Privacybeleid"
    }
  };

  const text = translations[language as keyof typeof translations];
  
  const handlePrivacyPolicyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/privacy-policy');
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm rounded-lg bg-[#F5F5E9] shadow-lg border border-[#0D503C]/10 overflow-hidden">
      <div className="relative p-4">
        <div className="pr-6">
          <h3 className="text-sm font-semibold mb-1 text-[#0D503C] flex items-center gap-2">
            <Shield size={16} />
            {text.title}
          </h3>
          <p className="text-xs text-[#0D503C]/80 mb-3">{text.description}</p>
          <div className="text-xs mb-3">
            <button 
              onClick={handlePrivacyPolicyClick}
              className="text-[#0D503C] hover:underline"
            >
              {text.privacyPolicy}
            </button>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <button 
            onClick={onAccept}
            className="px-4 py-2 text-xs font-medium rounded-full bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0A4231] transition-colors w-full"
          >
            {text.acceptAll}
          </button>
          <div className="flex gap-2">
            <button 
              onClick={onShowPreferences}
              className="px-4 py-2 text-xs font-medium rounded-full border border-[#0D503C] text-[#0D503C] hover:bg-[#0D503C]/5 transition-colors flex-1"
            >
              {text.customize}
            </button>
            <button 
              onClick={onDecline}
              className="px-4 py-2 text-xs font-medium rounded-full border border-[#0D503C] text-[#0D503C] hover:bg-[#0D503C]/5 transition-colors flex-1"
            >
              {text.decline}
            </button>
          </div>
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
