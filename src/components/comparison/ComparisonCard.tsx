
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { useLanguage } from '../../contexts/LanguageContext';
import { Check } from 'lucide-react';

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
    <Card className={`mb-6 overflow-hidden transition-all duration-200 shadow-lg ${
      highlight 
        ? 'border-[#0D503C] ring-2 ring-[#0D503C]/20 scale-105 relative z-10' 
        : 'border-[#0D503C]/20'
    }`}>
      {highlight && (
        <div className="absolute top-0 right-0 -mt-1 -mr-1 z-20">
          <div className="bg-[#F9A7A7] text-[#0D503C] text-xs font-bold px-2 py-0.5 rounded-bl-lg rounded-tr-lg">
            {t('compare.recommended')}
          </div>
        </div>
      )}
      <CardHeader className={`pb-3 ${highlight ? 'bg-[#0D503C]' : 'bg-[#0D503C]/5'}`}>
        <CardTitle className={`text-xl font-serif font-bold text-center ${highlight ? 'text-[#F5F5E9]' : 'text-[#0D503C]'}`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {Object.entries(data).map(([category, value], idx) => (
          <div 
            key={category} 
            className={`py-4 px-5 ${
              idx !== Object.entries(data).length - 1 ? 'border-b border-[#0D503C]/10' : ''
            } ${
              highlight ? 'bg-[#0D503C]/5' : idx % 2 === 0 ? 'bg-[#F5F5E9]' : 'bg-[#F5F5E9]/70'
            }`}
          >
            <div className="font-medium mb-2 text-[#0D503C]/90">{getCategoryName(category)}</div>
            <div className="text-sm text-[#0D503C]/80">{value}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ComparisonCard;
