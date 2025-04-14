
import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import CookieBannerContent from './cookie/CookieBannerContent';
import CookieBannerActions from './cookie/CookieBannerActions';
import CookieBannerCloseButton from './cookie/CookieBannerCloseButton';
import { CookieTranslations } from './cookie/types';

interface CookieBannerProps {
  onAccept: () => void;
  onDecline: () => void;
  onShowPreferences: () => void;
  isVisible: boolean;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ 
  onAccept, 
  onDecline, 
  onShowPreferences,
  isVisible 
}) => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  // Effect to initialize GTM in debug mode when banner is shown
  useEffect(() => {
    if (isVisible) {
      // Signal to GTM that we're in consent-required mode
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'cookie_consent_pending',
        'consentMode': {
          'functionality_storage': 'denied',
          'security_storage': 'granted',
          'analytics_storage': 'denied', 
          'ad_storage': 'denied',
          'personalization_storage': 'denied'
        }
      });
      
      console.log('CookieBanner: Initialized GTM with pending consent');
    }
  }, [isVisible]);
  
  // If not visible, don't render anything
  if (!isVisible) return null;
  
  const translations: Record<string, CookieTranslations> = {
    en: {
      title: "Cookie Consent",
      description: "We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking \"Accept All\", you consent to our use of cookies.",
      acceptAll: "Accept All",
      decline: "Decline",
      customize: "Customize",
      privacyPolicy: "Privacy Policy",
      necessaryCookies: "",
      necessaryDesc: "",
      analyticsCookies: "",
      analyticsDesc: "",
      marketingCookies: "",
      marketingDesc: "",
      savePreferences: ""
    },
    nl: {
      title: "Cookie Toestemming",
      description: "Wij gebruiken cookies om uw surfervaring te verbeteren, gepersonaliseerde advertenties of inhoud te tonen en ons verkeer te analyseren. Door op \"Alles accepteren\" te klikken, stemt u in met ons gebruik van cookies.",
      acceptAll: "Alles Accepteren",
      decline: "Weigeren",
      customize: "Aanpassen",
      privacyPolicy: "Privacybeleid",
      necessaryCookies: "",
      necessaryDesc: "",
      analyticsCookies: "",
      analyticsDesc: "",
      marketingCookies: "",
      marketingDesc: "",
      savePreferences: ""
    }
  };

  const text = translations[language as keyof typeof translations];
  
  const handlePrivacyPolicyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/privacy-policy');
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm rounded-lg bg-[#F5F5E9] shadow-lg border border-[#0D503C]/10 overflow-hidden" id="cookie-consent-banner">
      <div className="relative p-4">
        <CookieBannerContent
          title={text.title}
          description={text.description}
          privacyPolicyText={text.privacyPolicy}
          onPrivacyPolicyClick={handlePrivacyPolicyClick}
        />
        
        <CookieBannerActions
          acceptText={text.acceptAll}
          declineText={text.decline}
          customizeText={text.customize}
          onAccept={onAccept}
          onDecline={onDecline}
          onShowPreferences={onShowPreferences}
        />
        
        <CookieBannerCloseButton onClose={onDecline} />
      </div>
    </div>
  );
};

export default CookieBanner;
