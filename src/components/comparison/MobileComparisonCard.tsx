
import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent 
} from '../ui/card';
import { MobileComparisonCardProps } from './types';
import { cn } from '@/lib/utils';
import { 
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead
} from '@/components/ui/table';
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
  const { t } = useLanguage();

  // Function to render value
  const renderValue = (value: React.ReactNode) => {
    if (value === true) return "Yes";
    if (value === false) return "No";
    if (value === null || value === undefined) return "-";
    return value;
  };

  return (
    <Card className={cn(
      "overflow-hidden bg-[#F5F5E9] shadow-lg border-[#0D503C]/20", 
      highlight ? "border-[#0D503C] ring-1 ring-[#0D503C]/30" : ""
    )}>
      <CardHeader className={cn(
        "p-3", 
        highlight ? "bg-[#0D503C] text-[#F5F5E9]" : "bg-[#0D503C]/5"
      )}>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-7 h-7 flex items-center justify-center bg-[#F5F5E9] rounded-full">
              <span className="text-[#0D503C] text-xs font-bold">JL</span>
            </div>
            <CardTitle className="text-sm font-bold">{mainProvider}</CardTitle>
          </div>
          <div className="text-sm font-medium opacity-80">VS</div>
          <div className="flex gap-2 items-center">
            <CardTitle className="text-sm font-bold">{comparisonProvider}</CardTitle>
            <div className="w-7 h-7 flex items-center justify-center bg-[#F5F5E9]/10 rounded-full border border-[#F5F5E9]/30">
              <span className={highlight ? "text-[#F5F5E9]" : "text-[#0D503C]"} className="text-xs font-bold">VS</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <Table>
          <TableHead>
            <TableRow className="hover:bg-transparent border-b border-[#0D503C]/10">
              <TableCell className="py-2 px-2 font-semibold text-xs text-[#0D503C]/70 w-1/3">
                {t('compare.category')}
              </TableCell>
              <TableCell className="py-2 px-1 font-semibold text-xs text-center text-[#0D503C]/70 w-1/3">
                {mainProvider}
              </TableCell>
              <TableCell className="py-2 px-1 font-semibold text-xs text-center text-[#0D503C]/70 w-1/3">
                {comparisonProvider}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category} className="hover:bg-[#0D503C]/5 border-b border-[#0D503C]/10 last:border-b-0">
                <TableCell className="font-medium py-2 px-2 text-[#0D503C] text-xs w-1/3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">{categoryIcons[category]}</span>
                    <span>{getCategoryName(category)}</span>
                  </div>
                </TableCell>
                <TableCell className="text-center py-2 px-1 text-xs w-1/3">
                  <div className={cn(
                    "font-medium", 
                    justLaunchData[category] === true ? "text-green-600" : ""
                  )}>
                    {renderValue(justLaunchData[category])}
                  </div>
                </TableCell>
                <TableCell className="text-center py-2 px-1 text-xs w-1/3">
                  <div className="font-medium">
                    {renderValue(competitorData[category])}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default MobileComparisonCard;
