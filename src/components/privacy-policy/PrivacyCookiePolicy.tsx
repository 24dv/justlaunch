
import React from 'react';
import { Shield } from 'lucide-react';

interface CookieCategory {
  name: string;
  description: string;
}

interface PrivacyCookiePolicyProps {
  title: string;
  content: string;
  categories: CookieCategory[];
  management: string;
}

const PrivacyCookiePolicy = ({ title, content, categories, management }: PrivacyCookiePolicyProps) => {
  return (
    <section className="mb-8">
      <div className="flex items-center space-x-2 mb-2">
        <Shield size={20} className="text-[#0D503C]" />
        <h2 className="text-xl font-serif m-0">{title}</h2>
      </div>
      <p>{content}</p>
      <div className="space-y-4 mt-4">
        {categories.map((category, index) => (
          <div key={index} className="bg-[#0D503C]/5 rounded-lg p-4">
            <h3 className="text-lg font-medium text-[#0D503C] mb-2">{category.name}</h3>
            <p className="text-sm text-[#0D503C]/80">{category.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-4">{management}</p>
    </section>
  );
};

export default PrivacyCookiePolicy;
