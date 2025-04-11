
import React, { useState } from 'react';
import { useCookieConsent } from '../contexts/CookieConsentContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CheckCircle2, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CookieBanner = () => {
  const { showBanner, acceptAll, acceptNecessary, updateConsent, consent, savePreferences, setShowBanner } = useCookieConsent();
  const { t } = useLanguage();
  const [showSettings, setShowSettings] = useState(false);
  const navigate = useNavigate();

  if (!showBanner) return null;

  const navigateToPrivacyPolicy = () => {
    navigate('/privacy-policy');
    setShowBanner(false);
  };

  return (
    <Dialog open={showBanner} onOpenChange={setShowBanner}>
      <DialogContent className="md:max-w-[500px] p-0 gap-0 border-none rounded-xl bg-white">
        <div className="p-6 flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-serif font-semibold text-[#0D503C]">{t('cookie.title')}</h3>
            {!showSettings && (
              <button 
                onClick={() => setShowSettings(true)}
                className="flex items-center text-sm text-[#0D503C] hover:text-[#F9A7A7] transition-colors"
              >
                <Settings size={16} className="mr-1" />
                {t('cookie.customize')}
              </button>
            )}
          </div>
          
          {!showSettings ? (
            <>
              <p className="text-sm text-gray-600">
                {t('cookie.description')}
              </p>
              <div className="text-sm text-gray-600">
                <span>{t('cookie.learnMore')} </span>
                <button 
                  onClick={navigateToPrivacyPolicy}
                  className="text-[#0D503C] hover:text-[#F9A7A7] transition-colors underline"
                >
                  {t('cookie.privacyPolicy')}
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button 
                  onClick={acceptNecessary}
                  className="w-full sm:w-auto px-4 py-2 text-sm font-medium border border-[#0D503C] text-[#0D503C] rounded-full hover:bg-[#0D503C]/10 transition-colors"
                >
                  {t('cookie.acceptNecessary')}
                </button>
                <button 
                  onClick={acceptAll}
                  className="w-full sm:w-auto px-4 py-2 text-sm font-medium bg-[#0D503C] text-white rounded-full hover:bg-[#0D503C]/90 transition-colors flex-1 sm:flex-none"
                >
                  {t('cookie.acceptAll')}
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-600 mb-4">
                {t('cookie.customizeDescription')}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">{t('cookie.necessary')}</h4>
                    <p className="text-xs text-gray-500">{t('cookie.necessaryDescription')}</p>
                  </div>
                  <CheckCircle2 className="text-[#0D503C] h-5 w-5" />
                </div>
                
                <CookieOption 
                  title={t('cookie.preferences')}
                  description={t('cookie.preferencesDescription')}
                  checked={consent.preferences}
                  onChange={(checked) => updateConsent('preferences', checked)}
                />
                
                <CookieOption 
                  title={t('cookie.analytics')}
                  description={t('cookie.analyticsDescription')}
                  checked={consent.analytics}
                  onChange={(checked) => updateConsent('analytics', checked)}
                />
                
                <CookieOption 
                  title={t('cookie.marketing')}
                  description={t('cookie.marketingDescription')}
                  checked={consent.marketing}
                  onChange={(checked) => updateConsent('marketing', checked)}
                />
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button 
                  onClick={() => setShowSettings(false)}
                  className="w-full sm:w-auto px-4 py-2 text-sm font-medium border border-[#0D503C] text-[#0D503C] rounded-full hover:bg-[#0D503C]/10 transition-colors"
                >
                  {t('cookie.back')}
                </button>
                <button 
                  onClick={savePreferences}
                  className="w-full sm:w-auto px-4 py-2 text-sm font-medium bg-[#0D503C] text-white rounded-full hover:bg-[#0D503C]/90 transition-colors flex-1 sm:flex-none"
                >
                  {t('cookie.savePreferences')}
                </button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const CookieOption = ({ 
  title, 
  description, 
  checked, 
  onChange 
}: { 
  title: string; 
  description: string; 
  checked: boolean; 
  onChange: (checked: boolean) => void;
}) => {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div>
        <h4 className="font-medium text-sm">{title}</h4>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div className="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-[#0D503C]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0D503C]"></div>
      </label>
    </div>
  );
};

export default CookieBanner;
