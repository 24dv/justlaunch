
import React from 'react';
import { ClipboardList, Lightbulb, FileEdit, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';

const ProcessSection = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: <ClipboardList className="h-10 w-10 text-[#F5F5E9]" />,
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      number: 1
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-[#F5F5E9]" />,
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      number: 2
    },
    {
      icon: <FileEdit className="h-10 w-10 text-[#F5F5E9]" />,
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      number: 3
    },
    {
      icon: <Rocket className="h-10 w-10 text-[#F5F5E9]" />,
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

        {/* New horizontal timeline layout for desktop */}
        <div className="hidden lg:flex flex-col gap-4 max-w-6xl mx-auto">
          <div className="relative h-2 bg-[#0D503C]/20 rounded-full mx-20 mb-8">
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#F9A7A7] rounded-full flex items-center justify-center text-[#0D503C] font-bold">
                    {step.number}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="border-[#0D503C]/20 bg-[#F5F5E9]/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="h-2 w-full bg-[#0D503C]" />
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0D503C] mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0D503C] mb-4 font-serif text-center">{step.title}</h3>
                  <p className="text-[#0D503C]/80 text-center">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Vertical card layout for mobile and tablet */}
        <div className="lg:hidden space-y-8 max-w-md mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0D503C]/20 ml-4">
                {index < steps.length - 1 && (
                  <div className="absolute top-12 bottom-0 left-0 w-1 bg-[#0D503C]/20"></div>
                )}
              </div>
              
              <Card className="ml-10 border-[#0D503C]/20 bg-[#F5F5E9]/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <div className="absolute -left-4 top-8 w-8 h-8 bg-[#F9A7A7] rounded-full flex items-center justify-center text-[#0D503C] font-bold">
                  {step.number}
                </div>
                <div className="h-2 w-full bg-[#0D503C]" />
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0D503C] mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0D503C] mb-4 font-serif">{step.title}</h3>
                  <p className="text-[#0D503C]/80">{step.description}</p>
                </CardContent>
              </Card>
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
