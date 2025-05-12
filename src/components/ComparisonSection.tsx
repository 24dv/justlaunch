
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Check, DollarSign, Clock, Scale, Palette, ArrowRight, MousePointer, ArrowUpRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './ui/table';
import { Button } from './ui/button';

// Define types for our comparison data
type ComparisonValue = React.ReactNode;
type CategoryData = Record<string, ComparisonValue>;
type ComparisonData = Record<string, CategoryData>;

interface ComparisonCardProps {
  title: string;
  data: CategoryData;
  highlight?: boolean;
}

const ComparisonSection: React.FC = () => {
  const { t } = useLanguage();
  
  // Helper function for the mobile comparison cards
  const ComparisonCard: React.FC<ComparisonCardProps> = ({ title, data, highlight = false }) => (
    <Card className={`mb-6 overflow-hidden transition-all duration-200 ${highlight ? 'border-[#0D503C] ring-1 ring-[#0D503C]/30 shadow-lg' : ''}`}>
      <CardHeader className={`pb-2 ${highlight ? 'bg-[#0D503C] text-[#F5F5E9]' : 'bg-[#0D503C]/5'}`}>
        <CardTitle className="text-lg font-bold text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {Object.entries(data).map(([category, value], idx) => (
          <div key={category} className={`py-3 ${idx !== Object.entries(data).length - 1 ? 'border-b border-[#0D503C]/10' : ''}`}>
            <div className="font-medium mb-1">{category}</div>
            <div className="text-sm text-[#0D503C]/80">{value}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );

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

  // Category icons with styled colors
  const categoryIcons = {
    [t('comparison.upfrontCost')]: <DollarSign className="w-5 h-5 text-[#0D503C]" />,
    [t('comparison.ongoingCost')]: <DollarSign className="w-5 h-5 text-[#0D503C]" />,
    [t('comparison.timeToLaunch')]: <Clock className="w-5 h-5 text-[#0D503C]" />,
    [t('comparison.designQuality')]: <Palette className="w-5 h-5 text-[#0D503C]" />,
    [t('comparison.easeOfProcess')]: <ArrowRight className="w-5 h-5 text-[#0D503C]" />,
    [t('comparison.scalability')]: <Layers className="w-5 h-5 text-[#0D503C]" />,
    [t('comparison.clientAttraction')]: <MousePointer className="w-5 h-5 text-[#0D503C]" />
  };

  // Extract categories
  const categories = Object.keys(comparisonData[t('comparison.justLaunch')]);
  
  // Get providers
  const providers = Object.keys(comparisonData);
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToWorks = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="compare" className="section-padding bg-[#F5F5E9] border-y border-[#0D503C]/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D503C] mb-4 font-serif tracking-tight">
            {t('comparison.title')}
          </h2>
          <p className="text-xl text-[#0D503C]/80 max-w-3xl mx-auto">
            {t('comparison.subtitle')}
          </p>
          <div className="w-24 h-1 bg-[#0D503C] mx-auto mt-6" />
        </div>
        
        {/* Desktop version - Table */}
        <div className="hidden lg:block mb-12 overflow-hidden rounded-xl border border-[#0D503C]/20 shadow-md">
          <Table>
            <TableHeader className="bg-[#0D503C]/5">
              <TableRow>
                <TableHead className="w-[180px]">{t('comparison.category')}</TableHead>
                {providers.map(provider => (
                  <TableHead 
                    key={provider} 
                    className={`text-center ${provider === t('comparison.justLaunch') ? 'bg-[#0D503C] text-[#F5F5E9]' : ''}`}
                  >
                    {provider}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map(category => (
                <TableRow 
                  key={category} 
                  className="hover:bg-[#F2FCE2] transition-colors duration-200"
                >
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      {categoryIcons[category]}
                      {category}
                    </div>
                  </TableCell>
                  {providers.map(provider => (
                    <TableCell 
                      key={`${provider}-${category}`}
                      className={`${provider === t('comparison.justLaunch') ? 'bg-[#0D503C]/5' : ''}`}
                    >
                      {comparisonData[provider][category]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* Mobile version - Cards */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {providers.map((provider, index) => (
            <ComparisonCard 
              key={provider} 
              title={provider} 
              data={comparisonData[provider]}
              highlight={provider === t('comparison.justLaunch')}
            />
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="flex flex-col items-center justify-center gap-6 mt-10">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToContact}
              className="bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0A4231] h-12 px-6 py-3 rounded-full text-base font-medium transition-colors"
            >
              {t('process.getStarted')}
            </Button>
            
            <Button 
              onClick={() => window.open("https://forms.justlaunch.be/", "_blank")}
              variant="outline"
              className="border-[#0D503C] text-[#0D503C] bg-[#F2FCE2] hover:bg-[#0D503C]/5 h-12 px-6 py-3 rounded-full text-base font-medium transition-colors"
            >
              {t('comparison.readyToLaunch')}
            </Button>
          </div>
          
          <button 
            onClick={scrollToWorks}
            className="flex items-center gap-1 text-[#0D503C] hover:text-[#0A4231] underline underline-offset-4 font-medium"
          >
            {t('comparison.seeWhatWeCanDo')}
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
