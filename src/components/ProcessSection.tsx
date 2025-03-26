
import React from 'react';
import { ClipboardList, Lightbulb, FileCode, Rocket } from 'lucide-react';
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
      icon: <FileCode className="h-10 w-10 text-[#F5F5E9]" />,
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
    <section id="process" className="section-padding bg-[#F5F5E9]">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D503C] mb-4 font-serif">
            {t('process.title')}
          </h2>
          <p className="text-xl text-[#0D503C]/80">
            {t('process.subtitle')}
          </p>
          <div className="w-24 h-1 bg-[#0D503C] mx-auto mt-6" />
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-[#0D503C]/30 hidden md:block" />

          <div className="space-y-24 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative md:grid md:grid-cols-2 md:gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:grid-flow-dense'
                }`}
              >
                <div 
                  className={`relative z-10 opacity-0 ${
                    index % 2 === 0 
                      ? 'md:pr-12 md:text-right animate-slide-in-left' 
                      : 'md:pl-12 md:col-start-2 animate-slide-in-right'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h3 className="text-2xl font-bold text-[#0D503C] mb-3 font-serif">{step.title}</h3>
                  <p className="text-lg text-[#0D503C]/80">{step.description}</p>
                </div>
                
                <div 
                  className={`flex items-center justify-center mt-8 md:mt-0 opacity-0 animate-scale-up ${
                    index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'
                  }`}
                  style={{ animationDelay: `${index * 150 + 100}ms` }}
                >
                  <div className={`relative flex items-center justify-center w-20 h-20 rounded-full ${step.color} shadow-lg border-2 border-[#F9A7A7]`}>
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#F9A7A7] rounded-full shadow-md flex items-center justify-center font-bold text-[#0D503C]">
                      {index + 1}
                    </div>
                    {step.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
