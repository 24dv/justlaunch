
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
  
  // Sort providers to put 'Just Launch' first
  const sortedProviders = [...providers].sort((a, b) => {
    if (a === 'Just Launch') return -1;
    if (b === 'Just Launch') return 1;
    return 0;
  });
  
  return (
    <div className="lg:hidden mb-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
        <div className="w-full md:w-auto md:flex-1 max-w-lg mx-auto">
          <ComparisonCard 
            key="Just Launch" 
            title={getProviderName('Just Launch')} 
            data={comparisonData['Just Launch']}
            highlight={true}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full md:flex-[2]">
          {sortedProviders.filter(provider => provider !== 'Just Launch').map((provider) => (
            <ComparisonCard 
              key={provider} 
              title={getProviderName(provider)} 
              data={comparisonData[provider]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonCardsGrid;
