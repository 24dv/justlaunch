
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

const PortfolioCarousel = () => {
  const { t } = useLanguage();
  
  // Portfolio examples with real data
  const portfolioItems = [
    {
      id: 1,
      title: "Dodo - Baby Sleep Coach",
      description: "Holistic sleep coaching brand with website design",
      imageUrl: "/lovable-uploads/1e87504e-ba1a-48e1-a92f-deddf20b0bec.png",
      type: "image"
    },
    {
      id: 2,
      title: "Woof - Pet Grooming Service",
      description: "Premium pet grooming brand with logo and website",
      imageUrl: "/lovable-uploads/83263d20-fe62-4e97-828a-c73a0f1286d2.png",
      type: "image"
    },
    {
      id: 3,
      title: "Corporate Website",
      description: "Modern web presence for a financial consulting firm",
      imageUrl: "/placeholder.svg",
      type: "image"
    },
    {
      id: 4,
      title: "Product Launch Video",
      description: "Promotional content for a tech startup's flagship product",
      imageUrl: "/placeholder.svg",
      type: "video"
    },
    {
      id: 5,
      title: "Brand Identity",
      description: "Complete visual identity for an eco-friendly cosmetics line",
      imageUrl: "/placeholder.svg",
      type: "image"
    },
    {
      id: 6,
      title: "Social Media Campaign",
      description: "Engaging content strategy across multiple platforms",
      imageUrl: "/lovable-uploads/2d922fc8-97a4-412e-b125-f30c43a4641f.png",
      type: "image"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-[#F5F5E9] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-[#0D503C] mb-4">
            {t('carousel.title')}
          </h2>
          <p className="text-xl text-[#0D503C]/80 max-w-2xl mx-auto">
            {t('carousel.subtitle')}
          </p>
          <div className="w-24 h-1 bg-[#F9A7A7] mx-auto mt-6" />
        </div>

        <div className="relative px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {portfolioItems.map((item) => (
                <CarouselItem 
                  key={item.id} 
                  className="pl-4 md:pl-6 sm:basis-1/1 md:basis-1/2 lg:basis-1/2"
                >
                  <Card className="overflow-hidden border border-[#0D503C]/10 rounded-xl transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-0">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img 
                          src={item.imageUrl} 
                          alt={item.title}
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                        {item.type === "video" && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                              <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-[#0D503C] ml-1"></div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-semibold text-[#0D503C]">{item.title}</h3>
                        <p className="text-md text-[#0D503C]/70 mt-2">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className="left-0 bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0D503C]/90 border-none"
            >
              <ArrowLeft className="h-4 w-4" />
            </CarouselPrevious>
            <CarouselNext 
              className="right-0 bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0D503C]/90 border-none"
            >
              <ArrowRight className="h-4 w-4" />
            </CarouselNext>
          </Carousel>
        </div>

        <div className="text-center mt-10">
          <p className="text-[#0D503C]/80 italic">
            {t('carousel.viewMore')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;
