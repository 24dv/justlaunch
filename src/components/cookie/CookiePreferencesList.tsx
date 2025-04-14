
import React from 'react';
import { Shield, Zap } from 'lucide-react';
import CookieToggle from './CookieToggle';
import { CookiePreferences } from './types';

interface CookiePreferencesListProps {
  preferences: CookiePreferences;
  onChange: (type: keyof CookiePreferences) => void;
  translations: {
    necessaryCookies: string;
    necessaryDesc: string;
    analyticsCookies: string;
    analyticsDesc: string;
    marketingCookies: string;
    marketingDesc: string;
  };
}

const CookiePreferencesList: React.FC<CookiePreferencesListProps> = ({
  preferences,
  onChange,
  translations
}) => {
  return (
    <div className="space-y-4 my-6">
      {/* Necessary Cookies */}
      <CookieToggle
        label={translations.necessaryCookies}
        description={translations.necessaryDesc}
        icon={<Shield size={18} className="text-[#0D503C]" />}
        checked={preferences.necessary}
        disabled={true}
      />
      
      {/* Analytics Cookies */}
      <CookieToggle
        label={translations.analyticsCookies}
        description={translations.analyticsDesc}
        icon={<Zap size={18} className="text-[#0D503C]" />}
        checked={preferences.analytics}
        onChange={() => onChange('analytics')}
      />
      
      {/* Marketing Cookies */}
      <CookieToggle
        label={translations.marketingCookies}
        description={translations.marketingDesc}
        icon={<Zap size={18} className="text-[#0D503C]" />}
        checked={preferences.marketing}
        onChange={() => onChange('marketing')}
      />
    </div>
  );
};

export default CookiePreferencesList;
