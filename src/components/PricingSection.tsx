
import React, { useState } from 'react';
import PricingHeader from './pricing/PricingHeader';
import PlanCard from './pricing/PlanCard';
import PaymentPlanCard from './pricing/PaymentPlanCard';
import MaintenanceCard from './pricing/MaintenanceCard';
import PricingFooter from './pricing/PricingFooter';
import FeaturesTable from './pricing/FeaturesTable';
import { Plus, List } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

const PricingSection = () => {
  const [showPaymentPlan, setShowPaymentPlan] = useState(false);
  const [showFeaturesTable, setShowFeaturesTable] = useState(false);
  const { language } = useLanguage();

  return (
    <section id="pricing" className="section-padding bg-[#F5F5E9]">
      <div className="container mx-auto">
        <PricingHeader />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Launch Site Package */}
            <PlanCard planType="launchsite" />
            
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

          {/* Compare Features Button */}
          <div className="flex justify-center mb-8">
            <Button 
              variant="outline" 
              className="border-[#0D503C] text-[#0D503C] hover:bg-[#0D503C] hover:text-[#F5F5E9] transition-all bg-[#0D503C]/10"
              onClick={() => setShowFeaturesTable(!showFeaturesTable)}
            >
              <List className="mr-2" />
              {showFeaturesTable 
                ? (language === 'en' ? 'Hide comparison' : 'Vergelijking verbergen') 
                : (language === 'en' ? 'Compare packages' : 'Pakketten vergelijken')}
            </Button>
          </div>

          {/* Features Comparison Table */}
          {showFeaturesTable && (
            <div className="mb-16 transition-all">
              <FeaturesTable />
            </div>
          )}

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
