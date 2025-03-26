
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Carousel = () => {
  const { t } = useLanguage();
  
  return (
    <section id="portfolio" className="section-padding bg-[#F5F5E9] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-[#0D503C] mb-4">
            {t('carousel.title')}
          </h2>
          <p className="text-xl text-[#0D503C]/80 max-w-2xl mx-auto">
            {t('carousel.subtitle')}
          </p>
          <div className="w-24 h-1 bg-[#F9A7A7] mx-auto mt-6" />
        </div>

        {/* Placeholder for carousel content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white shadow-lg rounded-xl p-6 border border-[#0D503C]/10">
            <div className="text-center mb-4">
              <span className="text-sm uppercase tracking-wider text-[#0D503C]/70">
                {t('carousel.before')}
              </span>
            </div>
            {/* Placeholder image or content */}
            <div className="bg-[#F5F5E9] rounded-lg h-64 flex items-center justify-center">
              <p className="text-[#0D503C]/50">Before Image</p>
            </div>
          </div>
          
          <div className="bg-white shadow-lg rounded-xl p-6 border border-[#0D503C]/10">
            <div className="text-center mb-4">
              <span className="text-sm uppercase tracking-wider text-[#0D503C]/70">
                {t('carousel.after')}
              </span>
            </div>
            {/* Placeholder image or content */}
            <div className="bg-[#F5F5E9] rounded-lg h-64 flex items-center justify-center">
              <p className="text-[#0D503C]/50">After Image</p>
            </div>
          </div>
        </div>

        {/* Navigation placeholders */}
        <div className="flex justify-center space-x-4 mt-8">
          <button className="px-4 py-2 bg-[#0D503C] text-[#F5F5E9] rounded-full hover:bg-[#0D503C]/90 transition-colors">
            {t('carousel.previous')}
          </button>
          <button className="px-4 py-2 bg-[#0D503C] text-[#F5F5E9] rounded-full hover:bg-[#0D503C]/90 transition-colors">
            {t('carousel.next')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
