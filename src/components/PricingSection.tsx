
import React, { useState } from 'react';
import PricingHeader from './pricing/PricingHeader';
import PlanSelector from './pricing/PlanSelector';
import PlanCard from './pricing/PlanCard';
import PaymentPlanCard from './pricing/PaymentPlanCard';
import MaintenanceCard from './pricing/MaintenanceCard';
import PricingFooter from './pricing/PricingFooter';
import { Plus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<'launch' | 'premium'>('launch');
  const { t } = useLanguage();

  const togglePlan = (plan: 'launch' | 'premium') => {
    setSelectedPlan(plan);
  };

  return (
    <section id="pricing" className="section-padding bg-[#F5F5E9]">
      <div className="container mx-auto">
        <PricingHeader />
        
        {/* Main pricing cards container */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Launch Package */}
            <PlanCard planType="launch" />
            {/* Premium Package */}
            <PlanCard planType="premium" />
          </div>

          {/* Payment Plan Card - Centered and smaller */}
          {selectedPlan === 'premium' && (
            <div className="max-w-xl mx-auto">
              <div className="flex justify-center my-6">
                <div className="bg-[#0D503C] rounded-full p-3 shadow-lg">
                  <Plus size={24} className="text-[#F5F5E9]" />
                </div>
              </div>
              <PaymentPlanCard />
            </div>
          )}

          {/* Plus Sign */}
          <div className="flex justify-center my-6">
            <div className="bg-[#0D503C] rounded-full p-3 shadow-lg">
              <Plus size={24} className="text-[#F5F5E9]" />
            </div>
          </div>

          {/* Maintenance Card */}
          <div className="mb-8">
            <MaintenanceCard />
          </div>

          <PricingFooter />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
