
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#F8F9FB] -z-10" />
      
      {/* Background gradient with blue tint */}
      <div className="absolute top-0 left-0 right-0 h-[70vh] bg-gradient-to-b from-white to-transparent -z-10" />
      
      {/* Abstract shapes with blue */}
      <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-blue-100 opacity-40 blur-3xl -z-10" />
      <div className="absolute bottom-[15%] left-[15%] w-[250px] h-[250px] rounded-full bg-blue-50 opacity-60 blur-3xl -z-10" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex animate-fade-in-up items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 mb-6 text-sm font-medium text-gray-700">
            <span className="rounded-full bg-blue-600 mr-2 px-2 py-0.5 text-xs text-white">{t('hero.badge')}</span> 
            {t('hero.badgeText')}
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up animate-delay-100 text-balance">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl animate-fade-in-up animate-delay-200 text-balance">
            {t('hero.subtitle')}
          </p>
          
          <a 
            href="#contact"
            className="animate-scale-up animate-delay-300 inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3.5 text-base md:text-lg font-medium text-white shadow-sm hover:bg-blue-700 transition-all duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {t('hero.cta')}
          </a>
          
          <div className="animate-fade-in animate-delay-500 absolute bottom-10 left-0 right-0 flex justify-center">
            <a 
              href="#features" 
              className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors"
            >
              {t('hero.scroll')}
              <ChevronDown className="ml-1 animate-bounce" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
