
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const PaymentPlanCard = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-[#0D503C]/5 rounded-2xl shadow-md overflow-hidden border-2 border-[#0D503C] border-dashed relative">
      <div className="absolute top-0 right-0">
        <div className="inline-flex items-center bg-[#F9A7A7]/30 text-[#0D503C] rounded-tr-lg rounded-bl-lg px-3 py-1 text-sm font-medium border border-[#F9A7A7]">
          {language === 'en' ? 'Payment Plan' : 'Betalingsplan'}
        </div>
      </div>
      <div className="p-8 mt-4">
        <h3 className="text-2xl font-bold text-[#0D503C] mb-2 font-serif">
          {t('pricing.paymentPlan.title')}
        </h3>
        <div className="flex items-baseline mt-4 mb-6">
          <span className="text-4xl font-extrabold text-[#0D503C]">
            {t('pricing.paymentPlan.price')}
          </span>
          <span className="ml-2 text-[#0D503C]/70">{language === 'en' ? '+ VAT' : '+ BTW'}</span>
        </div>
        <p className="text-[#0D503C]/80 mb-4">
          {t('pricing.paymentPlan.description')}
        </p>
        <a
          href="#contact"
          className="block w-full py-3 px-4 rounded-lg bg-[#F9A7A7] border border-[#0D503C]/20 text-[#0D503C] text-center font-medium hover:bg-[#F9A7A7]/80 transition-colors"
        >
          {t('pricing.paymentPlan.cta')}
        </a>
        <p className="text-sm text-[#0D503C]/70 mt-3 text-center">
          {t('pricing.paymentPlan.tagline')}
        </p>
      </div>
      <div className="px-8 pb-8">
        <h4 className="text-sm font-semibold text-[#0D503C] uppercase tracking-wider mb-4">
          {t('pricing.paymentPlan.howItWorks')}
        </h4>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 flex items-center justify-center text-xs font-bold text-[#0D503C] mr-3 border border-[#0D503C]/20">
              1
            </div>
            <div>
              <p className="text-[#0D503C]/80">
                {t('pricing.paymentPlan.step1')}
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 flex items-center justify-center text-xs font-bold text-[#0D503C] mr-3 border border-[#0D503C]/20">
              2
            </div>
            <div>
              <p className="text-[#0D503C]/80">
                {t('pricing.paymentPlan.step2')}
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 flex items-center justify-center text-xs font-bold text-[#0D503C] mr-3 border border-[#0D503C]/20">
              3
            </div>
            <div>
              <p className="text-[#0D503C]/80">
                {t('pricing.paymentPlan.step3')}
              </p>
            </div>
          </li>
        </ul>
        <div className="mt-6 pt-6 border-t border-[#0D503C]/20">
          <p className="text-sm text-[#0D503C]/70">
            {t('pricing.paymentPlan.note')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlanCard;
