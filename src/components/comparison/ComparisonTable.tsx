
import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/table';
import { ComparisonData } from './types';
import { useLanguage } from '../../contexts/LanguageContext';
import { Check } from 'lucide-react';

interface ComparisonTableProps {
  categories: string[];
  providers: string[];
  comparisonData: ComparisonData;
  categoryIcons: Record<string, React.ReactNode>;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ 
  categories, 
  providers, 
  comparisonData, 
  categoryIcons 
}) => {
  const { t } = useLanguage();
  
  // Map provider names to translation keys
  const getProviderName = (provider: string) => {
    return t(`compare.providers.${provider.toLowerCase().replace(/\s+/g, '')}`);
  };

  // Map category names to translation keys
  const getCategoryName = (category: string) => {
    return t(`compare.categories.${category.toLowerCase().replace(/\s+/g, '')}`);
  };
  
  // Check if a provider is "Just Launch"
  const isJustLaunch = (provider: string) => provider === 'Just Launch';
  
  return (
    <div className="hidden lg:block mb-12 rounded-2xl overflow-hidden border border-[#0D503C]/20 shadow-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px] bg-[#F5F5E9] border-b border-[#0D503C]/10">
              <div className="py-2 px-4 font-serif text-lg text-[#0D503C] font-medium">
                {t('compare.category')}
              </div>
            </TableHead>
            {providers.map(provider => (
              <TableHead 
                key={provider} 
                className={`text-center border-b ${
                  isJustLaunch(provider) 
                    ? 'bg-[#0D503C] border-[#0D503C]' 
                    : 'bg-[#F5F5E9] border-[#0D503C]/10'
                }`}
              >
                <div className={`py-3 px-4 font-serif text-lg font-bold ${
                  isJustLaunch(provider) ? 'text-[#F5F5E9]' : 'text-[#0D503C]'
                }`}>
                  {getProviderName(provider)}
                  {isJustLaunch(provider) && (
                    <div className="absolute top-0 right-0 -mt-1 -mr-1">
                      <div className="bg-[#F9A7A7] text-[#0D503C] text-xs font-bold px-2 py-0.5 rounded-bl-lg rounded-tr-lg">
                        {t('compare.recommended')}
                      </div>
                    </div>
                  )}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category, categoryIndex) => (
            <TableRow key={category} className={categoryIndex % 2 === 0 ? 'bg-[#F5F5E9]' : 'bg-[#F5F5E9]/70'}>
              <TableCell className="font-medium border-r border-[#0D503C]/10">
                <div className="flex items-center gap-3 py-1">
                  <div className="bg-[#0D503C]/5 p-2 rounded-full">
                    {categoryIcons[category]}
                  </div>
                  <span className="text-[#0D503C] font-medium">
                    {getCategoryName(category)}
                  </span>
                </div>
              </TableCell>
              {providers.map(provider => (
                <TableCell 
                  key={`${provider}-${category}`}
                  className={`relative ${
                    isJustLaunch(provider) 
                      ? 'bg-[#0D503C]/10 border-r border-[#0D503C]/20' 
                      : categoryIndex % 2 === 0 ? 'bg-[#F5F5E9]' : 'bg-[#F5F5E9]/70'
                  }`}
                >
                  <div className={`py-2 px-1 ${isJustLaunch(provider) ? 'font-medium' : ''}`}>
                    {comparisonData[provider][category]}
                  </div>
                  {isJustLaunch(provider) && (
                    <div className="absolute left-0 top-0 h-full w-1 bg-[#0D503C]"></div>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ComparisonTable;
