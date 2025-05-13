
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
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full relative"
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
        
        {/* Enhanced visibility for carousel navigation buttons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="flex items-center justify-between h-full px-1 pointer-events-none">
            <CarouselPrevious className="relative pointer-events-auto bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0D503C]/80 border-none shadow-md" />
            <CarouselNext className="relative pointer-events-auto bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0D503C]/80 border-none shadow-md" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default ComparisonCardsGrid;

