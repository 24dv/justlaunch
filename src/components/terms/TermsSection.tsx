
import React from 'react';

interface TermsSectionProps {
  title: string;
  content: string;
  icon?: React.ReactNode;
}

const TermsSection = ({ title, content, icon }: TermsSectionProps) => {
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
    </section>
  );
};

export default TermsSection;
