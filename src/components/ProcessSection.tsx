
import React from 'react';
import { MessageSquare, Lightbulb, CheckCircle, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

const ProcessSection = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      number: 1,
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      number: 2,
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      number: 3,
    },
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: t('process.step4.title'),
      description: t('process.step4.description'),
      number: 4,
    },
  ];

  return (
    <section id="process" className="section-padding bg-[#F5F5E9] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10">
        <img 
          src="/lovable-uploads/7e1bb61d-a268-45b1-822c-b522ade6acf0.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D503C] mb-4 font-serif tracking-tight">
            {t('process.title')}
          </h2>
          <p className="text-lg md:text-xl text-[#0D503C]/80 max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
          <div className="w-24 h-1 bg-[#0D503C] mx-auto mt-6" />
        </div>

        {/* Timeline */}
        <div className="relative mb-14 mt-20 hidden md:block">
          <div className="absolute top-1/2 left-[12%] right-[12%] h-1 bg-[#CED4CE] -translate-y-1/2"></div>
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="absolute top-1/2 -translate-y-1/2"
              style={{ left: `${12 + (index * 25)}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-[#F9BBAD] flex items-center justify-center font-medium text-[#0D503C]">
                {step.number}
              </div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-[#F5F5E9] border border-[#CED4CE] rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="mb-5 w-16 h-16 rounded-full bg-[#0D503C] flex items-center justify-center mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0D503C] mb-3 text-center font-serif">
                  {step.title}
                </h3>
                <p className="text-[#0D503C]/80 text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0A4231] rounded-full px-8 py-6 text-lg font-medium"
          >
            {t('process.getStarted')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
