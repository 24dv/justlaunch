
import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent 
} from '../ui/card';
import { Check, X, Minus } from 'lucide-react';
import { Badge } from '../ui/badge';
import { MobileComparisonCardProps } from './types';
import { cn } from '@/lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';

const MobileComparisonCard: React.FC<MobileComparisonCardProps> = ({
  mainProvider,
  comparisonProvider,
  justLaunchData,
  competitorData,
  categoryIcons,
  categories,
  getCategoryName,
  highlight = false
}) => {
  const { language } = useLanguage();

  // Function to render icon or value
  const renderValue = (value: React.ReactNode) => {
    if (value === true) return <Check className="h-4 w-4 text-green-500" />;
    if (value === false) return <X className="h-4 w-4 text-red-500" />;
    if (value === null || value === undefined) return <Minus className="h-4 w-4 text-gray-400" />;
    
    // If value is a string, check if it contains a newline
    if (typeof value === 'string' && value.includes('\n')) {
      const lines = value.split('\n');
      return (
        <div className="flex flex-col items-center justify-center text-center">
          {lines.map((line, i) => (
            <div key={i} className="text-xs sm:text-sm text-[#0D503C]">{line}</div>
          ))}
        </div>
      );
    }
    
    return <span className="text-xs sm:text-sm text-center text-[#0D503C]">{value}</span>;
  };

  // Function to determine if Just Launch has an advantage
  const hasAdvantage = (category: string): boolean => {
    // Simple comparison for boolean values
    if (justLaunchData[category] === true && competitorData[category] !== true) return true;
    // For other types, we can't automatically determine advantage
    return false;
  };

  // Function to get mobile-friendly category name for Dutch
  const getMobileCategoryName = (category: string): string => {
    const categoryName = getCategoryName(category);
    
    // Only apply to Dutch language and Level of Effort category
    if (language === 'nl' && category === 'Level of Effort' && categoryName === 'Inspanningsniveau') {
      return 'Inspannings-niveau';
    }
    
    return categoryName;
  };

  return (
    <Card className={cn(
      "overflow-hidden bg-[#F5F5E9]",
      highlight ? 'border-[#0D503C] ring-1 ring-[#0D503C]/30' : ''
    )}>
      <CardHeader className={cn(
        "py-1.5 px-2",
        highlight ? 'bg-[#0D503C] text-[#F5F5E9]' : 'bg-[#0D503C]/5'
      )}>
        <div className="grid grid-cols-3 gap-1">
          <div className="text-left">
            <CardTitle className="text-xs font-bold">
              Category
            </CardTitle>
          </div>
          <div className="text-center border-l border-[#F5F5E9]/30">
            <CardTitle className="text-xs font-bold">
              {mainProvider}
            </CardTitle>
          </div>
          <div className="text-center border-l border-[#F5F5E9]/30">
            <CardTitle className="text-xs font-bold">
              {comparisonProvider}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="grid grid-cols-1 divide-y divide-[#0D503C]/10">
          {categories.map((category, idx) => (
            <div 
              key={category} 
              className={`${idx % 2 === 0 ? 'bg-[#F5F5E9]' : 'bg-[#0D503C]/5'}`}
            >
              <div className="grid grid-cols-3 divide-x divide-[#0D503C]/10">
                {/* Category Column */}
                <div className="p-1.5 text-left flex items-center">
                  <span className="line-clamp-2 text-xs font-bold text-[#0D503C]">{getMobileCategoryName(category)}</span>
                  {hasAdvantage(category) && (
                    <Badge className="ml-1 mt-0 text-[0.6rem] py-0 px-1 h-4 bg-[#F2FCE2] text-[#0D503C] border border-[#0D503C]/20">
                      Advantage
                    </Badge>
                  )}
                </div>
                
                {/* Just Launch Side */}
                <div className={cn(
                  "p-1.5 flex items-center justify-center", 
                  hasAdvantage(category) ? "bg-[#F2FCE2]/50" : ""
                )}>
                  <div className="flex items-center justify-center w-full h-full">
                    {renderValue(justLaunchData[category])}
                  </div>
                </div>
                
                {/* Competitor Side */}
                <div className="p-1.5 flex items-center justify-center">
                  <div className="flex items-center justify-center w-full h-full">
                    {renderValue(competitorData[category])}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MobileComparisonCard;
