
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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            {/* Launch Package */}
            <div className="lg:col-span-5">
              <PlanCard planType="launch" />
            </div>
            
            {/* Premium Package with Payment Plan */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-8">
                <PlanCard planType="premium" />
              </div>
              <div className="md:col-span-4">
                <PaymentPlanCard />
              </div>
            </div>
          </div>

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
