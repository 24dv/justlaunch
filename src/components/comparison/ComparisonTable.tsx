
import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/table';
import { ComparisonData } from './types';

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
  return (
    <div className="hidden lg:block mb-12 overflow-hidden rounded-xl border border-[#0D503C] shadow-md">
      <Table>
        <TableHeader className="bg-[#0D503C]/5">
          <TableRow>
            <TableHead className="w-[180px]">Category</TableHead>
            {providers.map(provider => (
              <TableHead 
                key={provider} 
                className={`text-center ${provider === 'Just Launch' ? 'bg-[#0D503C] text-[#F5F5E9]' : ''}`}
              >
                {provider}
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
                  {category}
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
