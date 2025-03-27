
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
  
  // Portfolio examples - to be replaced with actual data
  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Redesign",
      description: "Complete brand refresh for an established online retailer",
      imageUrl: "/placeholder.svg",
      type: "image"
    },
    {
      id: 2,
      title: "Mobile App UI",
      description: "Intuitive interface for a fitness tracking application",
      imageUrl: "/placeholder.svg",
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
            <CarouselContent className="-ml-2 md:-ml-4">
              {portfolioItems.map((item) => (
                <CarouselItem 
                  key={item.id} 
                  className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <Card className="overflow-hidden border border-[#0D503C]/10 rounded-xl transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-0">
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={item.imageUrl} 
                          alt={item.title}
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                        {item.type === "video" && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                              <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-[#0D503C] ml-1"></div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-[#0D503C]">{item.title}</h3>
                        <p className="text-sm text-[#0D503C]/70 mt-1">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className="left-0 bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0D503C]/90 border-none"
              icon={<ArrowLeft className="h-4 w-4" />}
            />
            <CarouselNext 
              className="right-0 bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0D503C]/90 border-none"
              icon={<ArrowRight className="h-4 w-4" />}
            />
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
