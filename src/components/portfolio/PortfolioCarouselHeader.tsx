
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const PortfolioCarouselHeader = () => {
  const { t } = useLanguage();

  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-serif font-bold text-[#0D503C] mb-4">
        {t('carousel.title')}
      </h2>
      <p className="text-xl text-[#0D503C]/80 max-w-2xl mx-auto">
        {t('carousel.subtitle')}
      </p>
      <div className="w-24 h-1 bg-[#F9A7A7] mx-auto mt-6" />
    </div>
  );
};

export default PortfolioCarouselHeader;
