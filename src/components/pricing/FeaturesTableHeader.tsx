
import React from 'react';
import { TableRow, TableHead } from "@/components/ui/table";
import { Table } from "@/components/ui/table";

interface FeaturesTableHeaderProps {
  language: 'en' | 'nl';
}

const FeaturesTableHeader = ({ language }: FeaturesTableHeaderProps) => {
  return (
    <Table className="w-full table-fixed">
      <TableRow className="border-b border-[#0D503C]/20">
        <TableHead className="w-[45%] font-semibold text-[#0D503C] text-left">
          {language === 'en' ? 'Features' : 'Functies'}
        </TableHead>
        <TableHead className="w-[18%] font-semibold text-[#0D503C] text-center">
          {language === 'en' ? 'Launch Site' : 'Launch Site'}
          <div className="text-sm font-medium text-[#0D503C]/70">€995 {language === 'en' ? '+ VAT' : '+ BTW'}</div>
        </TableHead>
        <TableHead className="w-[18%] font-semibold text-[#0D503C] text-center">
          {language === 'en' ? 'Launch Package' : 'Launch Pakket'}
          <div className="text-sm font-medium text-[#0D503C]/70">€1,500 {language === 'en' ? '+ VAT' : '+ BTW'}</div>
        </TableHead>
        <TableHead className="w-[19%] font-semibold text-[#0D503C] text-center">
          {language === 'en' ? 'Premium Package' : 'Premium Pakket'}
          <div className="text-sm font-medium text-[#0D503C]/70">€2,500 {language === 'en' ? '+ VAT' : '+ BTW'}</div>
        </TableHead>
      </TableRow>
    </Table>
  );
};

export default FeaturesTableHeader;
