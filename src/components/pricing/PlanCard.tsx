
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import PlanFeatureItem from './PlanFeatureItem';
import { Euro } from 'lucide-react';
import { Badge } from '../ui/badge';

interface PlanCardProps {
  planType: 'launch' | 'premium' | 'launchsite';
  showPaymentOption?: boolean;
  onPaymentOptionClick?: () => void;
  isPopular?: boolean;
}

const PlanCard = ({ planType, showPaymentOption, onPaymentOptionClick, isPopular = false }: PlanCardProps) => {
  const { t, language } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`
        rounded-2xl shadow-xl overflow-hidden 
        transform transition-all duration-300 hover:shadow-2xl 
        border-2 relative h-fit
        ${isPopular 
          ? 'border-[#0D503C] scale-105 shadow-2xl bg-[#0D503C]' 
          : 'border-[#0D503C] bg-[#F5F5E9]'}
      `}
    >
      {/* Most Popular Badge */}
      {isPopular && (
        <div className="absolute -top-1 -right-1 transform rotate-12">
          <Badge 
            variant="default"
            className="bg-[#0D503C] text-[#F5F5E9] px-3 py-1 font-bold shadow-md border border-[#F5F5E9]/30"
          >
            {t('pricing.mostPopular')}
          </Badge>
        </div>
      )}

      <div className="p-8">
        <h3 className={`text-2xl font-bold mb-2 font-serif ${isPopular ? 'text-[#F5F5E9]' : 'text-[#0D503C]'}`}>
          {planType === 'launch' 
            ? t('pricing.launch.title')
            : planType === 'premium'
              ? t('pricing.premium.title')
              : t('pricing.launchsite.title')}
        </h3>
        <div className="flex items-baseline mt-4 mb-6">
          <span className={`text-4xl md:text-3xl lg:text-4xl font-extrabold ${isPopular ? 'text-[#F5F5E9]' : 'text-[#0D503C]'}`}>
            {planType === 'launch' 
              ? t('pricing.launch.price')
              : planType === 'premium'
                ? t('pricing.premium.price')
                : t('pricing.launchsite.price')}
          </span>
          <span className={`ml-2 ${isPopular ? 'text-[#F5F5E9]/70' : 'text-[#0D503C]/70'} text-sm md:text-xs lg:text-sm whitespace-nowrap`}>
            {language === 'en' ? "+ VAT" : "+ BTW"}
          </span>
        </div>
        <p className={`mb-4 ${isPopular ? 'text-[#F5F5E9]/80' : 'text-[#0D503C]/80'}`}>
          {planType === 'launch'
            ? t('pricing.launch.description')
            : planType === 'premium'
              ? t('pricing.premium.description')
              : t('pricing.launchsite.description')}
        </p>
        <div className="space-y-3">
          <button
            onClick={scrollToContact}
            className={`block w-full py-3 px-4 rounded-lg text-center font-medium transition-colors
              ${isPopular 
                ? 'bg-[#F5F5E9] text-[#0D503C] hover:bg-[#F5F5E9]/90' 
                : 'bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0A4231]'}`}
          >
            {t('nav.getStarted')}
          </button>
          
          {showPaymentOption && (
            <button
              onClick={onPaymentOptionClick}
              className={`block w-full py-3 px-4 rounded-lg text-center font-medium transition-colors flex items-center justify-center gap-2
                ${isPopular
                  ? 'bg-transparent border border-[#F5F5E9]/30 text-[#F5F5E9] hover:bg-[#F5F5E9]/10'
                  : 'bg-[#F9A7A7]/20 border border-[#F9A7A7] text-[#0D503C] hover:bg-[#F9A7A7]/30'}`}
            >
              <Euro className="h-5 w-5" />
              {language === 'en' ? 'Payment Plan' : 'Betalingsplan'}
            </button>
          )}
        </div>
        <p className={`text-sm mt-3 text-center ${isPopular ? 'text-[#F5F5E9]/70' : 'text-[#0D503C]/70'}`}>
          {t('pricing.noPaymentCall')}
        </p>
      </div>
      <div className="px-8 pb-8">
        <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isPopular ? 'text-[#F5F5E9]' : 'text-[#0D503C]'}`}>
          {planType === 'launch' 
            ? t('pricing.launch.includes') 
            : planType === 'premium' 
              ? t('pricing.premium.includes')
              : t('pricing.launchsite.includes')}
        </h4>
        <ul className="space-y-3">
          {planType === 'launchsite' ? (
            <>
              <PlanFeatureItem text={t('pricing.launchsite.feature1')} isBold={true} inversed={isPopular} />
              <PlanFeatureItem text={t('pricing.launchsite.feature2')} inversed={isPopular} />
              <PlanFeatureItem text={t('pricing.launchsite.feature3')} inversed={isPopular} />
              <PlanFeatureItem text={t('pricing.launchsite.feature4')} inversed={isPopular} />
            </>
          ) : planType === 'launch' ? (
            <>
              <PlanFeatureItem text={t('pricing.launch.feature1')} isBold={true} inversed={isPopular} />
              <PlanFeatureItem text={t('pricing.launch.feature2')} inversed={isPopular} />
              <PlanFeatureItem text={t('pricing.launch.feature3')} isBold={true} inversed={isPopular} />
              <PlanFeatureItem text={t('pricing.launch.feature4')} isBold={true} inversed={isPopular} />
              <PlanFeatureItem text={t('pricing.launch.feature5')} inversed={isPopular} />
              <PlanFeatureItem text={t('pricing.launch.feature6')} inversed={isPopular} />
            </>
          ) : (
            <>
              <PlanFeatureItem text={t('pricing.premium.feature1')} isBold={true} inversed={isPopular} />
              <PlanFeatureItem text={t('pricing.premium.feature2')} isBold={true} inversed={isPopular} />
              <PlanFeatureItem text={t('pricing.premium.feature3')} inversed={isPopular} />
              <PlanFeatureItem text={t('pricing.premium.feature4')} isBold={true} inversed={isPopular} />
              <PlanFeatureItem text={t('pricing.premium.feature5')} isBold={true} inversed={isPopular} />
              <PlanFeatureItem text={t('pricing.premium.feature6')} isBold={true} inversed={isPopular} />
              <PlanFeatureItem text={t('pricing.premium.feature7')} inversed={isPopular} />
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
