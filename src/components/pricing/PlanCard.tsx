
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
          <span className="ml-2 text-[#0D503C]/70">+ VAT</span>
        </div>
        <p className="text-[#0D503C]/80 mb-4">
          {planType === 'launch'
            ? 'Everything you need to launch a polished, professional brand — without the agency price tag.'
            : 'Designed for founders who want to look sharp and stay consistent — with a multi-page site, custom visuals, and a clear style guide to tie it all together.'}
        </p>
        <a
          href="#contact"
          className="block w-full py-3 px-4 rounded-lg bg-[#0D503C] text-[#F5F5E9] text-center font-medium hover:bg-[#0A4231] transition-colors"
        >
          {t('nav.getStarted')}
        </a>
        <p className="text-sm text-[#0D503C]/70 mt-3 text-center">
          No payment now — just reserve your spot.
        </p>
      </div>
      <div className="px-8 pb-8">
        <h4 className="text-sm font-semibold text-[#0D503C] uppercase tracking-wider mb-4">
          {planType === 'launch' ? 'INCLUDES:' : 'INCLUDES:'}
        </h4>
        <ul className="space-y-3">
          {planType === 'launch' ? (
            <>
              <PlanFeatureItem text="Custom 1-page website (like this one!)" />
              <PlanFeatureItem text="Professional logo design" />
              <PlanFeatureItem text="Tailored brand color palette" />
              <PlanFeatureItem text="1 round of revision" />
              <PlanFeatureItem text="Launch-ready in just 14 days" />
              <PlanFeatureItem text="Built by pro designers, based in Belgium 🇧🇪" />
            </>
          ) : (
            <>
              <PlanFeatureItem text="Custom 4-page website" />
              <PlanFeatureItem text="Professional logo design" />
              <PlanFeatureItem text="Brand style guide (logo, colors, fonts)" />
              <PlanFeatureItem text="5 custom social media templates" />
              <PlanFeatureItem text="2 rounds of revisions" />
              <PlanFeatureItem text="Launch-ready in just 14 days" />
              <PlanFeatureItem text="Built by pro designers, based in Belgium 🇧🇪" />
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
