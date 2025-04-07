import React from 'react';
import { Lightbulb, Rocket, CheckCircle, CalendarCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProcessSection = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      icon: <Lightbulb className="h-8 w-8 text-[#0D503C]" />,
      title: t('process.step1.title'),
      description: t('process.step1.description'),
    },
    {
      icon: <Rocket className="h-8 w-8 text-[#0D503C]" />,
      title: t('process.step2.title'),
      description: t('process.step2.description'),
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-[#0D503C]" />,
      title: t('process.step3.title'),
      description: t('process.step3.description'),
    },
    {
      icon: <CalendarCheck className="h-8 w-8 text-[#0D503C]" />,
      title: t('process.step4.title'),
      description: t('process.step4.description'),
    },
  ];

  return (
    <section id="process" className="section-padding bg-[#F5F5E9]">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D503C] mb-4 font-serif tracking-tight">
            {t('process.title')}
          </h2>
          <p className="text-xl text-[#0D503C]/80">
            {t('process.subtitle')}
          </p>
          <div className="w-24 h-1 bg-[#0D503C] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-[#F5F5E9] transition-all duration-300 ease-in-out border-2 border-[#0D503C] hover:shadow-md"
              style={{
                animation: 'scaleUp 0.5s ease-out forwards',
                animationDelay: `${index * 100 + 100}ms`
              }}
            >
              <div className="mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0D503C] mb-2 font-serif">
                {step.title}
              </h3>
              <p className="text-[#0D503C]/80">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center justify-center rounded-full bg-[#0D503C] px-6 py-3 text-base font-medium text-[#F5F5E9] shadow-sm hover:bg-[#0A4231] transition-colors"
          >
            {t('process.getStarted')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
