
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useComparisonData } from './useComparisonData';
import ComparisonTable from './ComparisonTable';
import ComparisonMobileCards from './ComparisonMobileCards';
import ComparisonCTA from './ComparisonCTA';

const ComparisonSection: React.FC = () => {
  const { t } = useLanguage();
  const { comparisonData, categories, providers } = useComparisonData();
  
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
  
  const openQuiz = () => {
    window.open('https://forms.justlaunch.be/', '_blank');
    localStorage.setItem('quizTaken', 'true');
  };
  
  return (
    <section id="compare" className="section-padding bg-[#F5F5E9] border-y border-[#0D503C]/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D503C] mb-4 font-serif tracking-tight">
            {t('comparison.title')}
          </h2>
          <p className="text-xl text-[#0D503C]/80 max-w-3xl mx-auto">
            {t('comparison.subtitle')}
          </p>
          <div className="w-24 h-1 bg-[#0D503C] mx-auto mt-6" />
        </div>
        
        {/* Desktop version - Table */}
        <ComparisonTable 
          comparisonData={comparisonData} 
          providers={providers} 
          categories={categories}
          highlightProvider={t('comparison.justLaunch')}
        />
        
        {/* Mobile version - Cards */}
        <ComparisonMobileCards 
          comparisonData={comparisonData} 
          providers={providers}
          highlightProvider={t('comparison.justLaunch')}
        />
        
        {/* CTA Section */}
        <ComparisonCTA 
          onContactClick={scrollToContact}
          onQuizClick={openQuiz}
          onWorksClick={scrollToWorks}
        />
      </div>
    </section>
  );
};

export default ComparisonSection;
