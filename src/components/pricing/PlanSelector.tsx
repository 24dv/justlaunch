
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface PlanSelectorProps {
  selectedPlan: 'website' | 'packages';
  onTogglePlan: (plan: 'website' | 'packages') => void;
}

const PlanSelector = ({ selectedPlan, onTogglePlan }: PlanSelectorProps) => {
  const { t } = useLanguage();

  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex p-1 rounded-full bg-[#0D503C]/10 border border-[#0D503C]/30">
        <button
          onClick={() => onTogglePlan('website')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedPlan === 'website'
              ? 'bg-[#0D503C] text-[#F5F5E9] shadow-md'
              : 'text-[#0D503C] hover:bg-[#0D503C]/10'
          }`}
        >
          {t('pricing.toggle.websiteOnly')}
        </button>
        <button
          onClick={() => onTogglePlan('packages')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedPlan === 'packages'
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
