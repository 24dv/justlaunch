
import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D503C] mb-4 font-serif">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-[#0D503C]/80">
            {t('pricing.subtitle')}
          </p>
          <div className="w-24 h-1 bg-[#0D503C] mx-auto mt-6" />
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-lg bg-[#0D503C]/10 border border-[#0D503C]/30">
            <button
              onClick={() => togglePlan('launch')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedPlan === 'launch'
                  ? 'bg-[#0D503C] text-[#F5F5E9] shadow-md'
                  : 'text-[#0D503C] hover:bg-[#0D503C]/10'
              }`}
            >
              {t('pricing.launch.title')}
            </button>
            <button
              onClick={() => togglePlan('premium')}
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

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column - Selected Plan */}
            <div className="bg-[#F5F5E9] rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl border-2 border-[#0D503C]">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0D503C] mb-2 font-serif">
                  {selectedPlan === 'launch' ? t('pricing.launch.title') : t('pricing.premium.title')}
                </h3>
                <div className="flex items-baseline mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-[#0D503C]">
                    {selectedPlan === 'launch' ? t('pricing.launch.price') : t('pricing.premium.price')}
                  </span>
                  <span className="ml-2 text-[#0D503C]/70">one-time payment</span>
                </div>
                <p className="text-[#0D503C]/80 mb-6">
                  {selectedPlan === 'launch'
                    ? t('pricing.launch.description')
                    : t('pricing.premium.description')}
                </p>
                <a
                  href="#contact"
                  className="block w-full py-3 px-4 rounded-lg bg-[#0D503C] text-[#F5F5E9] text-center font-medium hover:bg-[#0A4231] transition-colors"
                >
                  {t('nav.getStarted')}
                </a>
              </div>
              <div className="px-8 pb-8">
                <h4 className="text-sm font-semibold text-[#0D503C] uppercase tracking-wider mb-4">
                  {selectedPlan === 'launch' ? t('pricing.launch.includes') : t('pricing.premium.includes')}
                </h4>
                <ul className="space-y-3">
                  {selectedPlan === 'launch' ? (
                    <>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#0D503C] mr-2 flex-shrink-0" />
                        <span className="text-[#0D503C]/80">{t('features.logoDesign.title')}</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#0D503C] mr-2 flex-shrink-0" />
                        <span className="text-[#0D503C]/80">{t('features.landingSite.title')}</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#0D503C] mr-2 flex-shrink-0" />
                        <span className="text-[#0D503C]/80">4 custom social media banners</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#0D503C] mr-2 flex-shrink-0" />
                        <span className="text-[#0D503C]/80">2 rounds of revisions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#0D503C] mr-2 flex-shrink-0" />
                        <span className="text-[#0D503C]/80">{t('features.delivery.title')}</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#0D503C] mr-2 flex-shrink-0" />
                        <span className="text-[#0D503C]/80">Everything in {t('pricing.launch.title')}</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#0D503C] mr-2 flex-shrink-0" />
                        <span className="text-[#0D503C]/80">Multi-page website (up to 5 pages)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#0D503C] mr-2 flex-shrink-0" />
                        <span className="text-[#0D503C]/80">Comprehensive brand guidelines</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#0D503C] mr-2 flex-shrink-0" />
                        <span className="text-[#0D503C]/80">10 custom social media templates</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#0D503C] mr-2 flex-shrink-0" />
                        <span className="text-[#0D503C]/80">Business card design</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#0D503C] mr-2 flex-shrink-0" />
                        <span className="text-[#0D503C]/80">3 rounds of revisions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#0D503C] mr-2 flex-shrink-0" />
                        <span className="text-[#0D503C]/80">Priority delivery in 21 days</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            {/* Right column - Premium Payment Plan (only visible when premium is selected) */}
            {selectedPlan === 'premium' && (
              <div className="bg-[#0D503C]/5 rounded-2xl shadow-md overflow-hidden border-2 border-[#0D503C] border-dashed">
                <div className="p-8">
                  <div className="inline-flex items-center bg-[#F9A7A7]/30 text-[#0D503C] rounded-full px-3 py-1 text-sm font-medium mb-4 border border-[#F9A7A7]">
                    Payment Plan
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D503C] mb-2 font-serif">
                    Easy Monthly Payments
                  </h3>
                  <div className="flex items-baseline mt-4 mb-6">
                    <span className="text-4xl font-extrabold text-[#0D503C]">
                      €833
                    </span>
                    <span className="ml-2 text-[#0D503C]/70">{t('pricing.premium.plan')}</span>
                  </div>
                  <p className="text-[#0D503C]/80 mb-6">
                    Get started with a lower upfront cost. Same great service, split into manageable payments.
                  </p>
                  <a
                    href="#contact"
                    className="block w-full py-3 px-4 rounded-lg bg-[#F9A7A7] border border-[#0D503C]/20 text-[#0D503C] text-center font-medium hover:bg-[#F9A7A7]/80 transition-colors"
                  >
                    Choose Payment Plan
                  </a>
                </div>
                <div className="px-8 pb-8">
                  <h4 className="text-sm font-semibold text-[#0D503C] uppercase tracking-wider mb-4">
                    How it works:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 flex items-center justify-center text-xs font-bold text-[#0D503C] mr-3 border border-[#0D503C]/20">
                        1
                      </div>
                      <div>
                        <p className="text-[#0D503C]/80">
                          Pay €833 to start your project
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 flex items-center justify-center text-xs font-bold text-[#0D503C] mr-3 border border-[#0D503C]/20">
                        2
                      </div>
                      <div>
                        <p className="text-[#0D503C]/80">
                          Second payment of €833 after first draft approval
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 flex items-center justify-center text-xs font-bold text-[#0D503C] mr-3 border border-[#0D503C]/20">
                        3
                      </div>
                      <div>
                        <p className="text-[#0D503C]/80">
                          Final payment of €834 before delivery of completed files
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-[#0D503C]/20">
                    <p className="text-sm text-[#0D503C]/70">
                      Available exclusively for the Premium Package. Total cost remains the same (€2,500).
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center text-[#0D503C] hover:text-[#0A4231] font-medium"
            >
              {t('faq.contactUs')}
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
