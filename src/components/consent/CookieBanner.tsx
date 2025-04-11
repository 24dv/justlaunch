
import React, { useState } from 'react';
import { Shield, X, ChevronDown, ChevronUp, Cookie } from 'lucide-react';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { useConsent } from '../../contexts/ConsentContext';
import { useLanguage } from '../../contexts/LanguageContext';

const CookieBanner: React.FC = () => {
  const { consent, updateConsent, acceptAll, rejectAll, hasInteracted, setHasInteracted } = useConsent();
  const [expanded, setExpanded] = useState(false);
  const { t, language } = useLanguage();

  if (hasInteracted) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-[#0D503C]/20 shadow-lg animate-slide-up">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="mt-1 p-1 bg-[#F9A7A7]/20 rounded-full">
              <Cookie className="h-5 w-5 text-[#0D503C]" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#0D503C]">
                {language === 'en' ? 'Cookie Preferences' : 'Cookie Voorkeuren'}
              </h3>
              <p className="mt-1 text-sm text-[#0D503C]/80 max-w-3xl">
                {language === 'en' 
                  ? 'We use cookies to improve your experience and analyze website traffic. By clicking "Accept All", you consent to our use of cookies.' 
                  : 'Wij gebruiken cookies om uw ervaring te verbeteren en websiteverkeer te analyseren. Door op "Alles Accepteren" te klikken, gaat u akkoord met ons gebruik van cookies.'}
              </p>
            </div>
          </div>
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="shrink-0 p-1 text-[#0D503C]/60 hover:text-[#0D503C] transition-colors"
            aria-label={expanded ? "Collapse cookie settings" : "Expand cookie settings"}
          >
            {expanded ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
        
        {expanded && (
          <div className="mt-4 border-t pt-4 border-[#0D503C]/10">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="necessary-cookies" 
                  checked={consent.necessary} 
                  disabled={true} // Necessary cookies can't be disabled
                />
                <div className="grid gap-1.5">
                  <label 
                    htmlFor="necessary-cookies" 
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#0D503C]"
                  >
                    {language === 'en' ? 'Necessary Cookies' : 'Noodzakelijke Cookies'}
                  </label>
                  <p className="text-sm text-[#0D503C]/70">
                    {language === 'en' 
                      ? 'These cookies are essential for the website to function properly.' 
                      : 'Deze cookies zijn essentieel voor het goed functioneren van de website.'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="preferences-cookies" 
                  checked={consent.preferences} 
                  onCheckedChange={(checked) => 
                    updateConsent({ preferences: checked === true })
                  }
                />
                <div className="grid gap-1.5">
                  <label 
                    htmlFor="preferences-cookies" 
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#0D503C]"
                  >
                    {language === 'en' ? 'Preferences Cookies' : 'Voorkeur Cookies'}
                  </label>
                  <p className="text-sm text-[#0D503C]/70">
                    {language === 'en' 
                      ? 'These cookies allow the website to remember choices you make and provide enhanced functionality.' 
                      : 'Deze cookies onthouden uw voorkeuren en bieden verbeterde functionaliteit.'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="statistics-cookies" 
                  checked={consent.statistics} 
                  onCheckedChange={(checked) => 
                    updateConsent({ statistics: checked === true })
                  }
                />
                <div className="grid gap-1.5">
                  <label 
                    htmlFor="statistics-cookies" 
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#0D503C]"
                  >
                    {language === 'en' ? 'Statistics Cookies' : 'Statistieken Cookies'}
                  </label>
                  <p className="text-sm text-[#0D503C]/70">
                    {language === 'en' 
                      ? 'These cookies collect information about how you use our website, which pages you visited and which links you clicked on.' 
                      : 'Deze cookies verzamelen informatie over hoe u onze website gebruikt, welke pagina\'s u heeft bezocht en op welke links u heeft geklikt.'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="marketing-cookies" 
                  checked={consent.marketing} 
                  onCheckedChange={(checked) => 
                    updateConsent({ marketing: checked === true })
                  }
                />
                <div className="grid gap-1.5">
                  <label 
                    htmlFor="marketing-cookies" 
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#0D503C]"
                  >
                    {language === 'en' ? 'Marketing Cookies' : 'Marketing Cookies'}
                  </label>
                  <p className="text-sm text-[#0D503C]/70">
                    {language === 'en' 
                      ? 'These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.' 
                      : 'Deze cookies volgen uw online activiteit om adverteerders te helpen relevantere advertenties te leveren of om te beperken hoe vaak u een advertentie ziet.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex flex-wrap gap-3 mt-4 justify-end">
          <Button 
            variant="outline" 
            onClick={rejectAll}
            className="border-[#0D503C]/30 text-[#0D503C] hover:bg-[#0D503C]/10"
          >
            {language === 'en' ? 'Reject All' : 'Alles Weigeren'}
          </Button>
          <Button 
            onClick={acceptAll}
            className="bg-[#0D503C] hover:bg-[#0A4231] text-white"
          >
            {language === 'en' ? 'Accept All' : 'Alles Accepteren'}
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setHasInteracted(true)}
            className="border-[#0D503C]/30 text-[#0D503C] hover:bg-[#0D503C]/10"
          >
            {language === 'en' ? 'Save Preferences' : 'Voorkeuren Opslaan'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
