
import React from 'react';
import { Accordion } from "@/components/ui/accordion";
import FaqItem from './FaqItem';

export interface FaqItemType {
  question: string;
  answer: string;
}

interface FaqListProps {
  items: FaqItemType[];
}

const FaqList = ({ items }: FaqListProps) => {
  return (
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="border-2 border-[#0D503C] rounded-xl overflow-hidden divide-y-2 divide-[#0D503C]/30">
        {items.map((item, index) => (
          <FaqItem 
            key={index} 
            question={item.question}
            answer={item.answer}
            value={`item-${index}`}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default FaqList;
