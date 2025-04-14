
import React, { useState, useEffect } from 'react';
import { X, Info, Shield, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieConsentDialogProps {
  isOpen: boolean;
  onSavePreferences: (preferences: CookiePreferences) => void;
}

const CookieConsentDialog: React.FC<CookieConsentDialogProps> = ({ 
  isOpen, 
  onSavePreferences 
}) => {
  const { language } = useLanguage();
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  });
  
  useEffect(() => {
    // Try to load existing preferences when dialog opens
    if (isOpen) {
      const savedPreferences = localStorage.getItem("cookiePreferences");
      if (savedPreferences) {
        try {
          setPreferences(JSON.parse(savedPreferences));
        } catch (e) {
          console.error("Failed to parse saved cookie preferences", e);
        }
      }
    }
  }, [isOpen]);
  
  const handleToggle = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return; // Necessary cookies can't be toggled
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };
  
  const handleSave = () => {
    onSavePreferences(preferences);
  };
  
  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    setPreferences(allAccepted);
    onSavePreferences(allAccepted);
  };
  
  // Early return if dialog is not open
  if (!isOpen) return null;
  
  const translations = {
    en: {
      title: "Cookie Preferences",
      description: "We use cookies to improve your browsing experience, show you personalized content, and analyze our website traffic. Please choose which cookies you're willing to allow.",
      necessaryCookies: "Necessary Cookies",
      necessaryDesc: "These cookies are essential for the website to function properly and cannot be disabled.",
      analyticsCookies: "Analytics Cookies",
      analyticsDesc: "These cookies help us understand how visitors interact with our website by collecting anonymous information.",
      marketingCookies: "Marketing Cookies",
      marketingDesc: "These cookies are used to track visitors across websites to display relevant advertisements.",
      acceptAll: "Accept All",
      savePreferences: "Save Preferences",
      privacyPolicy: "Privacy Policy"
    },
    nl: {
      title: "Cookie Voorkeuren",
      description: "We gebruiken cookies om je surfervaring te verbeteren, gepersonaliseerde content te tonen en ons websiteverkeer te analyseren. Kies alsjeblieft welke cookies je wilt toestaan.",
      necessaryCookies: "Noodzakelijke Cookies",
      necessaryDesc: "Deze cookies zijn essentieel voor het goed functioneren van de website en kunnen niet worden uitgeschakeld.",
      analyticsCookies: "Analytische Cookies",
      analyticsDesc: "Deze cookies helpen ons te begrijpen hoe bezoekers met onze website omgaan door anonieme informatie te verzamelen.",
      marketingCookies: "Marketing Cookies",
      marketingDesc: "Deze cookies worden gebruikt om bezoekers over websites te volgen om relevante advertenties weer te geven.",
      acceptAll: "Alles Accepteren",
      savePreferences: "Voorkeuren Opslaan",
      privacyPolicy: "Privacybeleid"
    }
  };
  
  const text = translations[language as keyof typeof translations];
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 p-4">
      <div className="bg-[#F5F5E9] rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 z-10 bg-[#F5F5E9] border-b border-[#0D503C]/10 p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-[#0D503C] flex items-center gap-2">
            <Shield size={20} />
            {text.title}
          </h2>
          <button 
            onClick={handleSave}
            className="text-[#0D503C]/60 hover:text-[#0D503C] transition-colors"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4">
          <p className="text-sm text-[#0D503C]/80 mb-4">{text.description}</p>
          <div className="mb-3 text-xs">
            <Link to="/privacy-policy" className="text-[#0D503C] hover:underline flex items-center gap-1">
              <Info size={14} />
              {text.privacyPolicy}
            </Link>
          </div>
          
          <div className="space-y-4 my-6">
            {/* Necessary Cookies */}
            <div className="border border-[#0D503C]/10 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Shield size={18} className="text-[#0D503C]" />
                  <h3 className="font-medium text-[#0D503C]">{text.necessaryCookies}</h3>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled={true}
                    className="appearance-none w-10 h-5 bg-[#0D503C]/20 rounded-full checked:bg-[#0D503C] transition-colors duration-200 cursor-not-allowed relative"
                  />
                  <span className={`absolute w-4 h-4 bg-white rounded-full left-0.5 top-0.5 transition-transform duration-200 transform ${preferences.necessary ? 'translate-x-5' : ''}`}></span>
                </div>
              </div>
              <p className="text-xs text-[#0D503C]/70">{text.necessaryDesc}</p>
            </div>
            
            {/* Analytics Cookies */}
            <div className="border border-[#0D503C]/10 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Zap size={18} className="text-[#0D503C]" />
                  <h3 className="font-medium text-[#0D503C]">{text.analyticsCookies}</h3>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => handleToggle('analytics')}
                    className="appearance-none w-10 h-5 bg-[#0D503C]/20 rounded-full checked:bg-[#0D503C] transition-colors duration-200 cursor-pointer relative"
                  />
                  <span className={`absolute w-4 h-4 bg-white rounded-full left-0.5 top-0.5 transition-transform duration-200 transform ${preferences.analytics ? 'translate-x-5' : ''}`}></span>
                </div>
              </div>
              <p className="text-xs text-[#0D503C]/70">{text.analyticsDesc}</p>
            </div>
            
            {/* Marketing Cookies */}
            <div className="border border-[#0D503C]/10 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Zap size={18} className="text-[#0D503C]" />
                  <h3 className="font-medium text-[#0D503C]">{text.marketingCookies}</h3>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={() => handleToggle('marketing')}
                    className="appearance-none w-10 h-5 bg-[#0D503C]/20 rounded-full checked:bg-[#0D503C] transition-colors duration-200 cursor-pointer relative"
                  />
                  <span className={`absolute w-4 h-4 bg-white rounded-full left-0.5 top-0.5 transition-transform duration-200 transform ${preferences.marketing ? 'translate-x-5' : ''}`}></span>
                </div>
              </div>
              <p className="text-xs text-[#0D503C]/70">{text.marketingDesc}</p>
            </div>
          </div>
          
          <div className="flex gap-3 pt-3 border-t border-[#0D503C]/10">
            <button
              onClick={handleAcceptAll}
              className="flex-1 px-4 py-2 text-sm font-medium rounded-full bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0A4231] transition-colors"
            >
              {text.acceptAll}
            </button>
            <button
              onClick={handleSave}
              className="flex-1 px-4 py-2 text-sm font-medium rounded-full border border-[#0D503C] text-[#0D503C] hover:bg-[#0D503C]/5 transition-colors"
            >
              {text.savePreferences}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentDialog;
