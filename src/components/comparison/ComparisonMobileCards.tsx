
import React from 'react';
import { ComparisonData } from './types';
import ComparisonCard from './ComparisonCard';

interface ComparisonMobileCardsProps {
  comparisonData: ComparisonData;
  providers: string[];
  highlightProvider: string;
}

const ComparisonMobileCards: React.FC<ComparisonMobileCardsProps> = ({ 
  comparisonData, 
  providers,
  highlightProvider
}) => {
  return (
    <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {providers.map(provider => (
        <ComparisonCard 
          key={provider} 
          title={provider} 
          data={comparisonData[provider]}
          highlight={provider === highlightProvider}
        />
      ))}
    </div>
  );
};

export default ComparisonMobileCards;
