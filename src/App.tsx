
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Toaster } from './components/ui/toaster';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CookieBanner from './components/CookieBanner';
import CookieConsentDialog from './components/CookieConsentDialog';
import { CookiePreferences } from './components/cookie/types';

const App: React.FC = () => {
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  });
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null);
  const [showCookieDialog, setShowCookieDialog] = useState(false);
  const [cookieConsentLoaded, setCookieConsentLoaded] = useState(false);

  // Check for existing cookie consent on mount
  useEffect(() => {
    const loadCookieConsent = () => {
      // Check for existing consent in local storage
      const savedConsent = localStorage.getItem("cookieConsent");
      const savedPreferences = localStorage.getItem("cookiePreferences");
      
      if (savedConsent === "accepted" || savedConsent === "declined") {
        setCookiesAccepted(true);
        
        // If we have saved preferences, load them
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
      
      // Set loaded state to true
      setCookieConsentLoaded(true);
    };
    
    loadCookieConsent();
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    
    // Save to local storage
    localStorage.setItem("cookiePreferences", JSON.stringify(allAccepted));
    localStorage.setItem("cookieConsent", "accepted");
    
    // Update state
    setCookiePreferences(allAccepted);
    setCookiesAccepted(true);
    
    // Initialize tracking
    initializeTracking(allAccepted);
    
    console.log("All cookies accepted");
  };

  const handleDecline = () => {
    const minimalPreferences = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    
    // Save to local storage
    localStorage.setItem("cookiePreferences", JSON.stringify(minimalPreferences));
    localStorage.setItem("cookieConsent", "declined");
    
    // Update state
    setCookiePreferences(minimalPreferences);
    setCookiesAccepted(true);
    
    console.log("Optional cookies declined");
  };

  const handleShowPreferences = () => {
    setShowCookieDialog(true);
  };

  const handleSavePreferences = (preferences: CookiePreferences) => {
    // Save preferences to local storage
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    
    // Set cookie consent based on whether any tracking is enabled
    localStorage.setItem("cookieConsent", 
      preferences.analytics || preferences.marketing ? "accepted" : "declined");
    
    // Update state
    setCookiePreferences(preferences);
    setCookiesAccepted(true);
    setShowCookieDialog(false);
    
    // Log the saved preferences
    console.log("Cookie preferences saved:", preferences);
    
    // Initialize tracking based on new preferences
    initializeTracking(preferences);
  };

  // Function to initialize tracking based on user preferences
  const initializeTracking = (preferences: CookiePreferences) => {
    if (preferences.analytics) {
      console.log("Initializing analytics tracking...");
      // Code to initialize analytics tracking would go here
      // Example: initAnalytics();
    }
    
    if (preferences.marketing) {
      console.log("Initializing marketing tracking...");
      // Code to initialize marketing tracking would go here
      // Example: initMarketingTools();
    }
    
    if (!preferences.analytics && !preferences.marketing) {
      console.log("No tracking initialized based on user preferences");
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
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          {/* Only show the cookie banner if consent is null and loading is complete */}
          {cookieConsentLoaded && cookiesAccepted === null && (
            <CookieBanner 
              onAccept={handleAcceptAll}
              onDecline={handleDecline}
              onShowPreferences={handleShowPreferences}
              isVisible={true}
            />
          )}
          
          {/* Cookie preferences dialog */}
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
