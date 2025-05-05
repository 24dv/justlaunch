
import React from 'react';
import { TableRow, TableCell } from "@/components/ui/table";

interface CategoryHeaderProps {
  categoryName: string;
}

const CategoryHeader = ({ categoryName }: CategoryHeaderProps) => {
  return (
    <TableRow className="bg-[#0D503C]/5 hover:bg-[#0D503C]/10">
      <TableCell 
        colSpan={4} 
        className="font-semibold text-[#0D503C] p-4 text-sm md:text-base"
      >
        {categoryName}
      </TableCell>
    </TableRow>
  );
};

export default CategoryHeader;
