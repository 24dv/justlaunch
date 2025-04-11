
import React, { createContext, useContext, useState, useEffect } from 'react';

interface CookieConsent {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
  hasConsented: boolean;
}

interface CookieConsentContextType {
  consent: CookieConsent;
  updateConsent: (newConsent: Partial<CookieConsent>) => void;
  acceptAll: () => void;
  acceptNecessaryOnly: () => void;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
}

const defaultConsent: CookieConsent = {
  necessary: true, // Necessary cookies are always enabled
  preferences: false,
  statistics: false,
  marketing: false,
  hasConsented: false,
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<CookieConsent>(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    return savedConsent ? JSON.parse(savedConsent) : defaultConsent;
  });
  
  const [showBanner, setShowBanner] = useState<boolean>(false);
  
  useEffect(() => {
    // On first load, check if user has already consented
    const savedConsent = localStorage.getItem('cookieConsent');
    if (!savedConsent) {
      setShowBanner(true);
    }
  }, []);
  
  useEffect(() => {
    // Save consent to localStorage whenever it changes
    if (consent.hasConsented) {
      localStorage.setItem('cookieConsent', JSON.stringify(consent));
    }
  }, [consent]);
  
  const updateConsent = (newConsent: Partial<CookieConsent>) => {
    setConsent(prev => ({
      ...prev,
      ...newConsent,
      hasConsented: true,
    }));
    setShowBanner(false);
  };
  
  const acceptAll = () => {
    updateConsent({
      necessary: true,
      preferences: true,
      statistics: true,
      marketing: true,
    });
  };
  
  const acceptNecessaryOnly = () => {
    updateConsent({
      necessary: true,
      preferences: false,
      statistics: false,
      marketing: false,
    });
  };
  
  return (
    <CookieConsentContext.Provider value={{ 
      consent, 
      updateConsent, 
      acceptAll, 
      acceptNecessaryOnly,
      showBanner,
      setShowBanner
    }}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = (): CookieConsentContextType => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};
