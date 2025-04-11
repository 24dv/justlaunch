
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
  
  // Portfolio examples with updated images
  const portfolioItems = [
    {
      id: 1,
      titleKey: "portfolio.holisticSleepCoach",
      imageUrl: "/lovable-uploads/502d0e8e-9649-43a9-abec-773dc3d73382.png",
      link: "https://dodo-coach.lovable.app/"
    },
    {
      id: 2,
      titleKey: "portfolio.artisanalBakery",
      imageUrl: "/lovable-uploads/04237f55-d8d9-4684-bc68-1161ae4a518d.png",
      link: "https://bruud-bakkerij.lovable.app/"
    },
    {
      id: 3,
      titleKey: "portfolio.architecturalPhotography",
      imageUrl: "/lovable-uploads/b6859143-fba0-4e7d-a921-e7b5e9d16d48.png",
      link: "https://degauw-studio.lovable.app/"
    },
    {
      id: 4,
      titleKey: "portfolio.blockchainVentureCapital",
      imageUrl: "/lovable-uploads/2b5fbdee-8788-41bf-8875-72a1f7d701cf.png",
      link: "https://stad-capital.lovable.app/"
    },
    {
      id: 5,
      titleKey: "portfolio.queerCulturePodcast",
      imageUrl: "/lovable-uploads/9628b331-2634-44e2-9f38-ee348b33ff2c.png",
      link: "https://xoxo-gossip-guys.lovable.app/"
    },
    {
      id: 6,
      titleKey: "portfolio.petGroomingService",
      imageUrl: "/lovable-uploads/596a5deb-9318-48a7-a5bb-9c615696d7d6.png",
      link: "https://woof-pet.lovable.app/"
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
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="overflow-hidden border border-[#0D503C]/10 rounded-xl transition-all duration-300 hover:shadow-lg bg-[#0D503C]">
                      <CardContent className="p-0">
                        <AspectRatio ratio={16/9} className="bg-gray-100">
                          <img 
                            src={item.imageUrl} 
                            alt={t(item.titleKey)}
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                            decoding="async"
                            width="100%" 
                            height="auto"
                          />
                        </AspectRatio>
                        <div className="p-3">
                          <h3 className="text-sm font-medium text-[#F5F5E9]">{t(item.titleKey)}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
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
