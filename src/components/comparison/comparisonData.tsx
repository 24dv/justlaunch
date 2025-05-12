
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
          <span className="font-bold text-[#0D503C]">€1,500</span>
          <Check size={18} className="text-green-600" />
        </div>
      ),
      'Ongoing Cost': (
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#0D503C]">€10/mo</span>
          <Check size={18} className="text-green-600" />
        </div>
      ),
      'Time to Launch': (
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#0D503C]">{t('compare.data.justlaunch.timeToLaunch.days')}</span>
          <Check size={18} className="text-green-600" />
        </div>
      ),
      'Ease of Process': (
        <div>
          <span className="font-medium">{t('compare.data.justlaunch.easeOfProcess.label')}:</span> {t('compare.data.justlaunch.easeOfProcess.value')}
          <div className="text-xs text-[#0D503C]/70">{t('compare.data.justlaunch.easeOfProcess.note')}</div>
        </div>
      ),
      'Design Quality': (
        <div>
          {t('compare.data.justlaunch.designQuality.value')}
          <div className="text-xs text-[#0D503C]/70">{t('compare.data.justlaunch.designQuality.note')}</div>
        </div>
      ),
      'Scalability': (
        <div>
          <span className="font-medium">{t('compare.data.justlaunch.scalability.label')}:</span> {t('compare.data.justlaunch.scalability.value')}
        </div>
      ),
      'Conversion & Visibility': (
        <div>
          <span className="font-medium">{t('compare.data.justlaunch.conversion.label')}:</span> {t('compare.data.justlaunch.conversion.value')}
          <div className="text-xs text-[#0D503C]/70">{t('compare.data.justlaunch.conversion.note')}</div>
        </div>
      ),
    },
    'Agency': {
      'Upfront Cost': t('compare.data.agency.upfrontCost'),
      'Ongoing Cost': t('compare.data.agency.ongoingCost'),
      'Time to Launch': t('compare.data.agency.timeToLaunch'),
      'Ease of Process': (
        <div>
          <span className="font-medium">{t('compare.data.agency.easeOfProcess.label')}:</span> {t('compare.data.agency.easeOfProcess.value')}
        </div>
      ),
      'Design Quality': (
        <div>
          {t('compare.data.agency.designQuality.value')}
          <div className="text-xs text-[#0D503C]/70">{t('compare.data.agency.designQuality.note')}</div>
        </div>
      ),
      'Scalability': (
        <div>
          <span className="font-medium">{t('compare.data.agency.scalability.label')}:</span> {t('compare.data.agency.scalability.value')}
        </div>
      ),
      'Conversion & Visibility': (
        <div>
          {t('compare.data.agency.conversion.value')}
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
          <span className="font-medium">{t('compare.data.freelancer.easeOfProcess.label')}:</span> {t('compare.data.freelancer.easeOfProcess.value')}
        </div>
      ),
      'Design Quality': (
        <div>
          {t('compare.data.freelancer.designQuality.value')}
          <div className="text-xs text-[#0D503C]/70">{t('compare.data.freelancer.designQuality.note')}</div>
        </div>
      ),
      'Scalability': (
        <div>
          <span className="font-medium">{t('compare.data.freelancer.scalability.label')}:</span> {t('compare.data.freelancer.scalability.value')}
        </div>
      ),
      'Conversion & Visibility': (
        <div>
          <span className="font-medium">{t('compare.data.freelancer.conversion.label')}:</span> {t('compare.data.freelancer.conversion.value')}
        </div>
      ),
    },
    'DIY': {
      'Upfront Cost': t('compare.data.diy.upfrontCost'),
      'Ongoing Cost': t('compare.data.diy.ongoingCost'),
      'Time to Launch': t('compare.data.diy.timeToLaunch'),
      'Ease of Process': (
        <div>
          <span className="font-medium">{t('compare.data.diy.easeOfProcess.label')}:</span> {t('compare.data.diy.easeOfProcess.value')}
          <div className="text-xs text-[#0D503C]/70">{t('compare.data.diy.easeOfProcess.note')}</div>
        </div>
      ),
      'Design Quality': (
        <div>
          {t('compare.data.diy.designQuality.value')}
          <div className="text-xs text-[#0D503C]/70">{t('compare.data.diy.designQuality.note')}</div>
        </div>
      ),
      'Scalability': (
        <div>
          <span className="font-medium">{t('compare.data.diy.scalability.label')}:</span> {t('compare.data.diy.scalability.value')}
        </div>
      ),
      'Conversion & Visibility': (
        <div>
          <span className="font-medium">{t('compare.data.diy.conversion.label')}:</span> {t('compare.data.diy.conversion.value')}
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
