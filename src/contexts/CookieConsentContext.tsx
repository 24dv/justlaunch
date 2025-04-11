
import React, { createContext, useContext, useState, useEffect } from 'react';

type ConsentStatus = 'pending' | 'accepted' | 'declined';

interface CookieConsentContextType {
  consentStatus: ConsentStatus;
  acceptCookies: () => void;
  declineCookies: () => void;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};

export const CookieConsentProvider = ({ children }: { children: React.ReactNode }) => {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending');
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      setConsentStatus(savedConsent as ConsentStatus);
    } else {
      // Only show the banner if there's no stored consent
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    setConsentStatus('accepted');
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    setConsentStatus('declined');
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  const value = {
    consentStatus,
    acceptCookies,
    declineCookies,
    showBanner,
    setShowBanner
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
};
