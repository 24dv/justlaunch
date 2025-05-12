
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ComparisonTable from './comparison/ComparisonTable';
import ComparisonCardsGrid from './comparison/ComparisonCardsGrid';
import ComparisonCTA from './comparison/ComparisonCTA';
import { comparisonData, categoryIcons, categories } from './comparison/comparisonData';

const ComparisonSection: React.FC = () => {
  const { t } = useLanguage();
  
  // Get providers
  const providers = Object.keys(comparisonData);
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToWorks = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="section-padding bg-[#F5F5E9] border-y border-[#0D503C]/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D503C] mb-4 font-serif tracking-tight">
            {t('compare.title') || "Just Launch vs. Agency vs. Freelancer vs. DIY"}
          </h2>
          <p className="text-xl text-[#0D503C]/80 max-w-3xl mx-auto">
            {t('compare.subtitle') || "We designed Just Launch after seeing too many startups waste time and money doing it the hard way"}
          </p>
          <div className="w-24 h-1 bg-[#0D503C] mx-auto mt-6" />
        </div>
        
        {/* Deliverables line with pink background - Updated opacity to 30% */}
        <div className="text-center mb-8">
          <p className="text-lg font-medium text-[#0D503C] inline-flex items-center justify-center">
            <span className="bg-[#F9A7A7]/30 px-6 py-2 rounded-full">
              {t('compare.deliverables') || "Deliverables: Logo + Color palette + Custom 1-page website"}
            </span>
          </p>
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
        />
      </div>
    </section>
  );
};

export default ComparisonSection;
