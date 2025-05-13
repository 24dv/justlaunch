
import React from 'react';
import { ComparisonData } from './types';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
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
      <div className="text-center mb-6 text-sm text-[#0D503C]/70">
        <p>{t('compare.mobileInstructions') || 'Swipe to compare Just Launch with alternatives'}</p>
      </div>

      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {competitorProviders.map((competitorProvider, index) => (
            <CarouselItem key={competitorProvider} className="basis-full">
              <div className="p-1">
                <MobileComparisonCard 
                  mainProvider={getProviderName('Just Launch')}
                  comparisonProvider={getProviderName(competitorProvider)}
                  justLaunchData={justLaunchData}
                  competitorData={comparisonData[competitorProvider]}
                  categoryIcons={categoryIcons}
                  categories={categories}
                  getCategoryName={getCategoryName}
                  highlight={true}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 gap-2">
          <CarouselPrevious className="relative static transform-none translate-y-0 mx-2 bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0D503C]/80 border-none" />
          <CarouselNext className="relative static transform-none translate-y-0 mx-2 bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0D503C]/80 border-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default ComparisonCardsGrid;
