
import React, { useState } from 'react';
import { ComparisonData } from './types';
import { useLanguage } from '../../contexts/LanguageContext';
import MobileComparisonCard from './MobileComparisonCard';
import { categoryIcons, categories } from './comparisonData';
import CompetitorToggle from './CompetitorToggle';

interface ComparisonCardsGridProps {
  providers: string[];
  comparisonData: ComparisonData;
}

const ComparisonCardsGrid: React.FC<ComparisonCardsGridProps> = ({ providers, comparisonData }) => {
  const { t } = useLanguage();
  
  // Filter out "Just Launch" from providers since we'll show it in every comparison card
  const competitorProviders = providers.filter(provider => provider !== 'Just Launch');
  const justLaunchData = comparisonData['Just Launch'];
  
  // State for selected competitor (default to first competitor)
  const [selectedProvider, setSelectedProvider] = useState(competitorProviders[0]);
  
  // Map provider names to translation keys
  const getProviderName = (provider: string) => {
    return t(`compare.providers.${provider.toLowerCase().replace(/\s+/g, '')}`);
  };

  // Map category names to translation keys
  const getCategoryName = (category: string) => {
    return t(`compare.categories.${category.toLowerCase().replace(/\s+/g, '')}`);
  };
  
  return (
    <div className="lg:hidden mb-12">
      <CompetitorToggle 
        providers={providers}
        selectedProvider={selectedProvider}
        onToggleProvider={setSelectedProvider}
      />
      
      <div className="px-4">
        <MobileComparisonCard 
          mainProvider={getProviderName('Just Launch')}
          comparisonProvider={getProviderName(selectedProvider)}
          justLaunchData={justLaunchData}
          competitorData={comparisonData[selectedProvider]}
          categoryIcons={categoryIcons}
          categories={categories}
          getCategoryName={getCategoryName}
          highlight={true}
        />
      </div>
    </div>
  );
};

export default ComparisonCardsGrid;
