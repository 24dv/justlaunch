
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const { t, language } = useLanguage();
  const rotatingWords = ['Startup', 'Brand', 'Project', 'Dream', 'Venture'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 500);
    }, 1300); // Changed to 1300ms interval
    
    return () => clearInterval(interval);
  }, []);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#F5F5E9] -z-10" />
      
      {/* Border frame - adjusted to not interfere with navbar */}
      <div className="absolute top-[90px] bottom-8 left-8 right-8 border-[6px] border-[#0D503C] rounded-xl z-0 hidden md:block" />
      
      {/* Pink accents - increased size by 50% */}
      <div className="absolute top-[15%] left-[15%] w-9 h-9 rounded-full bg-[#F9A7A7] opacity-80 z-0" />
      <div className="absolute bottom-[15%] right-[15%] w-9 h-9 rounded-full bg-[#F9A7A7] opacity-80 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#0D503C] mb-10 leading-tight animate-fade-in-up animate-delay-100 tracking-tight font-serif">
            Launch Your <span className="relative inline-block min-w-[120px] sm:min-w-[150px] md:min-w-[180px]">
              <span className={`inline-block transition-opacity duration-500 text-[#F9A7A7] ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                {rotatingWords[currentWordIndex]}
              </span>
            </span>
            <br />
            Fast—From Idea to 
            <br />
            Online in Days!
          </h1>
          
          <p className="text-xl md:text-2xl text-[#0D503C] mb-12 max-w-2xl animate-fade-in-up animate-delay-200 font-medium">
            {t('hero.subtitle')}
          </p>
          
          <div className="w-48 h-1 bg-[#0D503C] mb-12 animate-fade-in-up animate-delay-300" />
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="animate-scale-up animate-delay-300 inline-flex items-center justify-center rounded-full bg-[#0D503C] px-8 py-3.5 text-base md:text-lg font-medium text-[#F5F5E9] shadow-lg hover:bg-[#0A4231] transition-all duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D503C] mb-8 border-2 border-[#F5F5E9]/20"
          >
            {t('hero.cta')}
          </button>
          
          <div className="animate-fade-in animate-delay-500 text-center w-full mt-4">
            <p className="text-sm text-[#0D503C] font-medium">
              {language === 'en' ? "Get started in just a few clicks" : "Begin met slechts een paar klikken"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
