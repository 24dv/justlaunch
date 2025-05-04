
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
import PlanSelector from './pricing/PlanSelector';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<'website' | 'packages'>('packages');
  const [showPaymentPlan, setShowPaymentPlan] = useState(false);
  const [showFeaturesTable, setShowFeaturesTable] = useState(false);
  const { language } = useLanguage();

  const handleTogglePlan = (plan: 'website' | 'packages') => {
    setSelectedPlan(plan);
  };

  return (
    <section id="pricing" className="section-padding bg-[#F5F5E9]">
      <div className="container mx-auto">
        <PricingHeader />

        <PlanSelector selectedPlan={selectedPlan} onTogglePlan={handleTogglePlan} />

        <div className="max-w-6xl mx-auto">
          {selectedPlan === 'website' ? (
            // Website Only - Show only Launch Site package centered
            <div className="flex justify-center mb-8">
              <div className="max-w-md w-full">
                <PlanCard planType="launchsite" />
              </div>
            </div>
          ) : (
            // Packages - Show Launch and Premium packages with equal width and minimal gap
            <div className="flex flex-col md:flex-row justify-center gap-1 mb-8">
              {/* Launch Package */}
              <div className="md:w-1/2 max-w-md mx-auto">
                <PlanCard planType="launch" />
              </div>
              
              {/* Premium Package with Payment Plan Option */}
              <div className="md:w-1/2 max-w-md mx-auto relative">
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
          )}

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

          {/* Maintenance & Security Card - width reduced by 30% */}
          <div className="mb-8 mx-auto w-[70%]">
            <MaintenanceCard />
          </div>

          <PricingFooter />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
