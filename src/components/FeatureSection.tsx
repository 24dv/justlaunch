
import React from 'react';
import { CheckCircle, Clock, Palette, Globe, Euro, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FeatureSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Palette className="h-8 w-8 text-[#0D503C]" />,
      title: t('features.logoDesign.title'),
      description: t('features.logoDesign.description'),
    },
    {
      icon: <Globe className="h-8 w-8 text-[#0D503C]" />,
      title: t('features.landingSite.title'),
      description: t('features.landingSite.description'),
    },
    {
      icon: <Clock className="h-8 w-8 text-[#0D503C]" />,
      title: t('features.delivery.title'),
      description: t('features.delivery.description'),
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-[#0D503C]" />,
      title: t('features.process.title'),
      description: t('features.process.description'),
    },
    {
      icon: <Euro className="h-8 w-8 text-[#0D503C]" />,
      title: t('features.pricing.title'),
      description: t('features.pricing.description'),
    },
    {
      icon: <Zap className="h-8 w-8 text-[#0D503C]" />,
      title: t('features.trusted.title'),
      description: t('features.trusted.description'),
    },
  ];

  return (
    <section id="features" className="section-padding bg-[#F5F5E9]">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D503C] mb-4 font-serif tracking-tight">
            {t('features.title')}
          </h2>
          <p className="text-xl text-[#0D503C]/80">
            {t('features.subtitle')}
          </p>
          <div className="w-24 h-1 bg-[#0D503C] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-[#F5F5E9] transition-all duration-300 ease-in-out border-2 border-[#0D503C] hover:shadow-md opacity-0"
              style={{
                animation: 'scaleUp 0.5s ease-out forwards',
                animationDelay: `${index * 100 + 100}ms`
              }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0D503C] mb-2 font-serif">
                {feature.title}
              </h3>
              <p className="text-[#0D503C]/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
