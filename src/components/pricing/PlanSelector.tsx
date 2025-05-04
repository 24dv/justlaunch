
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface PlanSelectorProps {
  selectedOption: 'website' | 'packages';
  onToggleOption: (option: 'website' | 'packages') => void;
}

const PlanSelector = ({ selectedOption, onToggleOption }: PlanSelectorProps) => {
  const { t } = useLanguage();

  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex p-1 rounded-lg bg-[#0D503C]/10 border border-[#0D503C]/30">
        <button
          onClick={() => onToggleOption('website')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            selectedOption === 'website'
              ? 'bg-[#0D503C] text-[#F5F5E9] shadow-md'
              : 'text-[#0D503C] hover:bg-[#0D503C]/10'
          }`}
        >
          {t('pricing.toggle.websiteOnly')}
        </button>
        <button
          onClick={() => onToggleOption('packages')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            selectedOption === 'packages'
              ? 'bg-[#0D503C] text-[#F5F5E9] shadow-md'
              : 'text-[#0D503C] hover:bg-[#0D503C]/10'
          }`}
        >
          {t('pricing.toggle.packages')}
        </button>
      </div>
    </div>
  );
};

export default PlanSelector;
