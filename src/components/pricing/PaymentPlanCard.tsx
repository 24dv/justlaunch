
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const PaymentPlanCard = () => {
  const { t } = useLanguage();

  return (
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
          Get started with a lower upfront cost. Same great service, split into manageable monthly payments.
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
                Second payment of €833 one month after project start
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 flex items-center justify-center text-xs font-bold text-[#0D503C] mr-3 border border-[#0D503C]/20">
              3
            </div>
            <div>
              <p className="text-[#0D503C]/80">
                Final payment of €834 one month after second payment
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
  );
};

export default PaymentPlanCard;
