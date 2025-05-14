
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
  TableCell
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
      "overflow-hidden bg-[#F5F5E9]", 
      highlight ? "border-[#0D503C] ring-1 ring-[#0D503C]/30" : ""
    )}>
      <CardHeader className={cn(
        "py-3 flex flex-row justify-between items-center", 
        highlight ? "bg-[#0D503C] text-[#F5F5E9]" : "bg-[#0D503C]/5"
      )}>
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 flex items-center justify-center bg-[#F5F5E9] rounded-full">
            <span className="text-[#0D503C] text-xs font-bold">JL</span>
          </div>
          <CardTitle className="text-lg font-bold">{mainProvider}</CardTitle>
        </div>
        <div className="flex gap-2 items-center">
          <CardTitle className="text-lg font-bold">{comparisonProvider}</CardTitle>
          <div className="w-8 h-8 flex items-center justify-center bg-[#F5F5E9]/10 rounded-full border border-[#F5F5E9]/30">
            <span className="text-[#F5F5E9] text-xs font-bold">VS</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <Table>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category} className="hover:bg-[#0D503C]/5">
                <TableCell className="font-medium border-r border-[#0D503C]/10 bg-[#0D503C]/5 w-1/3">
                  <div className="flex flex-col gap-1 items-start">
                    <div className="flex items-center gap-1.5 text-sm">
                      {categoryIcons[category]}
                      <span>{getCategoryName(category)}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center border-r border-[#0D503C]/10 w-1/3">
                  <div className="font-medium">{renderValue(justLaunchData[category])}</div>
                </TableCell>
                <TableCell className="text-center w-1/3">
                  <div className="font-medium">{renderValue(competitorData[category])}</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="p-4 bg-[#0D503C]/5 border-t border-[#0D503C]/10">
          <button 
            className="w-full py-2.5 bg-[#0D503C] text-[#F5F5E9] rounded-md font-medium hover:bg-[#0D503C]/90 transition"
          >
            {t('compare.cta.freeIntroCall')}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MobileComparisonCard;
