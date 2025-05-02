
import React, { useState } from 'react';
import PricingHeader from './pricing/PricingHeader';
import PlanCard from './pricing/PlanCard';
import PaymentPlanCard from './pricing/PaymentPlanCard';
import MaintenanceCard from './pricing/MaintenanceCard';
import PricingFooter from './pricing/PricingFooter';
import FeaturesTable from './pricing/FeaturesTable';
import { Plus, List, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from './ui/dialog';

const PricingSection = () => {
  const [showPaymentPlan, setShowPaymentPlan] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <section id="pricing" className="section-padding bg-[#F5F5E9]">
      <div className="container mx-auto">
        <PricingHeader />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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

          {/* Compare Features Button with Dialog */}
          <div className="flex justify-center mb-8">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="border-[#0D503C] text-[#0D503C] hover:bg-[#0D503C] hover:text-[#F5F5E9] transition-all"
                >
                  <List className="mr-2" />
                  {language === 'en' ? 'Compare packages' : 'Pakketten vergelijken'}
                </Button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-5xl p-0 bg-[#F5F5E9] border-2 border-[#0D503C]">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-[#0D503C]">
                      {language === 'en' ? 'Package Comparison' : 'Pakketvergelijking'}
                    </h3>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setDialogOpen(false)}
                      className="text-[#0D503C] hover:bg-[#0D503C]/10"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </div>
                  <FeaturesTable />
                </div>
              </DialogContent>
            </Dialog>
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
