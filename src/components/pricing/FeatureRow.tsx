
import React from 'react';
import { TableRow, TableCell } from "@/components/ui/table";
import FeatureStatus from './FeatureStatus';
import { Feature } from './types';
import { useIsMobile } from "@/hooks/use-mobile";

interface FeatureRowProps {
  feature: Feature;
  featureNameHtml: string;
}

const FeatureRow = ({ feature, featureNameHtml }: FeatureRowProps) => {
  const isMobile = useIsMobile();
  
  return (
    <TableRow className="hover:bg-[#0D503C]/5 border-b border-[#0D503C]/10">
      <TableCell className={`font-medium text-[#0D503C] w-[40%] ${isMobile ? 'text-xs p-2' : 'text-sm p-4'}`}>
        <div dangerouslySetInnerHTML={{ __html: featureNameHtml }} />
      </TableCell>
      <TableCell className="text-center w-[20%]">
        <FeatureStatus isIncluded={feature.launchSite} />
      </TableCell>
      <TableCell className="text-center w-[20%]">
        <FeatureStatus isIncluded={feature.launch} />
      </TableCell>
      <TableCell className="text-center w-[20%]">
        <FeatureStatus isIncluded={feature.premium} />
      </TableCell>
    </TableRow>
  );
};

export default FeatureRow;
