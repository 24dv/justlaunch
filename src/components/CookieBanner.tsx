
import React, { useState } from 'react';
import { X, Cookie, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Dialog, DialogContent } from './ui/dialog';
import { Switch } from './ui/switch';
import { useLanguage } from '../contexts/LanguageContext';
import { useCookieConsent } from '../contexts/CookieConsentContext';
import { useNavigate } from 'react-router-dom';

const CookieBanner = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { consent, hasInteracted, updateConsent, acceptAll, rejectNonEssential } = useCookieConsent();
  const [showOptions, setShowOptions] = useState(false);
  const [localConsent, setLocalConsent] = useState(consent);

  if (hasInteracted) return null;

  const handleSavePreferences = () => {
    updateConsent(localConsent);
    setShowOptions(false);
  };

  const goToPrivacyPolicy = () => {
    navigate('/privacy-policy');
  };

  const toggleOption = (key: 'analytics' | 'marketing') => {
    setLocalConsent((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <Dialog open={!hasInteracted} onOpenChange={() => {}}>
      <DialogContent className="p-0 border-none max-w-xl mx-auto bg-[#F5F5E9] text-[#222] rounded-xl shadow-lg">
        <div className="flex justify-end p-2">
          <button 
            onClick={rejectNonEssential} 
            className="p-1 text-[#0D503C] hover:bg-[#0D503C]/10 rounded-full"
            aria-label="Close cookie banner"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 pt-2 pb-6">
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="text-[#0D503C]" size={24} />
            <h2 className="text-xl font-serif font-semibold text-[#0D503C]">{t('cookies.title') || 'Cookie Settings'}</h2>
          </div>
          
          <p className="text-sm mb-4 text-[#333]">
            {t('cookies.description') || 'We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.'}
          </p>
          
          <div className="mb-4">
            <button 
              onClick={() => setShowOptions(!showOptions)}
              className="flex items-center text-sm font-medium text-[#0D503C] hover:underline"
            >
              {showOptions ? (
                <>
                  <ChevronUp size={16} className="mr-1" />
                  {t('cookies.hideOptions') || 'Hide Cookie Options'}
                </>
              ) : (
                <>
                  <ChevronDown size={16} className="mr-1" />
                  {t('cookies.showOptions') || 'Show Cookie Options'}
                </>
              )}
            </button>
          </div>
          
          {showOptions && (
            <div className="mb-6 space-y-4 bg-white/50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium">{t('cookies.necessary') || 'Necessary Cookies'}</h3>
                  <p className="text-xs text-[#666]">{t('cookies.necessaryDescription') || 'Essential for website functionality.'}</p>
                </div>
                <Switch checked={true} disabled />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium">{t('cookies.analytics') || 'Analytics Cookies'}</h3>
                  <p className="text-xs text-[#666]">{t('cookies.analyticsDescription') || 'Help us improve our website.'}</p>
                </div>
                <Switch 
                  checked={localConsent.analytics} 
                  onCheckedChange={() => toggleOption('analytics')} 
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium">{t('cookies.marketing') || 'Marketing Cookies'}</h3>
                  <p className="text-xs text-[#666]">{t('cookies.marketingDescription') || 'Allow us to provide you with personalized content.'}</p>
                </div>
                <Switch 
                  checked={localConsent.marketing} 
                  onCheckedChange={() => toggleOption('marketing')} 
                />
              </div>
            </div>
          )}
          
          <div className="text-xs mb-6 text-[#666]">
            {t('cookies.learnMore') || 'For more information, please visit our'} 
            <button 
              onClick={goToPrivacyPolicy}
              className="text-[#0D503C] ml-1 hover:underline"
            >
              {t('cookies.privacyPolicy') || 'Privacy Policy'}
            </button>.
          </div>
          
          <div className="flex flex-wrap gap-3 justify-end">
            {showOptions && (
              <Button 
                variant="outline" 
                onClick={handleSavePreferences}
                className="bg-white hover:bg-white/80 text-[#0D503C] border-[#0D503C] hover:text-[#0D503C]"
              >
                {t('cookies.savePreferences') || 'Save Preferences'}
              </Button>
            )}
            
            <Button 
              variant="outline" 
              onClick={rejectNonEssential}
              className="bg-white hover:bg-white/80 text-[#0D503C] border-[#0D503C] hover:text-[#0D503C]"
            >
              {t('cookies.reject') || 'Reject Non-Essential'}
            </Button>
            
            <Button 
              onClick={acceptAll}
              className="bg-[#0D503C] hover:bg-[#0A4231] text-[#F5F5E9]"
            >
              {t('cookies.acceptAll') || 'Accept All'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieBanner;
