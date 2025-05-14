
import React, { useState } from 'react';
import { ComparisonData } from './types';
import { useLanguage } from '../../contexts/LanguageContext';
import MobileComparisonCard from './MobileComparisonCard';
import { categoryIcons, categories } from './comparisonData';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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
        <div className="text-center text-sm text-[#0D503C]/80">
          {t('compare.selectCompetitor')}
        </div>
        <ToggleGroup type="single" value={selectedCompetitor} onValueChange={(value) => value && setSelectedCompetitor(value)}>
          {competitorProviders.map((competitor) => (
            <ToggleGroupItem
              key={competitor}
              value={competitor}
              aria-label={`Compare with ${getProviderName(competitor)}`}
              className="px-3 py-2 text-sm border border-[#0D503C]/20 data-[state=on]:bg-[#0D503C] data-[state=on]:text-[#F5F5E9]"
            >
              {getProviderName(competitor)}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
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
