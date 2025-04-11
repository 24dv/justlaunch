
import React, { createContext, useContext, useState, useEffect } from 'react';

type ConsentType = {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
};

interface ConsentContextType {
  consent: ConsentType;
  hasInteracted: boolean;
  updateConsent: (newConsent: Partial<ConsentType>) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  setHasInteracted: (value: boolean) => void;
}

const defaultConsent: ConsentType = {
  necessary: true, // Always required
  preferences: false,
  statistics: false,
  marketing: false,
};

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export const ConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<ConsentType>(() => {
    // Try to load saved consent from localStorage
    const savedConsent = localStorage.getItem('cookieConsent');
    return savedConsent ? JSON.parse(savedConsent) : defaultConsent;
  });

  const [hasInteracted, setHasInteracted] = useState<boolean>(() => {
    return localStorage.getItem('consentInteracted') === 'true';
  });

  // Save consent to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
  }, [consent]);

  // Save interaction state to localStorage
  useEffect(() => {
    localStorage.setItem('consentInteracted', hasInteracted.toString());
  }, [hasInteracted]);

  const updateConsent = (newConsent: Partial<ConsentType>) => {
    setConsent(prev => ({ ...prev, ...newConsent }));
  };

  const acceptAll = () => {
    setConsent({
      necessary: true,
      preferences: true,
      statistics: true,
      marketing: true,
    });
    setHasInteracted(true);
  };

  const rejectAll = () => {
    setConsent({
      necessary: true, // Necessary cookies are always accepted
      preferences: false,
      statistics: false,
      marketing: false,
    });
    setHasInteracted(true);
  };

  return (
    <ConsentContext.Provider
      value={{
        consent,
        hasInteracted,
        updateConsent,
        acceptAll,
        rejectAll,
        setHasInteracted,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = (): ConsentContextType => {
  const context = useContext(ConsentContext);
  if (context === undefined) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
};
