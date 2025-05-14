
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { useLanguage } from '../../contexts/LanguageContext';
import { Check, X, Minus, ArrowRight, Trophy } from 'lucide-react';
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

  return (
    <Card className={`overflow-hidden transition-all duration-200 shadow-md bg-[#F5F5E9] ${highlight ? 'border-[#0D503C] ring-1 ring-[#0D503C]/30' : ''}`}>
      <CardHeader className={`pb-3 ${highlight ? 'bg-[#0D503C] text-[#F5F5E9]' : 'bg-[#0D503C]/5'}`}>
        <CardTitle className="text-lg font-bold text-center">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="p-0">
        {allCategories.map((category, idx) => (
          <div 
            key={category} 
            className={`${idx % 2 === 0 ? 'bg-[#F5F5E9]' : 'bg-[#0D503C]/5'} border-b border-[#0D503C]/10 last:border-b-0`}
          >
            <div className="p-3 font-medium border-b border-[#0D503C]/10 flex items-center justify-center">
              <div className="flex items-center gap-2">
                {categoryIcons[category]}
                <span>{getCategoryName(category)}</span>
              </div>
              {hasAdvantage(category) && (
                <span className="text-xs px-2 py-1 rounded-full bg-[#0D503C]/10 text-[#0D503C] font-medium ml-2">
                  {t('compare.advantage')}
                </span>
              )}
            </div>
            <div className="p-4">
              <div className="flex flex-col gap-3">
                <div className={`p-3 rounded ${hasAdvantage(category) ? 'bg-[#0D503C]/10 border border-[#0D503C]/20' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-[#0D503C] text-center w-1/2">{mainProvider}</div>
                    <div className="flex justify-center items-center text-center w-1/2">
                      {renderValue(justLaunchData[category])}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center my-1">
                  <div className="w-px h-6 bg-[#0D503C]/20"></div>
                </div>
                
                <div className={`p-3 rounded ${!hasAdvantage(category) && competitorData[category] !== justLaunchData[category] ? 'bg-[#0D503C]/5' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-[#0D503C]/80 text-center w-1/2">{comparisonProvider}</div>
                    <div className="flex justify-center items-center text-center w-1/2">
                      {renderValue(competitorData[category])}
                    </div>
                  </div>
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
