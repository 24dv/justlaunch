
import React from 'react';

export type ComparisonValue = React.ReactNode;
export type CategoryData = Record<string, ComparisonValue>;
export type ComparisonData = Record<string, CategoryData>;

export interface ComparisonCardProps {
  title: string;
  mainProvider: string;
  comparisonProvider: string;
  justLaunchData: CategoryData;
  competitorData: CategoryData;
  highlight?: boolean;
}

export interface MobileComparisonCardProps {
  mainProvider: string;
  comparisonProvider: string;
  justLaunchData: CategoryData;
  competitorData: CategoryData;
  categoryIcons: Record<string, React.ReactNode>;
  categories: string[];
  getCategoryName: (category: string) => string;
  highlight?: boolean;
}
