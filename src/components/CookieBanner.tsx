
import React from 'react';
import { useCookieConsent } from '../contexts/CookieConsentContext';
import { useLanguage } from '../contexts/LanguageContext';
import { X, Info, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const { consentStatus, acceptCookies, declineCookies, showBanner, setShowBanner } = useCookieConsent();
  const { t } = useLanguage();

  if (!showBanner) return null;

  return (
    <Dialog open={showBanner} onOpenChange={setShowBanner}>
      <DialogContent className="max-w-lg p-0 border-2 border-[#0D503C]/20 bg-[#F5F5E9] overflow-hidden">
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-[#0D503C]" />
            <h2 className="text-xl font-serif text-[#0D503C]">{t('cookies.title')}</h2>
          </div>
          
          <div className="mb-6 text-[#0D503C]/80 text-sm">
            <p className="mb-3">{t('cookies.description')}</p>
            <p>{t('cookies.gdprCompliance')}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              variant="outline" 
              className="flex-1 bg-transparent border-[#0D503C]/20 text-[#0D503C]/80 hover:bg-[#0D503C]/5 hover:text-[#0D503C]"
              onClick={declineCookies}
            >
              {t('cookies.decline')}
            </Button>
            <Button 
              className="flex-1 bg-[#0D503C] text-white hover:bg-[#0D503C]/90"
              onClick={acceptCookies}
            >
              {t('cookies.accept')}
            </Button>
          </div>
          
          <div className="mt-4 text-center">
            <Link to="/privacy-policy" className="text-xs text-[#0D503C]/70 hover:text-[#F9A7A7] transition-colors">
              <Info className="inline h-3 w-3 mr-1" /> 
              {t('cookies.learnMore')}
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieBanner;
