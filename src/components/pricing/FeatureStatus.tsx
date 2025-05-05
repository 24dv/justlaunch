
import React from 'react';
import { Check, Minus } from 'lucide-react';

interface FeatureStatusProps {
  isIncluded: boolean;
}

const FeatureStatus = ({ isIncluded }: FeatureStatusProps) => {
  return isIncluded ? (
    <div className="flex justify-center">
      <div className="bg-[#0D503C]/10 rounded-full p-1 w-8 h-8 flex items-center justify-center">
        <Check className="h-4 w-4 text-[#0D503C]" />
      </div>
    </div>
  ) : (
    <div className="flex justify-center">
      <div className="rounded-full p-1 w-8 h-8 flex items-center justify-center">
        <Minus className="h-4 w-4 text-[#8E9196]" />
      </div>
    </div>
  );
};

export default FeatureStatus;
