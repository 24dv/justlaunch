
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
    // For other types, we can't automatically determine advantage
    return false;
  };

  return (
    <Card className={cn(
      "overflow-hidden bg-[#F5F5E9]",
      highlight ? 'border-[#0D503C] ring-1 ring-[#0D503C]/30' : ''
    )}>
      <CardHeader className={cn(
        "py-3",
        highlight ? 'bg-[#0D503C] text-[#F5F5E9]' : 'bg-[#0D503C]/5'
      )}>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-center">
            <CardTitle className="text-lg font-bold font-serif">
              {mainProvider}
            </CardTitle>
          </div>
          <div className="text-center border-l border-[#F5F5E9]/30">
            <CardTitle className="text-lg font-bold font-serif">
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
              <div className="p-3 font-medium text-center border-b border-[#0D503C]/10 flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 text-base justify-center">
                  {categoryIcons[category]}
                  <span>{getCategoryName(category)}</span>
                </div>
                {hasAdvantage(category) && (
                  <Badge className="text-xs bg-[#F2FCE2] text-[#0D503C] border border-[#0D503C]/20">
                    Advantage
                  </Badge>
                )}
              </div>
              
              <div className="grid grid-cols-2 divide-x divide-[#0D503C]/10">
                {/* Just Launch Side */}
                <div className={cn(
                  "p-3 flex flex-col items-center justify-center text-center", 
                  hasAdvantage(category) ? "bg-[#F2FCE2]/50" : ""
                )}>
                  <div className="flex justify-center">
                    {renderValue(justLaunchData[category])}
                  </div>
                </div>
                
                {/* Competitor Side */}
                <div className="p-3 flex flex-col items-center justify-center text-center">
                  <div className="flex justify-center">
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
