
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CookiePreferences, CookieTranslations } from './cookie/types';
import CookieDialogHeader from './cookie/CookieDialogHeader';
import CookiePreferencesList from './cookie/CookiePreferencesList';
import CookieDialogFooter from './cookie/CookieDialogFooter';

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
  
  const translations: Record<string, CookieTranslations> = {
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
      privacyPolicy: "Privacy Policy",
      decline: "Decline",
      customize: "Customize"
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
      privacyPolicy: "Privacybeleid",
      decline: "Weigeren",
      customize: "Aanpassen"
    }
  };
  
  const text = translations[language as keyof typeof translations];
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 p-4">
      <div className="bg-[#F5F5E9] rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <CookieDialogHeader
          title={text.title}
          description={text.description}
          privacyPolicyText={text.privacyPolicy}
          onClose={handleSave}
        />
        
        <div className="p-4 pt-0">
          <CookiePreferencesList
            preferences={preferences}
            onChange={handleToggle}
            translations={text}
          />
          
          <CookieDialogFooter
            acceptAllText={text.acceptAll}
            savePreferencesText={text.savePreferences}
            onAcceptAll={handleAcceptAll}
            onSave={handleSave}
          />
        </div>
      </div>
    </div>
  );
};

export default CookieConsentDialog;
