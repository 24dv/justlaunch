
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

interface CarouselControlsProps {
  isMobile: boolean;
}

const CarouselControls = ({ isMobile }: CarouselControlsProps) => {
  return (
    <>
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
    </>
  );
};

export default CarouselControls;
