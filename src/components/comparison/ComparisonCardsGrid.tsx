
import React from 'react';
import ComparisonCard from './ComparisonCard';
import { ComparisonData } from './types';

interface ComparisonCardsGridProps {
  providers: string[];
  comparisonData: ComparisonData;
}

const ComparisonCardsGrid: React.FC<ComparisonCardsGridProps> = ({ providers, comparisonData }) => {
  return (
    <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {providers.map((provider, index) => (
        <ComparisonCard 
          key={provider} 
          title={provider} 
          data={comparisonData[provider]}
          highlight={provider === 'Just Launch'}
        />
      ))}
    </div>
  );
};

export default ComparisonCardsGrid;
