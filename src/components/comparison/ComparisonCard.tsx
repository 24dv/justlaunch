
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { useLanguage } from '../../contexts/LanguageContext';
import { Check, X, Minus, ArrowRight } from 'lucide-react';
import { categoryIcons } from './comparisonData';

export type CategoryData = Record<string, React.ReactNode>;

interface ComparisonCardProps {
  title: string;
  mainProvider: string;
  comparisonProvider: string;
  justLaunchData: CategoryData;
  competitorData: CategoryData;
  highlight?: boolean;
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({ 
  title, 
  mainProvider, 
  comparisonProvider,
  justLaunchData, 
  competitorData, 
  highlight = false 
}) => {
  const { t } = useLanguage();
  
  // Map category names to translation keys
  const getCategoryName = (category: string) => {
    return t(`compare.categories.${category.toLowerCase().replace(/\s+/g, '')}`);
  };

  // Function to render icon or value
  const renderValue = (value: React.ReactNode) => {
    if (value === true) return <Check className="h-5 w-5 text-green-500" />;
    if (value === false) return <X className="h-5 w-5 text-red-500" />;
    if (value === null || value === undefined) return <Minus className="h-5 w-5 text-gray-400" />;
    return value;
  };

  // Function to determine if Just Launch has an advantage
  const hasAdvantage = (category: string): boolean => {
    // Simple comparison for boolean values
    if (justLaunchData[category] === true && competitorData[category] !== true) return true;
    if (justLaunchData[category] === false && competitorData[category] === true) return false;
    
    // For other types, we can't automatically determine advantage
    return false;
  };

  // Get all categories from both providers
  const allCategories = [...new Set([
    ...Object.keys(justLaunchData),
    ...Object.keys(competitorData)
  ])];

  // Provider display names for column headers
  const getProviderDisplayName = (provider: string) => {
    return t(`compare.providers.${provider.toLowerCase().replace(/\s+/g, '')}`);
  };

  return (
    <Card className={`overflow-hidden transition-all duration-200 shadow-md bg-[#F5F5E9] ${highlight ? 'border-[#0D503C] ring-1 ring-[#0D503C]/30' : ''}`}>
      <CardHeader className={`pb-3 ${highlight ? 'bg-[#0D503C] text-[#F5F5E9]' : 'bg-[#0D503C]/5'}`}>
        <CardTitle className="text-lg font-bold text-center">{title}</CardTitle>
        
        {/* Column headers */}
        <div className="flex justify-between mt-2 text-sm font-medium">
          <div className="flex-1 text-center">{getProviderDisplayName(mainProvider)}</div>
          <div className="w-6 flex items-center justify-center">
            <ArrowRight className="h-4 w-4" />
          </div>
          <div className="flex-1 text-center">{getProviderDisplayName(comparisonProvider)}</div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        {allCategories.map((category, idx) => (
          <div 
            key={category} 
            className={`${idx % 2 === 0 ? 'bg-[#F5F5E9]' : 'bg-[#0D503C]/5'} border-b border-[#0D503C]/10 last:border-b-0`}
          >
            <div className="p-3 font-medium border-b border-[#0D503C]/10 flex items-center gap-2">
              {categoryIcons[category]}
              {getCategoryName(category)}
            </div>
            <div className="grid grid-cols-2">
              <div className={`p-3 border-r border-[#0D503C]/10 ${hasAdvantage(category) ? 'bg-[#0D503C]/10' : ''}`}>
                <div className="flex justify-center items-center h-full">
                  {renderValue(justLaunchData[category])}
                </div>
              </div>
              <div className={`p-3 ${!hasAdvantage(category) && competitorData[category] !== justLaunchData[category] ? 'bg-[#0D503C]/5' : ''}`}>
                <div className="flex justify-center items-center h-full">
                  {renderValue(competitorData[category])}
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ComparisonCard;
