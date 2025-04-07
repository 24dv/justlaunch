
import React from 'react';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItemProps {
  question: string;
  answer: string;
  value: string;
}

const FaqItem = ({ question, answer, value }: FaqItemProps) => {
  return (
    <AccordionItem 
      value={value} 
      className="border-b last:border-b-0 bg-[#F5F5E9]"
    >
      <AccordionTrigger className="p-5 text-lg font-medium text-[#0D503C] font-serif hover:text-[#0D503C]/80 hover:no-underline text-left sm:text-center">
        {question}
      </AccordionTrigger>
      <AccordionContent className="px-5 pb-5 pt-0 text-base text-[#0D503C]/80 text-left">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqItem;
