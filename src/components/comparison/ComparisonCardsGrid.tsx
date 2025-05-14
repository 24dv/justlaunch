
import React, { useState } from 'react';
import { ComparisonData } from './types';
import { useLanguage } from '../../contexts/LanguageContext';
import MobileComparisonCard from './MobileComparisonCard';
import { categoryIcons, categories } from './comparisonData';

interface ComparisonCardsGridProps {
  providers: string[];
  comparisonData: ComparisonData;
}

const ComparisonCardsGrid: React.FC<ComparisonCardsGridProps> = ({ providers, comparisonData }) => {
  const { t } = useLanguage();
  // Filter out "Just Launch" from providers since we'll show it in every comparison card
  const competitorProviders = providers.filter(provider => provider !== 'Just Launch');
  const justLaunchData = comparisonData['Just Launch'];
  
  // State for the selected competitor (default to first competitor)
  const [selectedCompetitor, setSelectedCompetitor] = useState(competitorProviders[0]);
  
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
      {/* Toggle group for competitor selection */}
      <div className="flex flex-col items-center mb-4 space-y-4">
        <div className="inline-flex p-1 rounded-lg bg-[#0D503C]/10 border border-[#0D503C]/30">
          {competitorProviders.map((competitor) => (
            <button
              key={competitor}
              onClick={() => setSelectedCompetitor(competitor)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedCompetitor === competitor
                  ? 'bg-[#0D503C] text-[#F5F5E9] shadow-md'
                  : 'text-[#0D503C] hover:bg-[#0D503C]/10'
              }`}
            >
              {getProviderName(competitor)}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Card */}
      <div className="p-1">
        <MobileComparisonCard 
          mainProvider={getProviderName('Just Launch')}
          comparisonProvider={getProviderName(selectedCompetitor)}
          justLaunchData={justLaunchData}
          competitorData={comparisonData[selectedCompetitor]}
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
