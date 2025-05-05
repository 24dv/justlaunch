
import React from 'react';
import { Check, Minus } from 'lucide-react';

interface FeatureStatusProps {
  isIncluded: boolean;
}

const FeatureStatus = ({ isIncluded }: FeatureStatusProps) => {
  return isIncluded ? (
    <div className="mx-auto flex justify-center">
      <div className="bg-[#0D503C]/10 rounded-full p-1 w-7 h-7 flex items-center justify-center">
        <Check className="h-3.5 w-3.5 text-[#0D503C]" />
      </div>
    </div>
  ) : (
    <div className="mx-auto flex justify-center">
      <div className="rounded-full p-1 w-7 h-7 flex items-center justify-center">
        <Minus className="h-3.5 w-3.5 text-[#8E9196]" />
      </div>
    </div>
  );
};

export default FeatureStatus;
