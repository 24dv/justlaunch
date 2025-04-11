
import React, { createContext, useState, useContext, useEffect } from 'react';

type ConsentType = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

interface CookieConsentContextType {
  consent: ConsentType;
  hasInteracted: boolean;
  updateConsent: (newConsent: ConsentType) => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  setHasInteracted: (value: boolean) => void;
}

const defaultConsent: ConsentType = {
  necessary: true, // Always required
  analytics: false,
  marketing: false,
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<ConsentType>(defaultConsent);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  useEffect(() => {
    // Load consent from localStorage if available
    const savedConsent = localStorage.getItem('cookieConsent');
    const savedInteraction = localStorage.getItem('cookieInteraction');
    
    if (savedConsent) {
      try {
        setConsent(JSON.parse(savedConsent));
      } catch (e) {
        console.error('Error parsing saved cookie consent', e);
      }
    }
    
    if (savedInteraction) {
      setHasInteracted(savedInteraction === 'true');
    }
  }, []);

  useEffect(() => {
    // Save to localStorage whenever consent changes
    if (hasInteracted) {
      localStorage.setItem('cookieConsent', JSON.stringify(consent));
      localStorage.setItem('cookieInteraction', 'true');
    }
  }, [consent, hasInteracted]);

  const updateConsent = (newConsent: ConsentType) => {
    setConsent({ ...newConsent, necessary: true }); // Necessary cookies are always required
  };

  const acceptAll = () => {
    setConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
    setHasInteracted(true);
  };

  const rejectNonEssential = () => {
    setConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
    setHasInteracted(true);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        hasInteracted,
        updateConsent,
        acceptAll,
        rejectNonEssential,
        setHasInteracted,
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
