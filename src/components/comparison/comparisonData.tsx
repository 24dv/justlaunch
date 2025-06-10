
import React from 'react';
import { Check } from 'lucide-react';
import { ComparisonData } from './types';
import { useLanguage } from '../../contexts/LanguageContext';

// Create a function to get the translated comparison data
export const useComparisonData = () => {
  const { t } = useLanguage();
  
  // Comparison data
  const comparisonData: ComparisonData = {
    'Just Launch': {
      'Upfront Cost': (
        <div className="flex items-center justify-center gap-2">
          <span className="font-bold text-[#0D503C]">{t('compare.data.justlaunch.upfrontCost')}</span>
          <Check size={18} className="text-green-600" />
        </div>
      ),
      'Ongoing Cost': (
        <div className="flex items-center justify-center gap-2">
          <span className="font-bold text-[#0D503C]">{t('compare.data.justlaunch.ongoingCost')}</span>
          <Check size={18} className="text-green-600" />
        </div>
      ),
      'Time to Launch': (
        <div className="flex items-center justify-center gap-2">
          <span className="font-bold text-[#0D503C]">{t('compare.data.justlaunch.timeToLaunch')}</span>
          <Check size={18} className="text-green-600" />
        </div>
      ),
      'Level of Effort': (
        <div>
          <span className="font-medium">{t('compare.data.justlaunch.levelOfEffort')}</span>
          <div className="text-xs text-[#0D503C]/70">{t('compare.data.justlaunch.levelOfEffort.note')}</div>
        </div>
      ),
      'Design Quality': (
        <div>
          <span className="font-medium">{t('compare.data.justlaunch.designQuality')}</span>
        </div>
      ),
      'Scalability': (
        <div>
          <span className="font-medium">{t('compare.data.justlaunch.scalability')}</span>
        </div>
      ),
      'Conversion & Visibility': (
        <div>
          <span className="font-medium">{t('compare.data.justlaunch.conversion')}</span>
        </div>
      ),
    },
    'Agency': {
      'Upfront Cost': t('compare.data.agency.upfrontCost'),
      'Ongoing Cost': t('compare.data.agency.ongoingCost'),
      'Time to Launch': t('compare.data.agency.timeToLaunch'),
      'Level of Effort': (
        <div>
          <span className="font-medium">{t('compare.data.agency.levelOfEffort')}</span>
          <div className="text-xs text-[#0D503C]/70">{t('compare.data.agency.levelOfEffort.note')}</div>
        </div>
      ),
      'Design Quality': (
        <div>
          <span className="font-medium">{t('compare.data.agency.designQuality')}</span>
        </div>
      ),
      'Scalability': (
        <div>
          <span className="font-medium">{t('compare.data.agency.scalability')}</span>
        </div>
      ),
      'Conversion & Visibility': (
        <div>
          <span className="font-medium">{t('compare.data.agency.conversion')}</span>
          <div className="text-xs text-[#0D503C]/70">{t('compare.data.agency.conversion.note')}</div>
        </div>
      ),
    },
    'Freelancer': {
      'Upfront Cost': t('compare.data.freelancer.upfrontCost'),
      'Ongoing Cost': t('compare.data.freelancer.ongoingCost'),
      'Time to Launch': t('compare.data.freelancer.timeToLaunch'),
      'Level of Effort': (
        <div>
          <span className="font-medium">{t('compare.data.freelancer.levelOfEffort')}</span>
          <div className="text-xs text-[#0D503C]/70">{t('compare.data.freelancer.levelOfEffort.note')}</div>
        </div>
      ),
      'Design Quality': (
        <div>
          <span className="font-medium">{t('compare.data.freelancer.designQuality')}</span>
          <div className="text-xs text-[#0D503C]/70">{t('compare.data.freelancer.designQuality.note')}</div>
        </div>
      ),
      'Scalability': (
        <div>
          <span className="font-medium">{t('compare.data.freelancer.scalability')}</span>
        </div>
      ),
      'Conversion & Visibility': (
        <div>
          <span className="font-medium">{t('compare.data.freelancer.conversion')}</span>
        </div>
      ),
    },
    'DIY': {
      'Upfront Cost': t('compare.data.diy.upfrontCost'),
      'Ongoing Cost': t('compare.data.diy.ongoingCost'),
      'Time to Launch': t('compare.data.diy.timeToLaunch'),
      'Level of Effort': (
        <div>
          <span className="font-medium">{t('compare.data.diy.levelOfEffort')}</span>
          <div className="text-xs text-[#0D503C]/70">{t('compare.data.diy.levelOfEffort.note')}</div>
        </div>
      ),
      'Design Quality': (
        <div>
          <span className="font-medium">{t('compare.data.diy.designQuality')}</span>
        </div>
      ),
      'Scalability': (
        <div>
          <span className="font-medium">{t('compare.data.diy.scalability')}</span>
        </div>
      ),
      'Conversion & Visibility': (
        <div>
          <span className="font-medium">{t('compare.data.diy.conversion')}</span>
        </div>
      ),
    }
  };

  // Get provider keys
  const providers = Object.keys(comparisonData);

  return {
    comparisonData,
    providers
  };
};

// Category icons using emojis - updated emoji for Level of Effort
export const categoryIcons = {
  'Upfront Cost': <span className="text-xl">💶</span>,
  'Ongoing Cost': <span className="text-xl">📅</span>,
  'Time to Launch': <span className="text-xl">🚀</span>,
  'Level of Effort': <span className="text-xl">⚡</span>,
  'Design Quality': <span className="text-xl">🎨</span>,
  'Scalability': <span className="text-xl">🧩</span>,
  'Conversion & Visibility': <span className="text-xl">👁️</span>
};

// Categories order - updated category name
export const categories = [
  'Upfront Cost', 
  'Ongoing Cost', 
  'Time to Launch', 
  'Level of Effort', 
  'Design Quality', 
  'Scalability', 
  'Conversion & Visibility'
];
