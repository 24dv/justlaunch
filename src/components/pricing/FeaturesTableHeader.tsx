
import React from 'react';
import { TableHeader, TableRow, TableHead } from "@/components/ui/table";

interface FeaturesTableHeaderProps {
  language: 'en' | 'nl';
}

const FeaturesTableHeader = ({ language }: FeaturesTableHeaderProps) => {
  return (
    <TableHeader className="bg-[#F5F5E9] sticky top-0 z-10 shadow-sm">
      <TableRow className="border-b border-[#0D503C]/20">
        <TableHead className="w-[400px] font-semibold text-[#0D503C] bg-[#F5F5E9]">
          {language === 'en' ? 'Features' : 'Functies'}
        </TableHead>
        <TableHead className="text-center font-semibold text-[#0D503C] bg-[#E8E8D9]">
          {language === 'en' ? 'Launch Site' : 'Launch Site'}
          <div className="text-sm font-medium text-[#0D503C]/70">€995 {language === 'en' ? '+ VAT' : '+ BTW'}</div>
        </TableHead>
        <TableHead className="text-center font-semibold text-[#0D503C] bg-[#E8E8D9]">
          {language === 'en' ? 'Launch Package' : 'Launch Pakket'}
          <div className="text-sm font-medium text-[#0D503C]/70">€1,500 {language === 'en' ? '+ VAT' : '+ BTW'}</div>
        </TableHead>
        <TableHead className="text-center font-semibold text-[#0D503C] bg-[#E8E8D9]">
          {language === 'en' ? 'Premium Package' : 'Premium Pakket'}
          <div className="text-sm font-medium text-[#0D503C]/70">€2,500 {language === 'en' ? '+ VAT' : '+ BTW'}</div>
        </TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default FeaturesTableHeader;
