
import React from 'react';
import { ClipboardList, Lightbulb, FileCode, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProcessSection = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: <ClipboardList className="h-10 w-10 text-white" />,
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      color: 'bg-blue-600'
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-white" />,
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      color: 'bg-yellow-500'
    },
    {
      icon: <FileCode className="h-10 w-10 text-white" />,
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      color: 'bg-purple-600'
    },
    {
      icon: <Rocket className="h-10 w-10 text-white" />,
      title: t('process.step4.title'),
      description: t('process.step4.description'),
      color: 'bg-green-600'
    }
  ];

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('process.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />

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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-lg text-gray-600">{step.description}</p>
                </div>
                
                <div 
                  className={`flex items-center justify-center mt-8 md:mt-0 opacity-0 animate-scale-up ${
                    index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'
                  }`}
                  style={{ animationDelay: `${index * 150 + 100}ms` }}
                >
                  <div className={`relative flex items-center justify-center w-20 h-20 rounded-full ${step.color} shadow-lg`}>
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center font-bold text-gray-900">
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
