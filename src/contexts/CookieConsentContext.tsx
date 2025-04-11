
import React, { createContext, useContext, useState, useEffect } from 'react';

type CookieConsent = {
  necessary: boolean;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
};

type CookieConsentContextType = {
  consent: CookieConsent;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
  acceptAll: () => void;
  acceptNecessary: () => void;
  updateConsent: (type: keyof CookieConsent, value: boolean) => void;
  savePreferences: () => void;
};

const defaultConsent: CookieConsent = {
  necessary: true, // Always required
  preferences: false,
  analytics: false,
  marketing: false,
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent);
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    // Check if consent is already stored
    const storedConsent = localStorage.getItem('cookieConsent');
    
    if (storedConsent) {
      setConsent(JSON.parse(storedConsent));
      setShowBanner(false);
    } else {
      // Show the banner if no consent is stored
      setShowBanner(true);
    }
  }, []);

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
    };
    setConsent(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(defaultConsent));
    setShowBanner(false);
  };

  const updateConsent = (type: keyof CookieConsent, value: boolean) => {
    setConsent(prev => ({ ...prev, [type]: value }));
  };

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        showBanner,
        setShowBanner,
        acceptAll,
        acceptNecessary,
        updateConsent,
        savePreferences,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};
