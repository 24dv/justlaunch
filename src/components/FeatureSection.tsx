
import React from 'react';
import { CheckCircle, Clock, Palette, Globe, Euro, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FeatureSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Palette className="h-8 w-8 text-[#0D503C]" />,
      title: "Professional logo and brand colors",
      description: "Stand out from day one with a logo and colors that reflect your brand identity and values.",
    },
    {
      icon: <Globe className="h-8 w-8 text-[#0D503C]" />,
      title: "Customised single-page website",
      description: t('features.landingSite.description'),
    },
    {
      icon: <Clock className="h-8 w-8 text-[#0D503C]" />,
      title: t('features.delivery.title'),
      description: t('features.delivery.description'),
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-[#0D503C]" />,
      title: "Simple process",
      description: "A streamlined process powered by expert designers and smart AI tools.",
    },
    {
      icon: <Euro className="h-8 w-8 text-[#0D503C]" />,
      title: "Affordable pricing",
      description: "Top-tier design for €1,500 — and €10/mo for fast, secure hosting & peace of mind.",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#0D503C]" />,
      title: "Tried, Tested, Trusted",
      description: "Dozens of brands launched fast, built to look and feel pro.",
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
            Whether you're a founder with a bold idea, a freelancer leveling up, or launching a side hustle — this is for you. Our Launch Package gets you live fast, without the stress or wait.
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
