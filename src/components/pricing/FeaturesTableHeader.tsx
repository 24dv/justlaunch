
import React from 'react';
import { TableRow, TableHead } from "@/components/ui/table";

interface FeaturesTableHeaderProps {
  language: 'en' | 'nl';
}

const FeaturesTableHeader = ({ language }: FeaturesTableHeaderProps) => {
  return (
    <TableRow>
      <TableHead className="w-[40%] font-semibold text-[#0D503C] p-4 text-sm md:text-base">
        {language === 'en' ? 'Features' : 'Functies'}
      </TableHead>
      <TableHead className="text-center font-semibold text-[#0D503C] p-4 w-[20%] text-xs md:text-sm">
        {language === 'en' ? 'Launch Site' : 'Launch Site'}
        <div className="text-xs md:text-sm font-medium text-[#0D503C]/70">€995 {language === 'en' ? '+ VAT' : '+ BTW'}</div>
      </TableHead>
      <TableHead className="text-center font-semibold text-[#0D503C] p-4 w-[20%] text-xs md:text-sm">
        {language === 'en' ? 'Launch Package' : 'Launch Pakket'}
        <div className="text-xs md:text-sm font-medium text-[#0D503C]/70">€1,500 {language === 'en' ? '+ VAT' : '+ BTW'}</div>
      </TableHead>
      <TableHead className="text-center font-semibold text-[#0D503C] p-4 w-[20%] text-xs md:text-sm">
        {language === 'en' ? 'Premium Package' : 'Premium Pakket'}
        <div className="text-xs md:text-sm font-medium text-[#0D503C]/70">€2,500 {language === 'en' ? '+ VAT' : '+ BTW'}</div>
      </TableHead>
    </TableRow>
  );
};

export default FeaturesTableHeader;
