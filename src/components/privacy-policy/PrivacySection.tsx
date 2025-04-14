
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PrivacySectionProps {
  title: string;
  content: string;
  items?: string[];
  icon?: React.ReactNode;
}

const PrivacySection = ({ title, content, items, icon }: PrivacySectionProps) => {
  return (
    <section className="mb-8">
      {icon ? (
        <div className="flex items-center space-x-2 mb-2">
          {icon}
          <h2 className="text-xl font-serif m-0">{title}</h2>
        </div>
      ) : (
        <h2 className="text-xl font-serif mb-3">{title}</h2>
      )}
      
      <p>{content}</p>
      
      {items && items.length > 0 && (
        <ul className="space-y-1">
          {items.map((item, index) => (
            <li key={index} className="text-[#0D503C]/80">{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PrivacySection;
