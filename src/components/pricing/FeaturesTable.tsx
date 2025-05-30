
import React from 'react';
import { Table, TableBody } from "@/components/ui/table";
import { useLanguage } from '../../contexts/LanguageContext';
import FeaturesTableHeader from './FeaturesTableHeader';
import FeaturesByCategory from './FeaturesByCategory';
import { useFeaturesData } from './hooks/useFeaturesData';

const FeaturesTable = () => {
  const { language } = useLanguage();
  const { features, categories, getCategoryName, getFeatureName } = useFeaturesData();

  return (
    <div className="rounded-lg border border-[#0D503C] bg-[#F5F5E9] overflow-hidden shadow-md animate-in fade-in slide-in-from-top-4 duration-300">
      {/* Table header outside the scrollable area */}
      <FeaturesTableHeader language={language} />
      
      {/* Scrollable table body */}
      <div className="max-h-[600px] overflow-y-auto relative">
        <Table className="w-full border-collapse">
          <TableBody>
            <FeaturesByCategory 
              categories={categories} 
              features={features} 
              getCategoryName={getCategoryName} 
              getFeatureName={getFeatureName}
            />
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default FeaturesTable;
