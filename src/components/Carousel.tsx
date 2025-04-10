
import React from 'react';
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { useIsMobile } from '../hooks/use-mobile';
import PortfolioCarouselHeader from './portfolio/PortfolioCarouselHeader';
import PortfolioItem from './portfolio/PortfolioItem';
import CarouselControls from './portfolio/CarouselControls';
import { portfolioItems } from './portfolio/PortfolioData';

const PortfolioCarousel = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="portfolio" className="section-padding bg-[#F5F5E9] py-16">
      <div className="container mx-auto px-4 md:px-6">
        <PortfolioCarouselHeader />

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
                <PortfolioItem 
                  key={item.id}
                  id={item.id}
                  titleKey={item.titleKey}
                  imageUrl={item.imageUrl}
                />
              ))}
            </CarouselContent>
            <CarouselControls isMobile={isMobile} />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;
