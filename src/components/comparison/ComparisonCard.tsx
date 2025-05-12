
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { ComparisonCardProps } from './types';
import CategoryIcon from './CategoryIcon';

const ComparisonCard: React.FC<ComparisonCardProps> = ({ title, data, highlight = false }) => (
  <Card className={`mb-6 overflow-hidden transition-all duration-200 ${highlight ? 'border-[#0D503C] ring-1 ring-[#0D503C]/30 shadow-lg' : ''}`}>
    <CardHeader className={`pb-2 ${highlight ? 'bg-[#0D503C] text-[#F5F5E9]' : 'bg-[#0D503C]/5'}`}>
      <CardTitle className="text-lg font-bold text-center">{title}</CardTitle>
    </CardHeader>
    <CardContent className="p-4">
      {Object.entries(data).map(([category, value], idx) => (
        <div key={category} className={`py-3 ${idx !== Object.entries(data).length - 1 ? 'border-b border-[#0D503C]/10' : ''}`}>
          <div className="font-medium mb-1 flex items-center gap-2">
            <CategoryIcon category={category} />
            {category}
          </div>
          <div className="text-sm text-[#0D503C]/80">{value}</div>
        </div>
      ))}
    </CardContent>
  </Card>
);

export default ComparisonCard;
