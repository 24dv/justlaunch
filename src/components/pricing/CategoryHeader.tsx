
import React from 'react';
import { TableRow, TableCell } from "@/components/ui/table";
import { useIsMobile } from "@/hooks/use-mobile";

interface CategoryHeaderProps {
  categoryName: string;
}

const CategoryHeader = ({ categoryName }: CategoryHeaderProps) => {
  const isMobile = useIsMobile();
  
  return (
    <TableRow className="bg-[#0D503C]/5 hover:bg-[#0D503C]/10">
      <TableCell 
        colSpan={4} 
        className={`font-semibold text-[#0D503C] ${isMobile ? 'py-1 px-2 text-xs' : 'py-2 px-4 text-sm'}`}
      >
        {categoryName}
      </TableCell>
    </TableRow>
  );
};

export default CategoryHeader;
