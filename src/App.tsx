
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

const App = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if the user has already made a cookie choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (cookieConsent) {
      setCookiesAccepted(cookieConsent === "accepted");
    } else {
      setCookiesAccepted(null); // Show the cookie banner
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setCookiesAccepted(true);
    
    // Here you would initialize any tracking or analytics that uses cookies
    console.log("Cookies accepted, initializing tracking...");
  };

  const handleDeclineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setCookiesAccepted(false);
    
    // Here you would ensure no tracking cookies are used
    console.log("Cookies declined, disabling tracking...");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <div className="noise-texture" />
          <AnimatedBackground />
          <HashRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>
          {cookiesAccepted === null && (
            <CookieBanner 
              onAccept={handleAcceptCookies} 
              onDecline={handleDeclineCookies} 
            />
          )}
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
