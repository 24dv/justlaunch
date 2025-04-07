
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '../hooks/use-mobile';

const PortfolioCarousel = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  // Portfolio examples with real data
  const portfolioItems = [
    {
      id: 1,
      title: "Holistic Sleep Coach",
      imageUrl: "/justlaunch/lovable-uploads/458a9e6b-36c1-4384-aa2d-b789580a2c39.png"
    },
    {
      id: 2,
      title: "Pet Grooming Service",
      imageUrl: "/justlaunch/lovable-uploads/186758bc-37e5-4c1d-ae7c-ad30dd8ea217.png"
    },
    {
      id: 3,
      title: "Corporate Website",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Product Launch",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Brand Identity",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Social Media Campaign",
      imageUrl: "/lovable-uploads/2d922fc8-97a4-412e-b125-f30c43a4641f.png"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-[#F5F5E9] py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-[#0D503C] mb-4">
            {t('carousel.title')}
          </h2>
          <p className="text-xl text-[#0D503C]/80 max-w-2xl mx-auto">
            {t('carousel.subtitle')}
          </p>
          <div className="w-24 h-1 bg-[#F9A7A7] mx-auto mt-6" />
        </div>

        <div className="relative px-2 sm:px-6 md:px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-6">
              {portfolioItems.map((item) => (
                <CarouselItem 
                  key={item.id} 
                  className="pl-2 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/2"
                >
                  <Card className="overflow-hidden border border-[#0D503C]/10 rounded-xl transition-all duration-300 hover:shadow-lg bg-[#0D503C]">
                    <CardContent className="p-0">
                      <AspectRatio ratio={16/9} className="bg-gray-100">
                        <img 
                          src={item.imageUrl} 
                          alt={item.title}
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                          loading="lazy"
                        />
                      </AspectRatio>
                      <div className="p-3">
                        <h3 className="text-sm font-medium text-[#F5F5E9]">{item.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className={`${isMobile ? 'left-0' : '-left-4 md:-left-8'} bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0D503C]/90 border-none absolute`}
            >
              <ArrowLeft className="h-4 w-4" />
            </CarouselPrevious>
            <CarouselNext 
              className={`${isMobile ? 'right-0' : '-right-4 md:-right-8'} bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0D503C]/90 border-none absolute`}
            >
              <ArrowRight className="h-4 w-4" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;
