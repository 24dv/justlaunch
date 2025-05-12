
import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/table';
import { ComparisonData } from './types';
import { useLanguage } from '../../contexts/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

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
  
  return (
    <div className="hidden lg:block mb-12 overflow-hidden rounded-xl border border-[#0D503C]/30 shadow-lg">
      <Table>
        <TableHeader>
          <TableRow className="bg-gradient-to-r from-[#F5F5E9] to-[#F5F5E9]">
            <TableHead className="w-[200px] p-4 font-serif text-[#0D503C] text-lg">
              {t('compare.category')}
            </TableHead>
            {providers.map(provider => (
              <TableHead 
                key={provider} 
                className={`text-center p-4 relative ${
                  provider === 'Just Launch' 
                    ? 'bg-[#0D503C] text-[#F5F5E9]' 
                    : 'bg-[#F5F5E9] text-[#0D503C]'
                }`}
              >
                {provider === 'Just Launch' && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#F9A7A7] text-[#0D503C] text-xs font-bold py-1 px-3 rounded-full border border-[#0D503C]/20">
                    {t('compare.recommended')}
                  </div>
                )}
                <div className={`text-lg font-bold font-serif ${provider === 'Just Launch' ? 'text-[#F5F5E9]' : 'text-[#0D503C]'}`}>
                  {getProviderName(provider)}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category, catIndex) => (
            <TableRow 
              key={category}
              className={catIndex % 2 === 0 ? 'bg-[#F5F5E9]' : 'bg-[#F5F5E9]/70'}
            >
              <TableCell className="font-medium p-4 border-r border-[#0D503C]/10">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#0D503C]/10">
                    {categoryIcons[category]}
                  </div>
                  <span className="font-medium text-[#0D503C]">{getCategoryName(category)}</span>
                </div>
              </TableCell>
              {providers.map(provider => (
                <TableCell 
                  key={`${provider}-${category}`}
                  className={`p-4 ${
                    provider === 'Just Launch' 
                      ? 'bg-[#0D503C]/5 border-l-4 border-[#0D503C]' 
                      : ''
                  }`}
                >
                  {provider === 'Just Launch' ? (
                    <div className="flex items-start">
                      {typeof comparisonData[provider][category] === 'string' ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#0D503C]" />
                          <span>{comparisonData[provider][category]}</span>
                        </div>
                      ) : (
                        comparisonData[provider][category]
                      )}
                    </div>
                  ) : (
                    <div className="text-[#0D503C]/80">
                      {comparisonData[provider][category]}
                    </div>
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
