
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
    <div className="bg-[#0D503C]/5 rounded-2xl shadow-md overflow-hidden border-2 border-[#0D503C] border-dashed relative transform transition-all duration-300 hover:shadow-xl h-full flex flex-col">
      <div className="absolute top-0 right-0">
        <div className="inline-flex items-center bg-[#F9A7A7]/30 text-[#0D503C] rounded-tr-lg rounded-bl-lg px-3 py-1 text-xs font-medium border border-[#F9A7A7]">
          {language === 'en' ? 'Payment Plan' : 'Betalingsplan'}
        </div>
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-bold text-[#0D503C] mb-2 font-serif">
          {t('pricing.paymentPlan.title')}
        </h3>
        <div className="flex items-baseline mt-2 mb-3">
          <span className="text-2xl font-extrabold text-[#0D503C]">
            {t('pricing.paymentPlan.price')}
          </span>
          <span className="ml-1 text-[#0D503C]/70 text-sm">{language === 'en' ? '+ VAT' : '+ BTW'}</span>
        </div>
        <p className="text-[#0D503C]/80 mb-3 text-xs">
          {t('pricing.paymentPlan.description')}
        </p>
        <button
          onClick={scrollToContact}
          className="block w-full py-2 px-3 rounded-lg bg-[#F9A7A7] border border-[#0D503C]/20 text-[#0D503C] text-center font-medium hover:bg-[#F9A7A7]/80 transition-colors text-sm"
        >
          {t('pricing.paymentPlan.cta')}
        </button>
      </div>
      <div className="px-4 pb-4">
        <h4 className="text-xs font-semibold text-[#0D503C] uppercase tracking-wider mb-2">
          {t('pricing.paymentPlan.howItWorks')}
        </h4>
        <ul className="space-y-2">
          <li className="flex items-start">
            <div className="flex-shrink-0 h-4 w-4 rounded-full bg-[#F9A7A7]/50 flex items-center justify-center text-xs font-bold text-[#0D503C] mr-2 border border-[#0D503C]/20">
              1
            </div>
            <p className="text-[#0D503C]/80 text-xs">
              {t('pricing.paymentPlan.step1')}
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-4 w-4 rounded-full bg-[#F9A7A7]/50 flex items-center justify-center text-xs font-bold text-[#0D503C] mr-2 border border-[#0D503C]/20">
              2
            </div>
            <p className="text-[#0D503C]/80 text-xs">
              {t('pricing.paymentPlan.step2')}
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-4 w-4 rounded-full bg-[#F9A7A7]/50 flex items-center justify-center text-xs font-bold text-[#0D503C] mr-2 border border-[#0D503C]/20">
              3
            </div>
            <p className="text-[#0D503C]/80 text-xs">
              {t('pricing.paymentPlan.step3')}
            </p>
          </li>
        </ul>
        <div className="mt-3 pt-3 border-t border-[#0D503C]/20">
          <p className="text-xs text-[#0D503C]/70">
            {t('pricing.paymentPlan.note')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlanCard;
