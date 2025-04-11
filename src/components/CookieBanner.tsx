
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const { consent, updateConsent, acceptAll, acceptNecessaryOnly, showBanner, setShowBanner } = useCookieConsent();
  const { t } = useLanguage();
  const [preferences, setPreferences] = useState({
    necessary: true, // Always enabled
    preferences: consent.preferences,
    statistics: consent.statistics,
    marketing: consent.marketing,
  });

  const handleSavePreferences = () => {
    updateConsent(preferences);
  };

  return (
    <Dialog open={showBanner} onOpenChange={setShowBanner}>
      <DialogContent className="sm:max-w-md md:max-w-lg lg:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">{t('cookies.title')}</DialogTitle>
          <DialogDescription className="text-sm mt-2">
            {t('cookies.description')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-4">
            <div className="flex items-start space-x-3 pt-2">
              <Checkbox id="necessary" checked disabled />
              <div className="grid gap-1.5">
                <label htmlFor="necessary" className="font-medium cursor-not-allowed">
                  {t('cookies.necessary.title')}
                </label>
                <p className="text-sm text-muted-foreground">
                  {t('cookies.necessary.description')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 pt-2">
              <Checkbox 
                id="preferences" 
                checked={preferences.preferences}
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, preferences: !!checked }))}
              />
              <div className="grid gap-1.5">
                <label htmlFor="preferences" className="font-medium">
                  {t('cookies.preferences.title')}
                </label>
                <p className="text-sm text-muted-foreground">
                  {t('cookies.preferences.description')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 pt-2">
              <Checkbox 
                id="statistics" 
                checked={preferences.statistics}
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, statistics: !!checked }))}
              />
              <div className="grid gap-1.5">
                <label htmlFor="statistics" className="font-medium">
                  {t('cookies.statistics.title')}
                </label>
                <p className="text-sm text-muted-foreground">
                  {t('cookies.statistics.description')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 pt-2">
              <Checkbox 
                id="marketing" 
                checked={preferences.marketing}
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, marketing: !!checked }))}
              />
              <div className="grid gap-1.5">
                <label htmlFor="marketing" className="font-medium">
                  {t('cookies.marketing.title')}
                </label>
                <p className="text-sm text-muted-foreground">
                  {t('cookies.marketing.description')}
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            {t('cookies.learnMore')} 
            <Link to="/privacy-policy" className="underline ml-1 text-[#0D503C] hover:text-[#0D503C]/80">
              {t('cookies.privacyPolicy')}
            </Link>
          </p>
        </div>
        
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={acceptNecessaryOnly}
            className="w-full sm:w-auto"
          >
            {t('cookies.necessaryOnly')}
          </Button>
          <Button
            variant="outline"
            onClick={handleSavePreferences}
            className="w-full sm:w-auto"
          >
            {t('cookies.savePreferences')}
          </Button>
          <Button
            onClick={acceptAll}
            className="w-full sm:w-auto bg-[#0D503C] hover:bg-[#0D503C]/90"
          >
            {t('cookies.acceptAll')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieBanner;
