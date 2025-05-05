
import React from 'react';
import { TableRow, TableCell } from "@/components/ui/table";
import FeatureStatus from './FeatureStatus';
import { Feature } from './types';

interface FeatureRowProps {
  feature: Feature;
  featureNameHtml: string;
}

const FeatureRow = ({ feature, featureNameHtml }: FeatureRowProps) => {
  return (
    <TableRow className="hover:bg-[#0D503C]/5 border-b border-[#0D503C]/10">
      <TableCell className="font-medium text-[#0D503C] w-[40%] py-2 text-xs md:text-sm">
        <div dangerouslySetInnerHTML={{ __html: featureNameHtml }} />
      </TableCell>
      <TableCell className="text-center w-[20%] py-2 px-1">
        <FeatureStatus isIncluded={feature.launchSite} />
      </TableCell>
      <TableCell className="text-center w-[20%] py-2 px-1">
        <FeatureStatus isIncluded={feature.launch} />
      </TableCell>
      <TableCell className="text-center w-[20%] py-2 px-1">
        <FeatureStatus isIncluded={feature.premium} />
      </TableCell>
    </TableRow>
  );
};

export default FeatureRow;
