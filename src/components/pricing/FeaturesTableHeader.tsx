
import React from 'react';
import { TableRow, TableHead } from "@/components/ui/table";

interface FeaturesTableHeaderProps {
  language: 'en' | 'nl';
}

const FeaturesTableHeader = ({ language }: FeaturesTableHeaderProps) => {
  return (
    <div className="bg-[#0D503C]/10 border-b border-[#0D503C]/20 sticky top-0 z-10">
      <table className="w-full">
        <thead>
          <TableRow>
            <TableHead className="w-[40%] font-semibold text-[#0D503C] p-2 md:p-3 text-xs md:text-sm">
              {language === 'en' ? 'Features' : 'Functies'}
            </TableHead>
            <TableHead className="text-center font-semibold text-[#0D503C] p-2 md:p-3 w-[20%] text-xs">
              {language === 'en' ? 'Launch Site' : 'Launch Site'}
              <div className="text-xs font-medium text-[#0D503C]/70">€995 {language === 'en' ? '+ VAT' : '+ BTW'}</div>
            </TableHead>
            <TableHead className="text-center font-semibold text-[#0D503C] p-2 md:p-3 w-[20%] text-xs">
              {language === 'en' ? 'Launch Package' : 'Launch Pakket'}
              <div className="text-xs font-medium text-[#0D503C]/70">€1,500 {language === 'en' ? '+ VAT' : '+ BTW'}</div>
            </TableHead>
            <TableHead className="text-center font-semibold text-[#0D503C] p-2 md:p-3 w-[20%] text-xs">
              {language === 'en' ? 'Premium Package' : 'Premium Pakket'}
              <div className="text-xs font-medium text-[#0D503C]/70">€2,500 {language === 'en' ? '+ VAT' : '+ BTW'}</div>
            </TableHead>
          </TableRow>
        </thead>
      </table>
    </div>
  );
};

export default FeaturesTableHeader;
