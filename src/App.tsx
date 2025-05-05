
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Toaster } from './components/ui/toaster';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ThankYou from './pages/ThankYou';
import CookieConsentWrapper from './components/cookie/CookieConsentWrapper';
import ExitIntentPopup from './components/quiz/ExitIntentPopup';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

window.dataLayer = window.dataLayer || [];

const App: React.FC = () => {
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
          
          <CookieConsentWrapper />
          <ExitIntentPopup />
          <Toaster />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
