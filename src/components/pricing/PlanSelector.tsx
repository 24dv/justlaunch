
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface PlanSelectorProps {
  selectedPlan: 'launch' | 'premium';
  onTogglePlan: (plan: 'launch' | 'premium') => void;
}

const PlanSelector = ({ selectedPlan, onTogglePlan }: PlanSelectorProps) => {
  const { t } = useLanguage();

  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex p-1 rounded-lg bg-[#0D503C]/10 border border-[#0D503C]/30">
        <button
          onClick={() => onTogglePlan('launch')}
          className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            selectedPlan === 'launch'
              ? 'bg-[#0D503C] text-[#F5F5E9] shadow-md'
              : 'text-[#0D503C] hover:bg-[#0D503C]/10'
          }`}
        >
          {t('pricing.launch.title')}
        </button>
        <button
          onClick={() => onTogglePlan('premium')}
          className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            selectedPlan === 'premium'
              ? 'bg-[#0D503C] text-[#F5F5E9] shadow-md'
              : 'text-[#0D503C] hover:bg-[#0D503C]/10'
          }`}
        >
          {t('pricing.premium.title')}
        </button>
      </div>
    </div>
  );
};

export default PlanSelector;
