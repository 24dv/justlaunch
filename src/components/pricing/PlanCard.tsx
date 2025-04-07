import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface PlanCardProps {
  planType: 'launch' | 'premium';
  onGetStarted: () => void;
}

const PlanCard = ({ planType, onGetStarted }: PlanCardProps) => {
  const { t, language } = useLanguage();

  const features = planType === 'launch' ? [
    t('pricing.launch.feature1'),
    t('pricing.launch.feature2'),
    t('pricing.launch.feature3'),
    t('pricing.launch.feature4'),
    t('pricing.launch.feature5'),
    t('pricing.launch.feature6'),
  ] : [
    t('pricing.premium.feature1'),
    t('pricing.premium.feature2'),
    t('pricing.premium.feature3'),
    t('pricing.premium.feature4'),
    t('pricing.premium.feature5'),
    t('pricing.premium.feature6'),
    t('pricing.premium.feature7'),
  ];

  const price = planType === 'launch' ? t('pricing.launch.price') : t('pricing.premium.price');
  const description = planType === 'launch' ? t('pricing.launch.description') : t('pricing.premium.description');
  const title = planType === 'launch' ? t('pricing.launch.title') : t('pricing.premium.title');

  const cardClass = "bg-[#F5F5E9] rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-2xl border-2 border-[#0D503C]";

  return (
    <div className={`${cardClass} overflow-hidden relative`}>
      <div className="p-8">
        <h3 className="text-3xl font-bold text-[#0D503C] mb-4 font-serif">
          {title}
        </h3>
        <div className="flex items-baseline mt-4 mb-6">
          <span className="text-5xl font-extrabold text-[#0D503C]">
            {price}
          </span>
          <span className="ml-2 text-[#0D503C]/70">{language === 'en' ? '+ VAT' : '+ BTW'}</span>
        </div>
        <p className="text-[#0D503C]/80 mb-6">
          {description}
        </p>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-[#0D503C]/90">
              <CheckCircle className="h-5 w-5 mr-2 text-[#0D503C]" />
              {feature}
            </li>
          ))}
        </ul>
      
      <button 
        onClick={onGetStarted}
        className="block w-full py-3 px-4 rounded-lg bg-[#0D503C] text-[#F5F5E9] text-center font-medium hover:bg-[#0D503C]/90 transition-colors"
      >
        {t('nav.getStarted')}
      </button>
      
    </div>
  );
};

export default PlanCard;
