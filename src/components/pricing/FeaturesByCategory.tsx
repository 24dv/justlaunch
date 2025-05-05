
import React from 'react';
import CategoryHeader from './CategoryHeader';
import FeatureRow from './FeatureRow';
import { Feature } from './types';

interface FeaturesByCategoryProps {
  categories: string[];
  features: Feature[];
  getCategoryName: (category: string) => string;
  getFeatureName: (feature: Feature) => string;
}

const FeaturesByCategory = ({ 
  categories, 
  features,
  getCategoryName,
  getFeatureName
}: FeaturesByCategoryProps) => {
  return (
    <>
      {categories.map((category) => (
        <React.Fragment key={category}>
          <CategoryHeader categoryName={getCategoryName(category)} />
          {features
            .filter(f => f.category === category)
            .map((feature, index) => (
              <FeatureRow 
                key={`${category}-${index}`}
                feature={feature}
                featureNameHtml={getFeatureName(feature)}
              />
            ))
          }
        </React.Fragment>
      ))}
    </>
  );
};

export default FeaturesByCategory;
