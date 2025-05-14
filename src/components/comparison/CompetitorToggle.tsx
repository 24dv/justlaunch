
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface CompetitorToggleProps {
  providers: string[];
  selectedProvider: string;
  onToggleProvider: (provider: string) => void;
}

const CompetitorToggle = ({ providers, selectedProvider, onToggleProvider }: CompetitorToggleProps) => {
  const { t } = useLanguage();

  // Filter out "Just Launch" from providers since it's always shown
  const competitorProviders = providers.filter(provider => provider !== 'Just Launch');
  
  // Map provider names to translation keys
  const getProviderName = (provider: string) => {
    return t(`compare.providers.${provider.toLowerCase().replace(/\s+/g, '')}`);
  };

  return (
    <div className="flex justify-center mb-4 mt-2">
      <div className="inline-flex p-1 rounded-lg bg-[#0D503C]/10 border border-[#0D503C]/30">
        {competitorProviders.map((provider) => (
          <button
            key={provider}
            onClick={() => onToggleProvider(provider)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              selectedProvider === provider
                ? 'bg-[#0D503C] text-[#F5F5E9] shadow-md'
                : 'text-[#0D503C] hover:bg-[#0D503C]/10'
            }`}
          >
            {getProviderName(provider)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CompetitorToggle;
