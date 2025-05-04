
import React from 'react';
import { Check } from 'lucide-react';

interface PlanFeatureItemProps {
  text: string;
  isBold?: boolean;
  inversed?: boolean;
}

const PlanFeatureItem = ({ text, isBold = false, inversed = false }: PlanFeatureItemProps) => {
  return (
    <li className="flex items-start">
      <Check className={`h-5 w-5 mr-2 flex-shrink-0 ${inversed ? 'text-[#F5F5E9]' : 'text-[#0D503C]'}`} />
      <span className={`${inversed ? 'text-[#F5F5E9]/80' : 'text-[#0D503C]/80'} ${isBold ? 'font-bold' : ''}`}>
        {text}
      </span>
    </li>
  );
};

export default PlanFeatureItem;
