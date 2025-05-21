
import React, { useState } from 'react';
import { ComparisonData, ComparisonCategory } from './types';
import { useLanguage } from '../../contexts/LanguageContext';
import MobileComparisonCard from './MobileComparisonCard';
import { categoryIcons, categories } from './comparisonData';

interface ComparisonCardsGridProps {
  providers: string[];
  comparisonData: ComparisonData;
}

const ComparisonCardsGrid: React.FC<ComparisonCardsGridProps> = ({ providers, comparisonData }) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ComparisonCategory | null>(null);
  
  // Function to scroll to a specific category
  const scrollToCategory = (category: ComparisonCategory) => {
    setActiveCategory(category);
    
    // Reset the active category after a short delay
    setTimeout(() => {
      setActiveCategory(null);
    }, 2000);
    
    // Scroll to the desktop table category if on desktop
    const desktopCategoryElement = document.getElementById(`category-${category.toLowerCase().replace(/\s+/g, '-')}`);
    if (desktopCategoryElement) {
      desktopCategoryElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  
  // Get services in the correct order (with Just Launch first)
  const services = ['just_launch', 'agency', 'freelancer', 'diy'];
  
  return (
    <div className="lg:hidden mb-12">
      <div className="space-y-6">
        {services.map((service, index) => (
          <MobileComparisonCard
            key={service}
            service={service}
            delay={(index + 1) * 100}
            scrollToCategory={scrollToCategory}
            activeCategory={activeCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default ComparisonCardsGrid;
