
import { ReactNode } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Check } from 'lucide-react';
import { ComparisonData } from './types';

export const useComparisonData = () => {
  const { t } = useLanguage();
  
  // Comparison data
  const comparisonData: ComparisonData = {
    [t('comparison.justLaunch')]: {
      [t('comparison.upfrontCost')]: (
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#0D503C]">€1,500</span>
          <Check size={18} className="text-green-600" />
        </div>
      ),
      [t('comparison.ongoingCost')]: (
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#0D503C]">€10/mo</span>
          <Check size={18} className="text-green-600" />
        </div>
      ),
      [t('comparison.timeToLaunch')]: (
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#0D503C]">14 {t('comparison.days')}</span>
          <Check size={18} className="text-green-600" />
        </div>
      ),
      [t('comparison.designQuality')]: (
        <div>
          {t('comparison.professionalCustom')}
          <div className="text-xs text-[#0D503C]/70">{t('comparison.belgiumDesigners')}</div>
        </div>
      ),
      [t('comparison.easeOfProcess')]: (
        <div>
          <span className="font-medium">{t('comparison.doneForYou')}</span> {t('comparison.minimalEffort')}
          <div className="text-xs text-[#0D503C]/70">{t('comparison.weHandle')}</div>
        </div>
      ),
      [t('comparison.scalability')]: (
        <div>
          <span className="font-medium">{t('comparison.easyToScale')}</span> {t('comparison.addPagesFeatures')}
          <div className="text-xs text-[#0D503C]/70">{t('comparison.tenEuroMo')}</div>
        </div>
      ),
      [t('comparison.clientAttraction')]: (
        <div>
          <span className="font-medium">{t('comparison.builtToConvert')}</span> {t('comparison.clearCTAs')}
          <div className="text-xs text-[#0D503C]/70">{t('comparison.tailoredForAudience')}</div>
        </div>
      ),
    },
    [t('comparison.agency')]: {
      [t('comparison.upfrontCost')]: '€4,000-€8,000',
      [t('comparison.ongoingCost')]: '€100-€150/mo',
      [t('comparison.timeToLaunch')]: '4-12 ' + t('comparison.weeks'),
      [t('comparison.designQuality')]: (
        <div>
          {t('comparison.highlyCustom')}
          <div className="text-xs text-[#0D503C]/70">{t('comparison.oftenOverkill')}</div>
        </div>
      ),
      [t('comparison.easeOfProcess')]: (
        <div>
          <span className="font-medium">{t('comparison.highEffort')}</span> {t('comparison.multipleMeetings')}
        </div>
      ),
      [t('comparison.scalability')]: (
        <div>
          <span className="font-medium">{t('comparison.scalableCostly')}</span> {t('comparison.featuresExpensive')}
        </div>
      ),
      [t('comparison.clientAttraction')]: (
        <div>
          {t('comparison.strongConversion')}
          <div className="text-xs text-[#0D503C]/70">{t('comparison.costlySlow')}</div>
        </div>
      ),
    },
    [t('comparison.freelancer')]: {
      [t('comparison.upfrontCost')]: '€2,500-€5,000',
      [t('comparison.ongoingCost')]: '€30-€50/mo',
      [t('comparison.timeToLaunch')]: '3-5 ' + t('comparison.weeks'),
      [t('comparison.designQuality')]: (
        <div>
          {t('comparison.professionalInconsistent')}
          <div className="text-xs text-[#0D503C]/70">{t('comparison.dependsFreelancer')}</div>
        </div>
      ),
      [t('comparison.easeOfProcess')]: (
        <div>
          <span className="font-medium">{t('comparison.moderateEffort')}</span> {t('comparison.manageFreelancer')}
        </div>
      ),
      [t('comparison.scalability')]: (
        <div>
          <span className="font-medium">{t('comparison.limited')}</span> {t('comparison.scalingDependsFreelancer')}
        </div>
      ),
      [t('comparison.clientAttraction')]: (
        <div>
          <span className="font-medium">{t('comparison.varies')}</span> {t('comparison.conversionFreelancer')}
        </div>
      ),
    },
    [t('comparison.diy')]: {
      [t('comparison.upfrontCost')]: '€0-€500',
      [t('comparison.ongoingCost')]: '€5-€50/mo',
      [t('comparison.timeToLaunch')]: '1 ' + t('comparison.week') + '-3 ' + t('comparison.months'),
      [t('comparison.designQuality')]: (
        <div>
          {t('comparison.templateBased')}
          <div className="text-xs text-[#0D503C]/70">{t('comparison.dependsSkill')}</div>
        </div>
      ),
      [t('comparison.easeOfProcess')]: (
        <div>
          <span className="font-medium">{t('comparison.highEffort')}</span> {t('comparison.learnTroubleshoot')}
          <div className="text-xs text-[#0D503C]/70">{t('comparison.steepLearning')}</div>
        </div>
      ),
      [t('comparison.scalability')]: (
        <div>
          <span className="font-medium">{t('comparison.limited')}</span> {t('comparison.templatesRestrict')}
        </div>
      ),
      [t('comparison.clientAttraction')]: (
        <div>
          <span className="font-medium">{t('comparison.basic')}</span> {t('comparison.limitedSEO')}
        </div>
      ),
    }
  };

  // Extract categories and providers
  const categories = Object.keys(comparisonData[t('comparison.justLaunch')]);
  const providers = Object.keys(comparisonData);
  
  return { comparisonData, categories, providers };
};
