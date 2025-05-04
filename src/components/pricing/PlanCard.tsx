
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import PlanFeatureItem from './PlanFeatureItem';
import { Euro } from 'lucide-react';

interface PlanCardProps {
  planType: 'launch' | 'premium' | 'launchsite';
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
    <div className="bg-[#F5F5E9] rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl border-2 border-[#0D503C] relative h-fit">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-[#0D503C] mb-2 font-serif">
          {planType === 'launch' 
            ? t('pricing.launch.title')
            : planType === 'premium'
              ? t('pricing.premium.title')
              : t('pricing.launchsite.title')}
        </h3>
        <div className="flex items-baseline mt-4 mb-6">
          <span className="text-4xl md:text-3xl lg:text-4xl font-extrabold text-[#0D503C]">
            {planType === 'launch' 
              ? t('pricing.launch.price')
              : planType === 'premium'
                ? t('pricing.premium.price')
                : t('pricing.launchsite.price')}
          </span>
          <span className="ml-2 text-[#0D503C]/70 text-sm md:text-xs lg:text-sm whitespace-nowrap">{language === 'en' ? "+ VAT" : "+ BTW"}</span>
        </div>
        <p className="text-[#0D503C]/80 mb-4">
          {planType === 'launch'
            ? t('pricing.launch.description')
            : planType === 'premium'
              ? t('pricing.premium.description')
              : t('pricing.launchsite.description')}
        </p>
        <div className="space-y-3">
          <button
            onClick={scrollToContact}
            className="block w-full py-3 px-4 rounded-lg bg-[#0D503C] text-[#F5F5E9] text-center font-medium hover:bg-[#0A4231] transition-colors"
          >
            {t('nav.getStarted')}
          </button>
          
          {showPaymentOption && (
            <button
              onClick={onPaymentOptionClick}
              className="block w-full py-3 px-4 rounded-lg bg-[#F9A7A7]/20 border border-[#F9A7A7] text-[#0D503C] text-center font-medium hover:bg-[#F9A7A7]/30 transition-colors flex items-center justify-center gap-2"
            >
              <Euro className="h-5 w-5" />
              {language === 'en' ? 'Payment Plan' : 'Betalingsplan'}
            </button>
          )}
        </div>
        <p className="text-sm text-[#0D503C]/70 mt-3 text-center">
          {t('pricing.noPaymentCall')}
        </p>
      </div>
      <div className="px-8 pb-8">
        <h4 className="text-sm font-semibold text-[#0D503C] uppercase tracking-wider mb-4">
          {planType === 'launch' 
            ? t('pricing.launch.includes') 
            : planType === 'premium' 
              ? t('pricing.premium.includes')
              : t('pricing.launchsite.includes')}
        </h4>
        <ul className="space-y-3">
          {planType === 'launchsite' ? (
            <>
              <PlanFeatureItem text={t('pricing.launchsite.feature1')} isBold={true} />
              <PlanFeatureItem text={t('pricing.launchsite.feature2')} />
              <PlanFeatureItem text={t('pricing.launchsite.feature3')} />
              <PlanFeatureItem text={t('pricing.launchsite.feature4')} />
            </>
          ) : planType === 'launch' ? (
            <>
              <PlanFeatureItem text={t('pricing.launch.feature1')} isBold={true} />
              <PlanFeatureItem text={t('pricing.launch.feature2')} />
              <PlanFeatureItem text={t('pricing.launch.feature3')} isBold={true} />
              <PlanFeatureItem text={t('pricing.launch.feature4')} isBold={true} />
              <PlanFeatureItem text={t('pricing.launch.feature5')} />
              <PlanFeatureItem text={t('pricing.launch.feature6')} />
            </>
          ) : (
            <>
              <PlanFeatureItem text={t('pricing.premium.feature1')} isBold={true} />
              <PlanFeatureItem text={t('pricing.premium.feature2')} isBold={true} />
              <PlanFeatureItem text={t('pricing.premium.feature3')} />
              <PlanFeatureItem text={t('pricing.premium.feature4')} isBold={true} />
              <PlanFeatureItem text={t('pricing.premium.feature5')} isBold={true} />
              <PlanFeatureItem text={t('pricing.premium.feature6')} isBold={true} />
              <PlanFeatureItem text={t('pricing.premium.feature7')} />
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
