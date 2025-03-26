
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#F5F5E9] -z-10" />
      
      {/* Border frame */}
      <div className="absolute inset-0 border-[6px] border-[#0D503C] m-8 rounded-xl z-0 hidden md:block" />
      
      {/* Pink accents */}
      <div className="absolute top-[15%] left-[15%] w-6 h-6 rounded-full bg-[#F9A7A7] opacity-80 z-0" />
      <div className="absolute bottom-[15%] right-[15%] w-6 h-6 rounded-full bg-[#F9A7A7] opacity-80 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#0D503C] mb-10 leading-tight animate-fade-in-up animate-delay-100 tracking-tight font-serif">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-[#0D503C] mb-12 max-w-2xl animate-fade-in-up animate-delay-200 font-medium">
            {t('hero.subtitle')}
          </p>
          
          <div className="w-48 h-1 bg-[#0D503C] mb-12 animate-fade-in-up animate-delay-300" />
          
          <a 
            href="#contact"
            className="animate-scale-up animate-delay-300 inline-flex items-center justify-center rounded-full bg-[#0D503C] px-8 py-3.5 text-base md:text-lg font-medium text-[#F5F5E9] shadow-sm hover:bg-[#0A4231] transition-all duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D503C]"
          >
            {t('hero.cta')}
          </a>
          
          <div className="animate-fade-in animate-delay-500 absolute bottom-10 left-0 right-0 flex justify-center">
            <a 
              href="#features" 
              className="inline-flex items-center text-sm text-[#0D503C] hover:text-[#0A4231] transition-colors"
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
