
import React from 'react';

export type ComparisonValue = React.ReactNode;
export type CategoryData = Record<string, ComparisonValue>;
export type ComparisonData = Record<string, CategoryData>;
export type ComparisonCategory = string;
export type ServiceType = string;

export interface ComparisonCardProps {
  title: string;
  mainProvider: string;
  comparisonProvider: string;
  justLaunchData: CategoryData;
  competitorData: CategoryData;
  highlight?: boolean;
}

export interface MobileComparisonCardProps {
  service: ServiceType;
  delay: number;
  scrollToCategory: (category: ComparisonCategory) => void;
  activeCategory: ComparisonCategory | null;
}
