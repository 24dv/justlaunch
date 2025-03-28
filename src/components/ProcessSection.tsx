
import React from 'react';
import { ClipboardList, Lightbulb, FileEdit, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProcessSection = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: <ClipboardList className="h-10 w-10 text-[#0D503C]" />,
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      number: 1
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-[#0D503C]" />,
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      number: 2
    },
    {
      icon: <FileEdit className="h-10 w-10 text-[#0D503C]" />,
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      number: 3
    },
    {
      icon: <Rocket className="h-10 w-10 text-[#0D503C]" />,
      title: t('process.step4.title'),
      description: t('process.step4.description'),
      number: 4
    }
  ];

  return (
    <section id="process" className="section-padding py-24 relative overflow-hidden">
      {/* Base section background - lowest z-index */}
      <div className="absolute inset-0 bg-[#F5F5E9] -z-20"></div>
      
      {/* This allows animated background to appear above the section background */}
      <div className="absolute inset-0 -z-10"></div>
      
      {/* Background accents - below cards but above animated background */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-[#F9A7A7]/10 z-10"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-[#F9A7A7]/10 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D503C] mb-6 font-serif">
            {t('process.title')}
          </h2>
          <p className="text-xl text-[#0D503C]/80 max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
          <div className="w-24 h-1 bg-[#0D503C] mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-[#F5F5E9] border border-[#0D503C]/20 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group z-30"
            >
              {/* Number badge */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-[#F9A7A7] rounded-full shadow flex items-center justify-center font-medium text-[#0D503C]">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0D503C] shadow mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-[#0D503C] mb-4 font-serif">{step.title}</h3>
              <p className="text-[#0D503C]/80">{step.description}</p>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0D503C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
        
        {/* Added call to action */}
        <div className="text-center mt-16 relative z-20">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center rounded-full bg-[#0D503C] px-8 py-3.5 text-base font-medium text-[#F5F5E9] shadow-sm hover:bg-[#0A4231] transition-all duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D503C]"
          >
            {t('nav.getStarted')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
