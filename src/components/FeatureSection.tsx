
import React from 'react';
import { CheckCircle, Clock, Palette, Globe, DollarSign, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FeatureSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Palette className="h-8 w-8 text-brand-500" />,
      title: t('features.logoDesign.title'),
      description: t('features.logoDesign.description'),
    },
    {
      icon: <Globe className="h-8 w-8 text-brand-500" />,
      title: t('features.landingSite.title'),
      description: t('features.landingSite.description'),
    },
    {
      icon: <Clock className="h-8 w-8 text-brand-500" />,
      title: t('features.delivery.title'),
      description: t('features.delivery.description'),
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-brand-500" />,
      title: t('features.process.title'),
      description: t('features.process.description'),
    },
    {
      icon: <DollarSign className="h-8 w-8 text-brand-500" />,
      title: t('features.pricing.title'),
      description: t('features.pricing.description'),
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-500" />,
      title: t('features.support.title'),
      description: t('features.support.description'),
    },
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card opacity-0"
              style={{
                animation: 'scaleUp 0.5s ease-out forwards',
                animationDelay: `${index * 100 + 100}ms`
              }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
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
