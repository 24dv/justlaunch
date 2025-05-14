
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
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#0D503C]">{t('compare.data.justlaunch.upfrontCost')}</span>
          <Check size={18} className="text-green-600" />
        </div>
      ),
      'Ongoing Cost': (
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#0D503C]">{t('compare.data.justlaunch.ongoingCost')}</span>
          <Check size={18} className="text-green-600" />
        </div>
      ),
      'Time to Launch': (
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#0D503C]">{t('compare.data.justlaunch.timeToLaunch')}</span>
          <Check size={18} className="text-green-600" />
        </div>
      ),
      'Ease of Process': (
        <div>
          <span className="font-medium">{t('compare.data.justlaunch.easeOfProcess')}</span>
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
      'Ease of Process': (
        <div>
          <span className="font-medium">{t('compare.data.agency.easeOfProcess')}</span>
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
      'Ease of Process': (
        <div>
          <span className="font-medium">{t('compare.data.freelancer.easeOfProcess')}</span>
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
      'Ease of Process': (
        <div>
          <span className="font-medium">{t('compare.data.diy.easeOfProcess')}</span>
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

// Category icons using emojis
export const categoryIcons = {
  'Upfront Cost': <span className="text-xl">💶</span>,
  'Ongoing Cost': <span className="text-xl">📅</span>,
  'Time to Launch': <span className="text-xl">🚀</span>,
  'Ease of Process': <span className="text-xl">🔄</span>,
  'Design Quality': <span className="text-xl">🎨</span>,
  'Scalability': <span className="text-xl">🧩</span>,
  'Conversion & Visibility': <span className="text-xl">👁️</span>
};

// Categories order
export const categories = [
  'Upfront Cost', 
  'Ongoing Cost', 
  'Time to Launch', 
  'Ease of Process', 
  'Design Quality', 
  'Scalability', 
  'Conversion & Visibility'
];
