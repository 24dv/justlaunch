
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { useLanguage } from '../../contexts/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

export type CategoryData = Record<string, React.ReactNode>;

interface ComparisonCardProps {
  title: string;
  data: CategoryData;
  highlight?: boolean;
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({ title, data, highlight = false }) => {
  const { t } = useLanguage();
  
  // Map category names to translation keys
  const getCategoryName = (category: string) => {
    return t(`compare.categories.${category.toLowerCase().replace(/\s+/g, '')}`);
  };

  return (
    <Card className={`mb-6 overflow-hidden transition-all duration-200 shadow-md ${
      highlight 
        ? 'border-2 border-[#0D503C] ring-1 ring-[#0D503C]/10 relative' 
        : 'border border-[#0D503C]/20'
    }`}>
      {highlight && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#F9A7A7] text-[#0D503C] text-xs font-bold py-1 px-3 rounded-full border border-[#0D503C]/20 z-10">
          {t('compare.recommended')}
        </div>
      )}
      <CardHeader className={`pb-3 ${
        highlight 
          ? 'bg-[#0D503C] text-[#F5F5E9]' 
          : 'bg-[#F5F5E9] border-b border-[#0D503C]/10'
      }`}>
        <CardTitle className={`text-xl font-bold text-center font-serif ${
          highlight ? 'text-[#F5F5E9]' : 'text-[#0D503C]'
        }`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {Object.entries(data).map(([category, value], idx) => (
          <div 
            key={category} 
            className={`p-4 ${idx % 2 === 0 ? 'bg-[#F5F5E9]/50' : 'bg-[#F5F5E9]'} ${
              idx !== Object.entries(data).length - 1 ? 'border-b border-[#0D503C]/10' : ''
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#0D503C]/10 text-sm">
                {idx + 1}
              </div>
              <div className="font-medium text-[#0D503C]">{getCategoryName(category)}</div>
            </div>
            <div className={`${highlight ? 'text-[#0D503C] font-medium' : 'text-[#0D503C]/80'} text-sm`}>
              {highlight && typeof value === 'string' ? (
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#0D503C]" />
                  <span>{value}</span>
                </div>
              ) : (
                value
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ComparisonCard;
