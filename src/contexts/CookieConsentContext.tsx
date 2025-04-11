
import React, { createContext, useState, useContext, useEffect } from 'react';

type CookieConsentType = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

interface CookieConsentContextType {
  cookieConsent: CookieConsentType;
  showBanner: boolean;
  setShowBanner: React.Dispatch<React.SetStateAction<boolean>>;
  acceptAllCookies: () => void;
  acceptNecessaryCookies: () => void;
  updateCookieConsent: (consent: Partial<CookieConsentType>) => void;
  saveCookiePreferences: () => void;
}

const defaultConsent: CookieConsentType = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cookieConsent, setCookieConsent] = useState<CookieConsentType>(defaultConsent);
  const [showBanner, setShowBanner] = useState<boolean>(true);
  
  useEffect(() => {
    // Check for existing consent in localStorage
    const storedConsent = localStorage.getItem('cookieConsent');
    if (storedConsent) {
      setCookieConsent(JSON.parse(storedConsent));
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);
  
  const acceptAllCookies = () => {
    const allConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setCookieConsent(allConsent);
    localStorage.setItem('cookieConsent', JSON.stringify(allConsent));
    setShowBanner(false);
  };
  
  const acceptNecessaryCookies = () => {
    const necessaryOnlyConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setCookieConsent(necessaryOnlyConsent);
    localStorage.setItem('cookieConsent', JSON.stringify(necessaryOnlyConsent));
    setShowBanner(false);
  };
  
  const updateCookieConsent = (consent: Partial<CookieConsentType>) => {
    setCookieConsent(prev => ({
      ...prev,
      ...consent,
    }));
  };
  
  const saveCookiePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookieConsent));
    setShowBanner(false);
  };
  
  return (
    <CookieConsentContext.Provider
      value={{
        cookieConsent,
        showBanner,
        setShowBanner,
        acceptAllCookies,
        acceptNecessaryCookies,
        updateCookieConsent,
        saveCookiePreferences
      }}
    >
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
