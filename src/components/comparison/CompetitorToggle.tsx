
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';

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
    <div className="flex justify-center mb-6 mt-4">
      <ToggleGroup type="single" value={selectedProvider} onValueChange={(value) => value && onToggleProvider(value)}>
        {competitorProviders.map((provider) => (
          <ToggleGroupItem 
            key={provider} 
            value={provider}
            className={`px-4 py-2 text-sm font-medium ${
              selectedProvider === provider 
                ? 'bg-[#0D503C] text-[#F5F5E9]' 
                : 'text-[#0D503C] hover:bg-[#0D503C]/10'
            }`}
            aria-label={getProviderName(provider)}
          >
            {getProviderName(provider)}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};

export default CompetitorToggle;
