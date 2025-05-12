
import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/table';
import { ComparisonData } from './types';
import CategoryIcon from './CategoryIcon';

interface ComparisonTableProps {
  comparisonData: ComparisonData;
  providers: string[];
  categories: string[];
  highlightProvider: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ 
  comparisonData, 
  providers, 
  categories,
  highlightProvider
}) => {
  return (
    <div className="hidden lg:block mb-12 overflow-hidden rounded-xl border border-[#0D503C]/20 shadow-md">
      <Table>
        <TableHeader className="bg-[#0D503C]/5">
          <TableRow>
            <TableHead className="w-[180px]">{categories[0].split('.')[0]}.category</TableHead>
            {providers.map(provider => (
              <TableHead 
                key={provider} 
                className={`text-center ${provider === highlightProvider ? 'bg-[#0D503C] text-[#F5F5E9]' : ''}`}
              >
                {provider}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map(category => (
            <TableRow 
              key={category} 
              className="hover:bg-[#F2FCE2] transition-colors duration-200"
            >
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <CategoryIcon category={category} />
                  {category}
                </div>
              </TableCell>
              {providers.map(provider => (
                <TableCell 
                  key={`${provider}-${category}`}
                  className={`${provider === highlightProvider ? 'bg-[#0D503C]/5' : ''}`}
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
