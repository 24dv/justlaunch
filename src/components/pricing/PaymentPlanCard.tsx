
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const PaymentPlanCard = () => {
  const { t, language } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0D503C]/5 rounded-2xl shadow-md overflow-hidden border-2 border-[#0D503C] border-dashed relative transform transition-all duration-300 hover:shadow-xl">
      <div className="absolute top-0 right-0">
        <div className="inline-flex items-center bg-[#F9A7A7]/30 text-[#0D503C] rounded-tr-lg rounded-bl-lg px-3 py-1 text-sm font-medium border border-[#F9A7A7]">
          {language === 'en' ? 'Payment Plan' : 'Betalingsplan'}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0D503C] mb-2 font-serif">
          {t('pricing.paymentPlan.title')}
        </h3>
        <div className="flex items-baseline mt-3 mb-4">
          <span className="text-3xl font-extrabold text-[#0D503C]">
            {t('pricing.paymentPlan.price')}
          </span>
          <span className="ml-2 text-[#0D503C]/70">{language === 'en' ? '+ VAT' : '+ BTW'}</span>
        </div>
        <p className="text-[#0D503C]/80 mb-4 text-sm">
          {t('pricing.paymentPlan.description')}
        </p>
        <button
          onClick={scrollToContact}
          className="block w-full py-2 px-4 rounded-lg bg-[#F9A7A7] border border-[#0D503C]/20 text-[#0D503C] text-center font-medium hover:bg-[#F9A7A7]/80 transition-colors text-sm"
        >
          {t('pricing.paymentPlan.cta')}
        </button>
      </div>
      <div className="px-6 pb-6">
        <h4 className="text-xs font-semibold text-[#0D503C] uppercase tracking-wider mb-3">
          {t('pricing.paymentPlan.howItWorks')}
        </h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#F9A7A7]/50 flex items-center justify-center text-xs font-bold text-[#0D503C] mr-2 border border-[#0D503C]/20">
              1
            </div>
            <p className="text-[#0D503C]/80 text-sm">
              {t('pricing.paymentPlan.step1')}
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#F9A7A7]/50 flex items-center justify-center text-xs font-bold text-[#0D503C] mr-2 border border-[#0D503C]/20">
              2
            </div>
            <p className="text-[#0D503C]/80 text-sm">
              {t('pricing.paymentPlan.step2')}
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#F9A7A7]/50 flex items-center justify-center text-xs font-bold text-[#0D503C] mr-2 border border-[#0D503C]/20">
              3
            </div>
            <p className="text-[#0D503C]/80 text-sm">
              {t('pricing.paymentPlan.step3')}
            </p>
          </li>
        </ul>
        <div className="mt-4 pt-4 border-t border-[#0D503C]/20">
          <p className="text-xs text-[#0D503C]/70">
            {t('pricing.paymentPlan.note')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlanCard;
