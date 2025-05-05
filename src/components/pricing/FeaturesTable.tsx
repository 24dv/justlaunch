
import React from 'react';
import { Table } from "@/components/ui/table";
import { useLanguage } from '../../contexts/LanguageContext';
import FeaturesTableHeader from './FeaturesTableHeader';
import FeaturesByCategory from './FeaturesByCategory';
import { useFeaturesData } from './hooks/useFeaturesData';

const FeaturesTable = () => {
  const { language } = useLanguage();
  const { features, categories, getCategoryName, getFeatureName } = useFeaturesData();

  return (
    <div className="rounded-2xl border-2 border-[#0D503C] bg-[#F5F5E9] overflow-hidden shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="relative">
        {/* Fixed header */}
        <div className="sticky top-0 z-20 bg-[#0D503C]/10">
          <FeaturesTableHeader language={language} />
        </div>
        
        {/* Scrollable content */}
        <div className="max-h-[500px] overflow-y-auto">
          <Table>
            <FeaturesByCategory 
              categories={categories} 
              features={features} 
              getCategoryName={getCategoryName} 
              getFeatureName={getFeatureName}
            />
          </Table>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTable;
