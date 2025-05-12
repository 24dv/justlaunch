
import React from 'react';
import ComparisonCard from './ComparisonCard';
import { ComparisonData } from './types';
import { useLanguage } from '../../contexts/LanguageContext';

interface ComparisonCardsGridProps {
  providers: string[];
  comparisonData: ComparisonData;
}

const ComparisonCardsGrid: React.FC<ComparisonCardsGridProps> = ({ providers, comparisonData }) => {
  const { t } = useLanguage();
  
  // Map provider names to translation keys
  const getProviderName = (provider: string) => {
    return t(`compare.providers.${provider.toLowerCase().replace(/\s+/g, '')}`);
  };
  
  return (
    <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 bg-transparent">
      {providers.map((provider) => (
        <ComparisonCard 
          key={provider} 
          title={getProviderName(provider)} 
          data={comparisonData[provider]}
          highlight={provider === 'Just Launch'}
        />
      ))}
    </div>
  );
};

export default ComparisonCardsGrid;
