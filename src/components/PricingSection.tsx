
import React, { useState } from 'react';
import PricingHeader from './pricing/PricingHeader';
import PlanSelector from './pricing/PlanSelector';
import PlanCard from './pricing/PlanCard';
import PaymentPlanCard from './pricing/PaymentPlanCard';
import MaintenanceCard from './pricing/MaintenanceCard';
import PricingFooter from './pricing/PricingFooter';
import { Plus } from 'lucide-react';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<'launch' | 'premium'>('launch');

  const togglePlan = (plan: 'launch' | 'premium') => {
    setSelectedPlan(plan);
  };

  return (
    <section id="pricing" className="section-padding bg-[#F5F5E9]">
      <div className="container mx-auto">
        <PricingHeader />
        <PlanSelector selectedPlan={selectedPlan} onTogglePlan={togglePlan} />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column - Selected Plan */}
            <PlanCard planType={selectedPlan} />

            {/* Right column - Premium Payment Plan (only visible when premium is selected) */}
            {selectedPlan === 'premium' && <PaymentPlanCard />}
          </div>

          {/* Plus Sign */}
          <div className="flex justify-center my-6">
            <div className="bg-[#0D503C] rounded-full p-3 shadow-lg">
              <Plus size={24} className="text-[#F5F5E9]" />
            </div>
          </div>

          {/* Maintenance & Security Card */}
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
