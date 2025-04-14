
import React from 'react';
import { Info } from 'lucide-react';

interface PrivacyIntroductionProps {
  title: string;
  content: string;
}

const PrivacyIntroduction = ({ title, content }: PrivacyIntroductionProps) => {
  return (
    <section className="mb-8">
      <div className="flex items-center space-x-2 mb-2">
        <Info size={20} className="text-[#0D503C]" />
        <h2 className="text-xl font-serif m-0">{title}</h2>
      </div>
      <p>{content}</p>
    </section>
  );
};

export default PrivacyIntroduction;
