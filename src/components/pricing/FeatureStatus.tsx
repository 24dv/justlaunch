
import React from 'react';
import { Check, Minus } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

interface FeatureStatusProps {
  isIncluded: boolean;
}

const FeatureStatus = ({ isIncluded }: FeatureStatusProps) => {
  const isMobile = useIsMobile();
  const iconSize = isMobile ? 3 : 4;
  const containerSize = isMobile ? 6 : 8;
  
  return isIncluded ? (
    <div className="mx-auto flex justify-center">
      <div className={`bg-[#0D503C]/10 rounded-full p-1 w-${containerSize} h-${containerSize} flex items-center justify-center`}>
        <Check className={`h-${iconSize} w-${iconSize} text-[#0D503C]`} />
      </div>
    </div>
  ) : (
    <div className="mx-auto flex justify-center">
      <div className={`rounded-full p-1 w-${containerSize} h-${containerSize} flex items-center justify-center`}>
        <Minus className={`h-${iconSize} w-${iconSize} text-[#8E9196]`} />
      </div>
    </div>
  );
};

export default FeatureStatus;
