
import React, { useState } from 'react';
import PricingHeader from './pricing/PricingHeader';
import PlanCard from './pricing/PlanCard';
import PaymentPlanCard from './pricing/PaymentPlanCard';
import MaintenanceCard from './pricing/MaintenanceCard';
import PricingFooter from './pricing/PricingFooter';
import FeaturesTable from './pricing/FeaturesTable';
import ChatBot from './chatbot/ChatBot';
import { Plus } from 'lucide-react';

const PricingSection = () => {
  const [showPaymentPlan, setShowPaymentPlan] = useState(false);

  return (
    <section id="pricing" className="section-padding bg-[#F5F5E9]">
      <div className="container mx-auto">
        <PricingHeader />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Launch Package */}
            <PlanCard planType="launch" />
            
            {/* Premium Package with Payment Plan Option */}
            <div className="relative">
              <PlanCard 
                planType="premium" 
                showPaymentOption 
                onPaymentOptionClick={() => setShowPaymentPlan(true)} 
              />
              
              {/* Payment Plan Dialog */}
              {showPaymentPlan && (
                <PaymentPlanCard onClose={() => setShowPaymentPlan(false)} />
              )}
            </div>
          </div>

          {/* Features Comparison Table */}
          <div className="mb-16">
            <FeaturesTable />
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

        {/* Chat Bot */}
        <ChatBot />
      </div>
    </section>
  );
};

export default PricingSection;
