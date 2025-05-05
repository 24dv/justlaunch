
import React from 'react';
import { Table } from "@/components/ui/table";
import { useLanguage } from '../../contexts/LanguageContext';
import FeaturesTableHeader from './FeaturesTableHeader';
import FeaturesByCategory from './FeaturesByCategory';
import { useFeaturesData } from './hooks/useFeaturesData';
import { ScrollArea } from "@/components/ui/scroll-area";

const FeaturesTable = () => {
  const { language } = useLanguage();
  const { features, categories, getCategoryName, getFeatureName } = useFeaturesData();

  return (
    <div className="rounded-2xl border-2 border-[#0D503C] bg-[#F5F5E9] overflow-hidden shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
      <Table>
        {/* The header is outside the scrollable area to remain fixed */}
        <FeaturesTableHeader language={language} />
        
        {/* Scrollable content area */}
        <div className="max-h-[500px] overflow-y-auto">
          <FeaturesByCategory 
            categories={categories} 
            features={features} 
            getCategoryName={getCategoryName} 
            getFeatureName={getFeatureName}
          />
        </div>
      </Table>
    </div>
  );
};

export default FeaturesTable;
