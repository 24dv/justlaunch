
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

  // Reorder providers to put Just Launch first
  const orderedProviders = [...providers].sort((a, b) => {
    if (a === 'Just Launch') return -1;
    if (b === 'Just Launch') return 1;
    return 0;
  });
  
  return (
    <div className="lg:hidden space-y-8 mb-12">
      {/* First show Just Launch card prominently */}
      {orderedProviders.map((provider) => (
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
