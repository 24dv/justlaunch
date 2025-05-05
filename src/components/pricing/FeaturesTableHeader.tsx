
import React from 'react';
import { TableHead, TableRow, TableHeader } from "@/components/ui/table";
import { useIsMobile } from "@/hooks/use-mobile";

interface FeaturesTableHeaderProps {
  language: 'en' | 'nl';
}

const FeaturesTableHeader = ({ language }: FeaturesTableHeaderProps) => {
  const isMobile = useIsMobile();
  
  return (
    <TableHeader 
      className="bg-[#0D503C]/10 border-b border-[#0D503C]/20 sticky top-0 z-10" 
      style={{ position: 'sticky', top: 0 }}
    >
      <TableRow>
        <TableHead className={`w-[40%] font-semibold text-[#0D503C] ${isMobile ? 'py-2 px-2 text-xs' : 'p-4 text-sm'}`}>
          {language === 'en' ? 'Features' : 'Functies'}
        </TableHead>
        <TableHead className={`text-center font-semibold text-[#0D503C] w-[20%] ${isMobile ? 'py-2 px-2 text-xs' : 'p-4 text-sm'}`}>
          {language === 'en' ? 'Launch Site' : 'Launch Site'}
          <div className={`font-medium text-[#0D503C]/70 ${isMobile ? 'text-[10px]' : 'text-xs'}`}>€995 {language === 'en' ? '+ VAT' : '+ BTW'}</div>
        </TableHead>
        <TableHead className={`text-center font-semibold text-[#0D503C] w-[20%] ${isMobile ? 'py-2 px-2 text-xs' : 'p-4 text-sm'}`}>
          {language === 'en' ? 'Launch Package' : 'Launch Pakket'}
          <div className={`font-medium text-[#0D503C]/70 ${isMobile ? 'text-[10px]' : 'text-xs'}`}>€1,500 {language === 'en' ? '+ VAT' : '+ BTW'}</div>
        </TableHead>
        <TableHead className={`text-center font-semibold text-[#0D503C] w-[20%] ${isMobile ? 'py-2 px-2 text-xs' : 'p-4 text-sm'}`}>
          {language === 'en' ? 'Premium Package' : 'Premium Pakket'}
          <div className={`font-medium text-[#0D503C]/70 ${isMobile ? 'text-[10px]' : 'text-xs'}`}>€2,500 {language === 'en' ? '+ VAT' : '+ BTW'}</div>
        </TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default FeaturesTableHeader;
