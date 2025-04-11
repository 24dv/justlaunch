
import React, { useState } from 'react';
import { useCookieConsent } from '../contexts/CookieConsentContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CookieBanner = () => {
  const { 
    cookieConsent, 
    showBanner, 
    setShowBanner, 
    acceptAllCookies, 
    acceptNecessaryCookies,
    updateCookieConsent,
    saveCookiePreferences
  } = useCookieConsent();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  
  if (!showBanner) return null;
  
  const handlePrivacyPolicyClick = () => {
    navigate('/privacy-policy');
    setShowBanner(false);
  };
  
  return (
    <Dialog open={showBanner} onOpenChange={setShowBanner}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <div className="flex flex-col p-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#0D503C]">{t('cookies.title')}</h2>
            <button 
              onClick={() => setShowBanner(false)} 
              className="text-[#0D503C] hover:text-[#F9A7A7] transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <p className="text-sm text-[#0D503C]/80 mb-6">
            {t('cookies.description')} 
            <button 
              onClick={handlePrivacyPolicyClick}
              className="text-[#0D503C] underline hover:text-[#F9A7A7] ml-1"
            >
              {t('cookies.privacyPolicy')}
            </button>
          </p>
          
          {!showDetails ? (
            <div className="flex flex-col gap-4 sm:flex-row justify-between mt-2">
              <button
                onClick={() => setShowDetails(true)}
                className="px-4 py-2 border border-[#0D503C] text-[#0D503C] rounded-full text-sm hover:bg-[#0D503C]/10 transition-colors"
              >
                {t('cookies.customize')}
              </button>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={acceptNecessaryCookies}
                  className="px-4 py-2 border border-[#0D503C] text-[#0D503C] rounded-full text-sm hover:bg-[#0D503C]/10 transition-colors"
                >
                  {t('cookies.acceptNecessary')}
                </button>
                <button
                  onClick={acceptAllCookies}
                  className="px-4 py-2 bg-[#0D503C] text-white rounded-full text-sm hover:bg-[#0A4231] transition-colors"
                >
                  {t('cookies.acceptAll')}
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6 space-y-4 border rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="necessary" 
                    checked={cookieConsent.necessary} 
                    disabled 
                    className="mt-1 data-[state=checked]:bg-[#0D503C] data-[state=checked]:text-white border-[#0D503C]"
                  />
                  <div>
                    <label htmlFor="necessary" className="font-medium text-[#0D503C] cursor-default">
                      {t('cookies.necessary.title')}
                    </label>
                    <p className="text-xs text-[#0D503C]/70">
                      {t('cookies.necessary.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="analytics" 
                    checked={cookieConsent.analytics} 
                    onCheckedChange={() => updateCookieConsent({ analytics: !cookieConsent.analytics })}
                    className="mt-1 data-[state=checked]:bg-[#0D503C] data-[state=checked]:text-white border-[#0D503C]"
                  />
                  <div>
                    <label htmlFor="analytics" className="font-medium text-[#0D503C] cursor-pointer">
                      {t('cookies.analytics.title')}
                    </label>
                    <p className="text-xs text-[#0D503C]/70">
                      {t('cookies.analytics.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="marketing" 
                    checked={cookieConsent.marketing} 
                    onCheckedChange={() => updateCookieConsent({ marketing: !cookieConsent.marketing })}
                    className="mt-1 data-[state=checked]:bg-[#0D503C] data-[state=checked]:text-white border-[#0D503C]"
                  />
                  <div>
                    <label htmlFor="marketing" className="font-medium text-[#0D503C] cursor-pointer">
                      {t('cookies.marketing.title')}
                    </label>
                    <p className="text-xs text-[#0D503C]/70">
                      {t('cookies.marketing.description')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-end gap-2 mt-4">
                <button
                  onClick={() => setShowDetails(false)}
                  className="px-4 py-2 border border-[#0D503C] text-[#0D503C] rounded-full text-sm hover:bg-[#0D503C]/10 transition-colors"
                >
                  {t('cookies.back')}
                </button>
                <button
                  onClick={saveCookiePreferences}
                  className="px-4 py-2 bg-[#0D503C] text-white rounded-full text-sm hover:bg-[#0A4231] transition-colors"
                >
                  {t('cookies.save')}
                </button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieBanner;
