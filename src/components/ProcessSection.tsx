
import React from 'react';
import { ClipboardList, Lightbulb, FileEdit, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProcessSection = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: <ClipboardList className="h-10 w-10 text-[#F5F5E9]" />,
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      color: 'bg-[#0D503C]'
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-[#F5F5E9]" />,
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      color: 'bg-[#0D503C]'
    },
    {
      icon: <FileEdit className="h-10 w-10 text-[#F5F5E9]" />,
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      color: 'bg-[#0D503C]'
    },
    {
      icon: <Rocket className="h-10 w-10 text-[#F5F5E9]" />,
      title: t('process.step4.title'),
      description: t('process.step4.description'),
      color: 'bg-[#0D503C]'
    }
  ];

  return (
    <section id="process" className="section-padding py-24 bg-[#F5F5E9] relative overflow-hidden">
      {/* Background accents - now with z-index-1 to be above section bg but below cards */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-[#F9A7A7]/10 z-[1]"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-[#F9A7A7]/10 z-[1]"></div>
      
      <div className="container mx-auto px-4 relative z-[2]">
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
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group z-[3]"
            >
              {/* Number badge */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-[#F9A7A7] rounded-full shadow flex items-center justify-center font-bold text-[#0D503C]">
                {index + 1}
              </div>
              
              {/* Icon */}
              <div className={`flex items-center justify-center w-16 h-16 rounded-full ${step.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
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
        <div className="text-center mt-16 relative z-[2]">
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
