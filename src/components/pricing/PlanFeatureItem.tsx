
import React from 'react';
import { Check } from 'lucide-react';

interface PlanFeatureItemProps {
  text: string;
}

const PlanFeatureItem = ({ text }: PlanFeatureItemProps) => {
  return (
    <li className="flex items-start">
      <Check className="h-5 w-5 text-[#0D503C] mr-2 flex-shrink-0" />
      <span className="text-[#0D503C]/80">{text}</span>
    </li>
  );
};

export default PlanFeatureItem;
