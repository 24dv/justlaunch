
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
  
  return (
    <div className="hidden lg:block mb-12 overflow-hidden rounded-xl border border-[#0D503C] shadow-md">
      <Table>
        <TableHeader className="bg-[#0D503C]/5">
          <TableRow>
            <TableHead className="w-[180px]">{t('compare.category')}</TableHead>
            {providers.map(provider => (
              <TableHead 
                key={provider} 
                className={`text-center ${provider === 'Just Launch' ? 'bg-[#0D503C] text-[#F5F5E9]' : ''}`}
              >
                {t(`compare.providers.${provider.toLowerCase().replace(' ', '')}`)}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map(category => (
            <TableRow key={category}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  {categoryIcons[category]}
                  {t(`compare.categories.${category.toLowerCase().replace(/ /g, '')}`)}
                </div>
              </TableCell>
              {providers.map(provider => (
                <TableCell 
                  key={`${provider}-${category}`}
                  className={`${provider === 'Just Launch' ? 'bg-[#0D503C]/5' : ''}`}
                >
                  {comparisonData[provider][category]}
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
