
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
  
  // Filter out "Just Launch" from providers since we'll show it in every comparison card
  const competitorProviders = providers.filter(provider => provider !== 'Just Launch');
  const justLaunchData = comparisonData['Just Launch'];
  
  // Map provider names to translation keys
  const getProviderName = (provider: string) => {
    return t(`compare.providers.${provider.toLowerCase().replace(/\s+/g, '')}`);
  };
  
  return (
    <div className="lg:hidden flex flex-col gap-8 mb-12">
      {competitorProviders.map((competitorProvider) => (
        <div key={competitorProvider} className="card-animation">
          <ComparisonCard 
            title={`${getProviderName('Just Launch')} vs ${getProviderName(competitorProvider)}`}
            mainProvider="Just Launch"
            comparisonProvider={competitorProvider}
            justLaunchData={justLaunchData}
            competitorData={comparisonData[competitorProvider]}
            highlight={true}
          />
        </div>
      ))}
    </div>
  );
};

export default ComparisonCardsGrid;
