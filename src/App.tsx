
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";
import AnimatedBackground from "./components/AnimatedBackground";
import CookieBanner from "./components/CookieBanner";
import CookieConsentDialog from "./components/CookieConsentDialog";
import { CookiePreferences } from "./components/cookie/types";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

const App = () => {
  const [cookieConsentLoaded, setCookieConsentLoaded] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null);
  const [showCookieDialog, setShowCookieDialog] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Listen for the custom event to show cookie preferences
    const handleShowCookiePreferences = () => {
      setShowCookieDialog(true);
    };
    
    window.addEventListener('showCookiePreferences', handleShowCookiePreferences);
    
    // Check if the show cookie preferences flag is set
    const showCookiePrefs = localStorage.getItem("showCookiePreferences");
    if (showCookiePrefs === "true") {
      localStorage.removeItem("showCookiePreferences");
      setShowCookieDialog(true);
    }
    
    const savedPreferences = localStorage.getItem("cookiePreferences");
    if (savedPreferences) {
      try {
        const parsedPreferences = JSON.parse(savedPreferences);
        setCookiePreferences(parsedPreferences);
        setCookiesAccepted(true);
      } catch (error) {
        console.error("Failed to parse cookie preferences:", error);
        setCookiesAccepted(null);
      }
    } else {
      const cookieConsent = localStorage.getItem("cookieConsent");
      if (cookieConsent === "accepted" || cookieConsent === "declined") {
        setCookiesAccepted(cookieConsent === "accepted");
        
        if (cookieConsent === "accepted") {
          const newPreferences = {
            necessary: true,
            analytics: true,
            marketing: true
          };
          localStorage.setItem("cookiePreferences", JSON.stringify(newPreferences));
          setCookiePreferences(newPreferences);
        }
      } else {
        setCookiesAccepted(null);
      }
    }
    
    // Set cookie consent as loaded after checking local storage
    setCookieConsentLoaded(true);
    
    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('showCookiePreferences', handleShowCookiePreferences);
    };
  }, []);

  const handleAcceptCookies = () => {
    const acceptedPreferences = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    
    localStorage.setItem("cookiePreferences", JSON.stringify(acceptedPreferences));
    localStorage.setItem("cookieConsent", "accepted");
    
    setCookiePreferences(acceptedPreferences);
    setCookiesAccepted(true);
    
    console.log("All cookies accepted, initializing tracking...");
    initializeTracking(acceptedPreferences);
  };

  const handleDeclineCookies = () => {
    const declinedPreferences = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    
    localStorage.setItem("cookiePreferences", JSON.stringify(declinedPreferences));
    localStorage.setItem("cookieConsent", "declined");
    
    setCookiePreferences(declinedPreferences);
    setCookiesAccepted(true);
    
    console.log("Cookies declined, disabling tracking...");
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
    if (preferences.analytics) {
      console.log("Initializing analytics tracking...");
    }
    
    if (preferences.marketing) {
      console.log("Initializing marketing cookies...");
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <HashRouter>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <div className="noise-texture" />
            <AnimatedBackground />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            {cookiesAccepted === null && (
              <CookieBanner 
                onAccept={handleAcceptCookies} 
                onDecline={handleDeclineCookies}
                onShowPreferences={handleShowPreferences}
                isVisible={cookieConsentLoaded} // Only show when consent state is loaded
              />
            )}
            <CookieConsentDialog 
              isOpen={showCookieDialog} 
              onSavePreferences={handleSavePreferences}
            />
          </TooltipProvider>
        </HashRouter>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
