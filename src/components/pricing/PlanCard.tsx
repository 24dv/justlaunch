
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import PlanFeatureItem from './PlanFeatureItem';

interface PlanCardProps {
  planType: 'launch' | 'premium';
}

const PlanCard = ({ planType }: PlanCardProps) => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#F5F5E9] rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl border-2 border-[#0D503C]">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-[#0D503C] mb-2 font-serif">
          {planType === 'launch' ? t('pricing.launch.title') : t('pricing.premium.title')}
        </h3>
        <div className="flex items-baseline mt-4 mb-6">
          <span className="text-4xl font-extrabold text-[#0D503C]">
            {planType === 'launch' ? t('pricing.launch.price') : t('pricing.premium.price')}
          </span>
          <span className="ml-2 text-[#0D503C]/70">one-time payment</span>
        </div>
        <p className="text-[#0D503C]/80 mb-6">
          {planType === 'launch'
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
          {planType === 'launch' ? t('pricing.launch.includes') : t('pricing.premium.includes')}
        </h4>
        <ul className="space-y-3">
          {planType === 'launch' ? (
            <>
              <PlanFeatureItem text={t('features.logoDesign.title')} />
              <PlanFeatureItem text={t('features.landingSite.title')} />
              <PlanFeatureItem text="4 custom social media banners" />
              <PlanFeatureItem text="2 rounds of revisions" />
              <PlanFeatureItem text={t('features.delivery.title')} />
            </>
          ) : (
            <>
              <PlanFeatureItem text={`Everything in ${t('pricing.launch.title')}`} />
              <PlanFeatureItem text="Multi-page website (up to 5 pages)" />
              <PlanFeatureItem text="Comprehensive brand guidelines" />
              <PlanFeatureItem text="10 custom social media templates" />
              <PlanFeatureItem text="Business card design" />
              <PlanFeatureItem text="3 rounds of revisions" />
              <PlanFeatureItem text="Priority delivery in 21 days" />
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
