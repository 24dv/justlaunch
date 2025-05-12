
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ComparisonTable from './comparison/ComparisonTable';
import ComparisonCardsGrid from './comparison/ComparisonCardsGrid';
import ComparisonCTA from './comparison/ComparisonCTA';
import { useComparisonData, categoryIcons, categories } from './comparison/comparisonData';

const ComparisonSection: React.FC = () => {
  const { t } = useLanguage();
  const { comparisonData, providers } = useComparisonData();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToWork = () => {
    const element = document.getElementById('carousel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="section-padding bg-[#F5F5E9]" id="compare">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D503C] mb-5 font-serif tracking-tight">
            {t('compare.title')}
          </h2>
          <p className="text-xl text-[#0D503C]/80 max-w-3xl mx-auto mb-6">
            {t('compare.subtitle')}
          </p>
          <div className="w-24 h-1 bg-[#0D503C] mx-auto mb-8" />
        </div>
        
        {/* Deliverables line with pink background */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center">
            <div className="bg-[#F9A7A7]/30 border border-[#F9A7A7] px-6 py-2.5 rounded-full shadow-sm">
              <p className="text-sm md:text-base font-medium text-[#0D503C]">
                <span className="font-bold">{t('compare.deliverables.prefix')}:</span> {t('compare.deliverables.content')}
              </p>
            </div>
          </div>
        </div>
        
        {/* Desktop version - Table */}
        <ComparisonTable 
          categories={categories}
          providers={providers}
          comparisonData={comparisonData}
          categoryIcons={categoryIcons}
        />
        
        {/* Mobile version - Cards */}
        <ComparisonCardsGrid 
          providers={providers}
          comparisonData={comparisonData}
        />
        
        {/* CTA Section */}
        <ComparisonCTA
          onContactClick={scrollToContact}
          onFormClick={() => window.open("https://forms.justlaunch.be/", "_blank")}
          onWorkClick={scrollToWork}
        />
      </div>
    </section>
  );
};

export default ComparisonSection;
