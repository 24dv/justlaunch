
import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/table';
import { ComparisonData } from './types';
import { useLanguage } from '../../contexts/LanguageContext';

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
    <div className="hidden lg:block mb-12 overflow-hidden rounded-xl border border-[#0D503C] shadow-md bg-[#F5F5E9]">
      <Table>
        <TableHeader className="bg-[#F5F5E9]">
          <TableRow>
            <TableHead className="w-[180px] bg-[#F5F5E9]">{t('compare.category')}</TableHead>
            {providers.map(provider => (
              <TableHead 
                key={provider} 
                className={`text-center ${provider === 'Just Launch' ? 'bg-[#0D503C] text-[#F5F5E9]' : 'bg-[#F5F5E9]'}`}
              >
                {getProviderName(provider)}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map(category => (
            <TableRow key={category}>
              <TableCell className="font-medium bg-[#F5F5E9]">
                <div className="flex items-center gap-2">
                  {categoryIcons[category]}
                  {getCategoryName(category)}
                </div>
              </TableCell>
              {providers.map(provider => (
                <TableCell 
                  key={`${provider}-${category}`}
                  className={`${provider === 'Just Launch' ? 'bg-[#0D503C]' : 'bg-[#F5F5E9]'}`}
                >
                  <div className={`${provider === 'Just Launch' ? 'text-[#F5F5E9]' : ''}`}>
                    {comparisonData[provider][category]}
                  </div>
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
