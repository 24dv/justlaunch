import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Toaster } from './components/ui/toaster';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ThankYou from './pages/ThankYou';
import CookieBanner from './components/CookieBanner';
import CookieConsentDialog from './components/CookieConsentDialog';
import { CookiePreferences } from './components/cookie/types';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

window.dataLayer = window.dataLayer || [];

const App: React.FC = () => {
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  });
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null);
  const [showCookieDialog, setShowCookieDialog] = useState(false);
  const [cookieConsentLoaded, setCookieConsentLoaded] = useState(false);

  useEffect(() => {
    window.dataLayer.push({
      'event': 'default_consent',
      'consentMode': {
        'functionality_storage': 'granted',
        'security_storage': 'granted',
        'analytics_storage': 'denied', 
        'ad_storage': 'denied',
        'personalization_storage': 'denied'
      }
    });
    
    console.log('App: Initialized default GTM consent settings');
  }, []);

  useEffect(() => {
    const loadCookieConsent = () => {
      const savedConsent = localStorage.getItem("cookieConsent");
      const savedPreferences = localStorage.getItem("cookiePreferences");
      
      if (savedConsent === "accepted" || savedConsent === "declined") {
        setCookiesAccepted(true);
        
        if (savedPreferences) {
          try {
            const preferences = JSON.parse(savedPreferences);
            setCookiePreferences(preferences);
            initializeTracking(preferences);
          } catch (e) {
            console.error("Failed to parse saved cookie preferences", e);
          }
        }
      } else {
        setCookiesAccepted(null);
      }
      
      setCookieConsentLoaded(true);
    };
    
    loadCookieConsent();
    
    window.addEventListener('showCookiePreferences', () => {
      setShowCookieDialog(true);
    });
    
    return () => {
      window.removeEventListener('showCookiePreferences', () => {
        setShowCookieDialog(true);
      });
    };
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    
    localStorage.setItem("cookiePreferences", JSON.stringify(allAccepted));
    localStorage.setItem("cookieConsent", "accepted");
    
    setCookiePreferences(allAccepted);
    setCookiesAccepted(true);
    
    initializeTracking(allAccepted);
    
    console.log("All cookies accepted");
  };

  const handleDecline = () => {
    const minimalPreferences = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    
    localStorage.setItem("cookiePreferences", JSON.stringify(minimalPreferences));
    localStorage.setItem("cookieConsent", "declined");
    
    setCookiePreferences(minimalPreferences);
    setCookiesAccepted(true);
    
    initializeTracking(minimalPreferences);
    
    console.log("Optional cookies declined");
  };

  const handleShowPreferences = () => {
    setShowCookieDialog(true);
  };

  const handleSavePreferences = (preferences: CookiePreferences) => {
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    
    localStorage.setItem("cookieConsent", 
      preferences.analytics || preferences.marketing ? "accepted" : "declined");
    
    setCookiePreferences(preferences);
    setCookiesAccepted(true);
    setShowCookieDialog(false);
    
    console.log("Cookie preferences saved:", preferences);
    
    initializeTracking(preferences);
  };

  const initializeTracking = (preferences: CookiePreferences) => {
    window.dataLayer.push({
      'event': 'consent_update',
      'consentMode': {
        'functionality_storage': 'granted',
        'security_storage': 'granted',
        'analytics_storage': preferences.analytics ? 'granted' : 'denied',
        'ad_storage': preferences.marketing ? 'granted' : 'denied',
        'personalization_storage': preferences.marketing ? 'granted' : 'denied'
      }
    });

    window.dataLayer.push({
      'event': 'cookiePreferencesUpdated',
      'cookiePreferences': {
        'necessary': preferences.necessary,
        'analytics': preferences.analytics,
        'marketing': preferences.marketing
      }
    });

    if (preferences.analytics) {
      console.log("Initializing analytics tracking...");
      window.dataLayer.push({ 'analyticsConsent': true });
    }
    
    if (preferences.marketing) {
      console.log("Initializing marketing tracking...");
      window.dataLayer.push({ 'marketingConsent': true });
    }
    
    if (!preferences.analytics && !preferences.marketing) {
      console.log("No tracking initialized based on user preferences");
      window.dataLayer.push({ 
        'analyticsConsent': false, 
        'marketingConsent': false 
      });
    }
  };

  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          {cookieConsentLoaded && cookiesAccepted === null && (
            <CookieBanner 
              onAccept={handleAcceptAll}
              onDecline={handleDecline}
              onShowPreferences={handleShowPreferences}
              isVisible={true}
            />
          )}
          
          <CookieConsentDialog 
            isOpen={showCookieDialog} 
            onSavePreferences={handleSavePreferences} 
          />
          
          <Toaster />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
