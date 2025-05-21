
import React, { useState } from 'react';
import { ChevronRight, Check } from 'lucide-react';
import { Badge } from '../ui/badge';
import { useLanguage } from '../../contexts/LanguageContext';
import { ComparisonCategory, ServiceType } from './types';
import { useComparisonData } from './comparisonData';

interface MobileComparisonCardProps {
  service: ServiceType;
  delay: number;
  scrollToCategory: (category: ComparisonCategory) => void;
  activeCategory: ComparisonCategory | null;
}

const MobileComparisonCard: React.FC<MobileComparisonCardProps> = ({
  service,
  delay,
  scrollToCategory,
  activeCategory,
}) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { comparisonData } = useComparisonData();
  
  const serviceData = comparisonData.find(item => item.service === service);
  if (!serviceData) return null;
  
  const getCategoryName = (category: ComparisonCategory) => {
    return t(`comparison.categories.${category}`);
  };
  
  const getServiceName = (service: ServiceType) => {
    return t(`comparison.services.${service}`);
  };
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  const hasAdvantage = (category: ComparisonCategory) => {
    const categoryData = serviceData.categories[category];
    return categoryData && categoryData.advantage === true;
  };
  
  const getCategoryClasses = (category: ComparisonCategory) => {
    if (activeCategory === category) {
      return 'animate-pulse bg-[#0D503C]/10 border-[#0D503C]/20';
    }
    return 'bg-white border-gray-100';
  };
  
  return (
    <div 
      className={`card-animation delay-${delay} rounded-xl border border-gray-200 shadow-sm overflow-hidden`}
    >
      {/* Card Header */}
      <div className="p-4 border-b border-gray-100 bg-white flex justify-between items-center">
        <div>
          <h3 className="font-medium text-[#0D503C]">{getServiceName(service)}</h3>
          {service === 'just_launch' && (
            <span className="text-xs text-[#0D503C]/70">What we offer</span>
          )}
        </div>
        <button 
          onClick={toggleOpen}
          aria-label={isOpen ? "Collapse details" : "Expand details"}
          className="p-1 rounded-full hover:bg-gray-50"
        >
          <ChevronRight className={`h-5 w-5 text-[#0D503C] transition-transform ${isOpen ? 'rotate-90' : ''}`} />
        </button>
      </div>
      
      {/* Expanded Content */}
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2000px]' : 'max-h-0'}`}>
        <div className="divide-y divide-gray-100">
          {Object.keys(serviceData.categories).map((categoryKey, index) => {
            const category = categoryKey as ComparisonCategory;
            const categoryData = serviceData.categories[category];
            
            if (!categoryData) return null;
            
            return (
              <div 
                key={category} 
                className={`transition-colors duration-300 ${getCategoryClasses(category)}`}
                onClick={() => scrollToCategory(category)}
              >
                <div className="px-4 py-3 cursor-pointer hover:bg-gray-50/50 transition-colors">
                  <div className="grid grid-cols-3 divide-x divide-[#0D503C]/10">
                    {/* Category Column */}
                    <div className="p-1.5 text-left flex items-center">
                      <span className="line-clamp-2 text-xs font-bold text-[#0D503C]">{getCategoryName(category)}</span>
                      {hasAdvantage(category) && (
                        <Badge className="ml-1 mt-0 text-[0.6rem] py-0 px-1 h-4 bg-[#F2FCE2] text-[#0D503C] border border-[#0D503C]/20">
                          Advantage
                        </Badge>
                      )}
                    </div>
                    
                    {/* Main Feature Column */}
                    <div className="p-1.5 text-xs text-gray-600 flex items-center">
                      {categoryData.mainFeature}
                    </div>
                    
                    {/* Detail Column */}
                    <div className="p-1.5 flex justify-center items-center">
                      {typeof categoryData.value === 'boolean' ? (
                        categoryData.value ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <span className="block h-4 w-4 rounded-full bg-gray-200" />
                        )
                      ) : (
                        <span className="text-xs">{categoryData.value}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileComparisonCard;
