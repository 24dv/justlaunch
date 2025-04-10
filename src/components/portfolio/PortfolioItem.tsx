
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";

interface PortfolioItemProps {
  id: number;
  titleKey: string;
  imageUrl: string;
}

const PortfolioItem = ({ id, titleKey, imageUrl }: PortfolioItemProps) => {
  const { t } = useLanguage();

  return (
    <CarouselItem 
      key={id} 
      className="pl-2 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/2"
    >
      <Card className="overflow-hidden border border-[#0D503C]/10 rounded-xl transition-all duration-300 hover:shadow-lg bg-[#0D503C]">
        <CardContent className="p-0">
          <AspectRatio ratio={16/9} className="bg-gray-100">
            <img 
              src={imageUrl} 
              alt={t(titleKey)}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              loading="lazy"
              decoding="async"
              width="100%" 
              height="auto"
            />
          </AspectRatio>
          <div className="p-3">
            <h3 className="text-sm font-medium text-[#F5F5E9]">{t(titleKey)}</h3>
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default PortfolioItem;
