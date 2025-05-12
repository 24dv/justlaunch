
import React from 'react';
import { DollarSign, Clock, Palette, ArrowRight, MousePointer, Layers } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { CategoryIconProps } from './types';

const CategoryIcon: React.FC<CategoryIconProps> = ({ category }) => {
  const { t } = useLanguage();
  
  const iconMapping = {
    [t('comparison.upfrontCost')]: <DollarSign className="w-5 h-5 text-[#F9A7A7]" />,
    [t('comparison.ongoingCost')]: <DollarSign className="w-5 h-5 text-[#F9A7A7]" />,
    [t('comparison.timeToLaunch')]: <Clock className="w-5 h-5 text-[#F9A7A7]" />,
    [t('comparison.designQuality')]: <Palette className="w-5 h-5 text-[#F9A7A7]" />,
    [t('comparison.easeOfProcess')]: <ArrowRight className="w-5 h-5 text-[#F9A7A7]" />,
    [t('comparison.scalability')]: <Layers className="w-5 h-5 text-[#F9A7A7]" />,
    [t('comparison.clientAttraction')]: <MousePointer className="w-5 h-5 text-[#F9A7A7]" />
  };

  return iconMapping[category] || null;
};

export default CategoryIcon;
