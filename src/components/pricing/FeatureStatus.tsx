
import React from 'react';
import { Check, Minus } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

interface FeatureStatusProps {
  isIncluded: boolean;
}

const FeatureStatus = ({ isIncluded }: FeatureStatusProps) => {
  const isMobile = useIsMobile();
  
  return isIncluded ? (
    <div className="mx-auto flex justify-center">
      <div className={`bg-[#0D503C]/10 rounded-full flex items-center justify-center ${isMobile ? 'w-6 h-6 p-1' : 'w-8 h-8 p-1'}`}>
        <Check className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'} text-[#0D503C]`} />
      </div>
    </div>
  ) : (
    <div className="mx-auto flex justify-center">
      <div className={`rounded-full flex items-center justify-center ${isMobile ? 'w-6 h-6 p-1' : 'w-8 h-8 p-1'}`}>
        <Minus className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'} text-[#8E9196]`} />
      </div>
    </div>
  );
};

export default FeatureStatus;
