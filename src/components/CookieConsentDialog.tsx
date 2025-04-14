
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Shield, Settings, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface CookieConsentDialogProps {
  isOpen: boolean;
  onSavePreferences: (preferences: CookiePreferences) => void;
}

export interface CookiePreferences {
  necessary: boolean; // Always true
  analytics: boolean;
  marketing: boolean;
}

const CookieConsentDialog: React.FC<CookieConsentDialogProps> = ({ isOpen, onSavePreferences }) => {
  const { language } = useLanguage();
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  });
  
  const translations = {
    en: {
      title: "Cookie Preferences",
      description: "We use cookies to enhance your browsing experience. Select which cookies you want to allow.",
      necessary: {
        title: "Necessary Cookies",
        description: "These cookies are essential for the website to function properly and cannot be disabled."
      },
      analytics: {
        title: "Analytics Cookies",
        description: "These cookies help us understand how visitors interact with our website, helping us improve our services."
      },
      marketing: {
        title: "Marketing Cookies",
        description: "These cookies are used to track visitors across websites to display relevant advertisements."
      },
      acceptAll: "Accept All",
      savePreferences: "Save Preferences",
      privacyPolicy: "View Privacy Policy"
    },
    nl: {
      title: "Cookie Voorkeuren",
      description: "Wij gebruiken cookies om uw surfervaring te verbeteren. Selecteer welke cookies u wilt toestaan.",
      necessary: {
        title: "Noodzakelijke Cookies",
        description: "Deze cookies zijn essentieel voor het goed functioneren van de website en kunnen niet worden uitgeschakeld."
      },
      analytics: {
        title: "Analytics Cookies",
        description: "Deze cookies helpen ons te begrijpen hoe bezoekers omgaan met onze website, wat ons helpt onze diensten te verbeteren."
      },
      marketing: {
        title: "Marketing Cookies",
        description: "Deze cookies worden gebruikt om bezoekers op websites te volgen om relevante advertenties weer te geven."
      },
      acceptAll: "Alles Accepteren",
      savePreferences: "Voorkeuren Opslaan",
      privacyPolicy: "Bekijk Privacybeleid"
    }
  };

  const text = translations[language as keyof typeof translations];

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    setCookiePreferences(allAccepted);
    onSavePreferences(allAccepted);
  };

  const handleSavePreferences = () => {
    onSavePreferences(cookiePreferences);
  };

  const handleAnalyticsChange = (value: string) => {
    setCookiePreferences(prev => ({
      ...prev,
      analytics: value === "yes"
    }));
  };

  const handleMarketingChange = (value: string) => {
    setCookiePreferences(prev => ({
      ...prev,
      marketing: value === "yes"
    }));
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md bg-[#F5F5E9] border-[#0D503C]/10">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-[#0D503C]">
            <Shield size={18} />
            {text.title}
          </DialogTitle>
          <DialogDescription className="text-[#0D503C]/80">
            {text.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Necessary Cookies - Always enabled */}
          <div className="space-y-2 border-b border-[#0D503C]/10 pb-4">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium text-[#0D503C] flex items-center gap-2">
                <Settings size={16} />
                {text.necessary.title}
              </Label>
              <span className="text-xs bg-[#0D503C]/10 text-[#0D503C] py-1 px-2 rounded-full">
                {language === 'en' ? 'Required' : 'Vereist'}
              </span>
            </div>
            <p className="text-xs text-[#0D503C]/70">{text.necessary.description}</p>
          </div>

          {/* Analytics Cookies */}
          <div className="space-y-2 border-b border-[#0D503C]/10 pb-4">
            <Label className="text-sm font-medium text-[#0D503C] flex items-center gap-2">
              <Info size={16} />
              {text.analytics.title}
            </Label>
            <p className="text-xs text-[#0D503C]/70 mb-3">{text.analytics.description}</p>
            <RadioGroup 
              value={cookiePreferences.analytics ? "yes" : "no"} 
              onValueChange={handleAnalyticsChange}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="analytics-yes" className="border-[#0D503C]" />
                <Label htmlFor="analytics-yes" className="text-xs">{language === 'en' ? 'Allow' : 'Toestaan'}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="analytics-no" className="border-[#0D503C]" />
                <Label htmlFor="analytics-no" className="text-xs">{language === 'en' ? 'Deny' : 'Weigeren'}</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Marketing Cookies */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#0D503C] flex items-center gap-2">
              <Settings size={16} />
              {text.marketing.title}
            </Label>
            <p className="text-xs text-[#0D503C]/70 mb-3">{text.marketing.description}</p>
            <RadioGroup 
              value={cookiePreferences.marketing ? "yes" : "no"} 
              onValueChange={handleMarketingChange}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="marketing-yes" className="border-[#0D503C]" />
                <Label htmlFor="marketing-yes" className="text-xs">{language === 'en' ? 'Allow' : 'Toestaan'}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="marketing-no" className="border-[#0D503C]" />
                <Label htmlFor="marketing-no" className="text-xs">{language === 'en' ? 'Deny' : 'Weigeren'}</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="text-xs text-center text-[#0D503C]/60">
            <Link to="/privacy-policy" className="text-[#0D503C] hover:underline">
              {text.privacyPolicy}
            </Link>
          </div>
        </div>

        <DialogFooter className="sm:justify-between flex flex-col gap-2 sm:flex-row sm:gap-0">
          <button
            onClick={handleAcceptAll}
            className="px-4 py-2 text-xs font-medium rounded-full bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0A4231] transition-colors w-full sm:w-auto"
          >
            {text.acceptAll}
          </button>
          <button
            onClick={handleSavePreferences}
            className="px-4 py-2 text-xs font-medium rounded-full border border-[#0D503C] text-[#0D503C] hover:bg-[#0D503C]/5 transition-colors w-full sm:w-auto"
          >
            {text.savePreferences}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieConsentDialog;
