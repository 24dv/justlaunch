
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import PlanFeatureItem from './PlanFeatureItem';
import { CircleDollarSign } from 'lucide-react';

interface PlanCardProps {
  planType: 'launch' | 'premium';
  showPaymentOption?: boolean;
  onPaymentOptionClick?: () => void;
}

const PlanCard = ({ planType, showPaymentOption, onPaymentOptionClick }: PlanCardProps) => {
  const { t, language } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F5F5E9] rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl border-2 border-[#0D503C] relative">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-[#0D503C] mb-2 font-serif">
          {planType === 'launch' 
            ? t('pricing.launch.title')
            : t('pricing.premium.title')}
        </h3>
        <div className="flex items-baseline mt-4 mb-6">
          <span className="text-4xl font-extrabold text-[#0D503C]">
            {planType === 'launch' 
              ? t('pricing.launch.price')
              : t('pricing.premium.price')}
          </span>
          <span className="ml-2 text-[#0D503C]/70">{language === 'en' ? "+ VAT" : "+ BTW"}</span>
        </div>
        <p className="text-[#0D503C]/80 mb-4">
          {planType === 'launch'
            ? t('pricing.launch.description')
            : t('pricing.premium.description')}
        </p>
        <div className="space-y-3">
          <button
            onClick={scrollToContact}
            className="block w-full py-3 px-4 rounded-lg bg-[#0D503C] text-[#F5F5E9] text-center font-medium hover:bg-[#0A4231] transition-colors"
          >
            {language === 'en' ? "Let's Launch" : "Aan de Slag!"}
          </button>
          
          {showPaymentOption && (
            <button
              onClick={onPaymentOptionClick}
              className="block w-full py-3 px-4 rounded-lg bg-[#F9A7A7]/20 border border-[#F9A7A7] text-[#0D503C] text-center font-medium hover:bg-[#F9A7A7]/30 transition-colors flex items-center justify-center gap-2"
            >
              <CircleDollarSign className="h-5 w-5" />
              {language === 'en' ? 'See Monthly Payment Option' : 'Bekijk Maandelijkse Betalingsoptie'}
            </button>
          )}
        </div>
        <p className="text-sm text-[#0D503C]/70 mt-3 text-center">
          {t('pricing.noPayment')}
        </p>
      </div>
      <div className="px-8 pb-8">
        <h4 className="text-sm font-semibold text-[#0D503C] uppercase tracking-wider mb-4">
          {planType === 'launch' ? t('pricing.launch.includes') : t('pricing.premium.includes')}
        </h4>
        <ul className="space-y-3">
          {planType === 'launch' ? (
            <>
              <PlanFeatureItem text={t('pricing.launch.feature1')} />
              <PlanFeatureItem text={t('pricing.launch.feature2')} />
              <PlanFeatureItem text={t('pricing.launch.feature3')} />
              <PlanFeatureItem text={t('pricing.launch.feature4')} />
              <PlanFeatureItem text={t('pricing.launch.feature5')} />
              <PlanFeatureItem text={t('pricing.launch.feature6')} />
            </>
          ) : (
            <>
              <PlanFeatureItem text={t('pricing.premium.feature1')} />
              <PlanFeatureItem text={t('pricing.premium.feature2')} />
              <PlanFeatureItem text={t('pricing.premium.feature3')} />
              <PlanFeatureItem text={t('pricing.premium.feature4')} />
              <PlanFeatureItem text={t('pricing.premium.feature5')} />
              <PlanFeatureItem text={t('pricing.premium.feature6')} />
              <PlanFeatureItem text={t('pricing.premium.feature7')} />
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
