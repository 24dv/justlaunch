
import React from 'react';
import MobileComparisonCard from './MobileComparisonCard';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { useLanguage } from '../../contexts/LanguageContext';

interface ComparisonCardsGridProps {
  providers: string[];
  comparisonData: Record<string, any>;
}

const ComparisonCardsGrid: React.FC<ComparisonCardsGridProps> = ({ 
  providers, 
  comparisonData 
}) => {
  const { t } = useLanguage();
  
  // Separate Just Launch from other providers
  const justLaunchData = comparisonData['Just Launch'] || {};
  const competitorProviders = providers.filter(provider => provider !== 'Just Launch');
  
  // Functions to get translated provider and category names
  const getProviderName = (provider: string) => {
    return t(`compare.providers.${provider.toLowerCase().replace(' ', '')}`) || provider;
  };
  
  const getCategoryName = (category: string) => {
    return t(`compare.categories.${category.toLowerCase()}`) || category;
  };
  
  // Get categories from comparisonData structure
  const categories = Object.keys(justLaunchData);
  const categoryIcons = {} as Record<string, React.ReactNode>;
  
  return (
    <div className="md:hidden mt-8">
      <div className="text-center mb-4 text-sm text-[#0D503C]/70">
        <p>{t('compare.mobileInstructions') || 'Swipe to compare Just Launch with alternatives'}</p>
      </div>

      <div className="relative">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0D503C]/80 border-none" />
          
          <CarouselContent>
            {competitorProviders.map((competitorProvider) => (
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
          
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0D503C]/80 border-none" />
        </Carousel>
      </div>
    </div>
  );
};

export default ComparisonCardsGrid;
