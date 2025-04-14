
import React from 'react';
import { Users } from 'lucide-react';

interface PrivacyDataCollectionProps {
  title: string;
  content: string;
  items: string[];
}

const PrivacyDataCollection = ({ title, content, items }: PrivacyDataCollectionProps) => {
  return (
    <section className="mb-8">
      <div className="flex items-center space-x-2 mb-2">
        <Users size={20} className="text-[#0D503C]" />
        <h2 className="text-xl font-serif m-0">{title}</h2>
      </div>
      <p>{content}</p>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index} className="text-[#0D503C]/80">{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default PrivacyDataCollection;
