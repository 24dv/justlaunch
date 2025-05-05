
import React from 'react';
import { Table, TableBody, TableHeader } from "@/components/ui/table";
import { useLanguage } from '../../contexts/LanguageContext';
import FeaturesTableHeader from './FeaturesTableHeader';
import FeaturesByCategory from './FeaturesByCategory';
import { useFeaturesData } from './hooks/useFeaturesData';

const FeaturesTable = () => {
  const { language } = useLanguage();
  const { features, categories, getCategoryName, getFeatureName } = useFeaturesData();

  return (
    <div className="rounded-2xl border-2 border-[#0D503C] bg-[#F5F5E9] overflow-hidden shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
      <Table className="w-full table-fixed">
        <FeaturesTableHeader language={language} />
        <TableBody className="max-h-[600px] overflow-y-auto">
          <FeaturesByCategory 
            categories={categories} 
            features={features} 
            getCategoryName={getCategoryName} 
            getFeatureName={getFeatureName}
          />
        </TableBody>
      </Table>
    </div>
  );
};

export default FeaturesTable;
