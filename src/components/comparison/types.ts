
import { ReactNode } from 'react';

export type ComparisonValue = ReactNode;
export type CategoryData = Record<string, ComparisonValue>;
export type ComparisonData = Record<string, CategoryData>;

export interface ComparisonCardProps {
  title: string;
  data: CategoryData;
  highlight?: boolean;
}

export interface CategoryIconProps {
  category: string;
}
