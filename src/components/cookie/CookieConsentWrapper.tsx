
import React from 'react';
import CookieBanner from '../CookieBanner';
import CookieConsentDialog from '../CookieConsentDialog';
import { useCookieConsent } from '../../hooks/useCookieConsent';

const CookieConsentWrapper: React.FC = () => {
  const {
    cookieConsentLoaded,
    cookiesAccepted,
    showCookieDialog,
    handleAcceptAll,
    handleDecline,
    handleShowPreferences,
    handleSavePreferences
  } = useCookieConsent();

  return (
    <>
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
    </>
  );
};

export default CookieConsentWrapper;
