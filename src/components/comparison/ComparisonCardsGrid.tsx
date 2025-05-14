
import React, { useState, useEffect, useRef } from 'react';
import { ComparisonData } from './types';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import MobileComparisonCard from './MobileComparisonCard';
import { categoryIcons, categories } from './comparisonData';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ComparisonCardsGridProps {
  providers: string[];
  comparisonData: ComparisonData;
}

const ComparisonCardsGrid: React.FC<ComparisonCardsGridProps> = ({ providers, comparisonData }) => {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const swipeHintTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
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

  useEffect(() => {
    if (!api) return;
    
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
      // Hide swipe hint when user interacts with carousel
      setShowSwipeHint(false);
      if (swipeHintTimerRef.current) {
        clearTimeout(swipeHintTimerRef.current);
      }
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
      if (swipeHintTimerRef.current) {
        clearTimeout(swipeHintTimerRef.current);
      }
    };
  }, [api]);

  // Auto-hide swipe hint after 4 seconds
  useEffect(() => {
    if (showSwipeHint) {
      swipeHintTimerRef.current = setTimeout(() => {
        setShowSwipeHint(false);
      }, 4000);
    }
    
    return () => {
      if (swipeHintTimerRef.current) {
        clearTimeout(swipeHintTimerRef.current);
      }
    };
  }, [showSwipeHint]);
  
  return (
    <div className="lg:hidden mb-12">
      <div className="relative">
        {/* Swipe hint animation overlay */}
        {showSwipeHint && (
          <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
            <div className="bg-[#0D503C]/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 animate-pulse">
              <ChevronLeft className="h-5 w-5 text-[#0D503C]" />
              <span className="text-sm font-medium text-[#0D503C]">{t('compare.swipe')}</span>
              <ChevronRight className="h-5 w-5 text-[#0D503C]" />
            </div>
          </div>
        )}

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          setApi={setApi}
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
          
          {/* Improved navigation arrows - larger, semi-transparent */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="flex items-center justify-between h-full px-1 pointer-events-none">
              <CarouselPrevious className="relative pointer-events-auto h-10 w-10 bg-[#0D503C]/80 text-[#F5F5E9] hover:bg-[#0D503C] border-none shadow-md backdrop-blur-sm" />
              <CarouselNext className="relative pointer-events-auto h-10 w-10 bg-[#0D503C]/80 text-[#F5F5E9] hover:bg-[#0D503C] border-none shadow-md backdrop-blur-sm" />
            </div>
          </div>
          
          {/* Pagination indicators */}
          <div className="flex justify-center gap-1 mt-4">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-all",
                  current === i 
                    ? "bg-[#0D503C] w-5" 
                    : "bg-[#0D503C]/40 hover:bg-[#0D503C]/60"
                )}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ComparisonCardsGrid;
