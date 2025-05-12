
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { DollarSign, Clock, Scale, Palette, ArrowRight, MousePointer, ArrowUpRight, Layers, Check } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './ui/table';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
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
            <div className="font-medium mb-1">{getCategoryName(category)}</div>
            <div className="text-sm text-[#0D503C]/80">{value}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );

  // Helper function to get the translated category name
  const getCategoryName = (category: string) => {
    const categoryMap: Record<string, string> = {
      'Upfront Cost': t('comparison.category.upfrontCost'),
      'Ongoing Cost': t('comparison.category.ongoingCost'),
      'Time to Launch': t('comparison.category.timeToLaunch'),
      'Design Quality': t('comparison.category.designQuality'),
      'Ease of Process': t('comparison.category.easeOfProcess'),
      'Scalability': t('comparison.category.scalability'),
      'Client Attraction': t('comparison.category.clientAttraction')
    };
    return categoryMap[category] || category;
  };

  // Comparison data
  const comparisonData: ComparisonData = {
    'Just Launch': {
      'Upfront Cost': (
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#0D503C]">{t('comparison.justLaunch.upfrontCost')}</span>
          <Check size={18} className="text-green-600" />
        </div>
      ),
      'Ongoing Cost': (
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#0D503C]">{t('comparison.justLaunch.ongoingCost')}</span>
          <Check size={18} className="text-green-600" />
        </div>
      ),
      'Time to Launch': (
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#0D503C]">{t('comparison.justLaunch.timeToLaunch')}</span>
          <Check size={18} className="text-green-600" />
        </div>
      ),
      'Design Quality': (
        <div>
          {t('comparison.justLaunch.designQuality.title')}
          <div className="text-xs text-[#0D503C]/70">{t('comparison.justLaunch.designQuality.subtitle')}</div>
        </div>
      ),
      'Ease of Process': (
        <div>
          <span className="font-medium">{t('comparison.justLaunch.easeOfProcess.title')}</span> {t('comparison.justLaunch.easeOfProcess.subtitle')}
          <div className="text-xs text-[#0D503C]/70">{t('comparison.justLaunch.easeOfProcess.description')}</div>
        </div>
      ),
      'Scalability': (
        <div>
          <span className="font-medium">{t('comparison.justLaunch.scalability.title')}</span> {t('comparison.justLaunch.scalability.subtitle')}
          <div className="text-xs text-[#0D503C]/70">{t('comparison.justLaunch.scalability.description')}</div>
        </div>
      ),
      'Client Attraction': (
        <div>
          <span className="font-medium">{t('comparison.justLaunch.clientAttraction.title')}</span> {t('comparison.justLaunch.clientAttraction.subtitle')}
          <div className="text-xs text-[#0D503C]/70">{t('comparison.justLaunch.clientAttraction.description')}</div>
        </div>
      ),
    },
    'Traditional Agency': {
      'Upfront Cost': t('comparison.agency.upfrontCost'),
      'Ongoing Cost': t('comparison.agency.ongoingCost'),
      'Time to Launch': t('comparison.agency.timeToLaunch'),
      'Design Quality': (
        <div>
          {t('comparison.agency.designQuality.title')}
          <div className="text-xs text-[#0D503C]/70">{t('comparison.agency.designQuality.description')}</div>
        </div>
      ),
      'Ease of Process': (
        <div>
          <span className="font-medium">{t('comparison.agency.easeOfProcess.title')}</span> {t('comparison.agency.easeOfProcess.description')}
        </div>
      ),
      'Scalability': (
        <div>
          <span className="font-medium">{t('comparison.agency.scalability.title')}</span> {t('comparison.agency.scalability.description')}
        </div>
      ),
      'Client Attraction': (
        <div>
          {t('comparison.agency.clientAttraction.title')}
          <div className="text-xs text-[#0D503C]/70">{t('comparison.agency.clientAttraction.description')}</div>
        </div>
      ),
    },
    'Freelancer': {
      'Upfront Cost': t('comparison.freelancer.upfrontCost'),
      'Ongoing Cost': t('comparison.freelancer.ongoingCost'),
      'Time to Launch': t('comparison.freelancer.timeToLaunch'),
      'Design Quality': (
        <div>
          {t('comparison.freelancer.designQuality.title')}
          <div className="text-xs text-[#0D503C]/70">{t('comparison.freelancer.designQuality.description')}</div>
        </div>
      ),
      'Ease of Process': (
        <div>
          <span className="font-medium">{t('comparison.freelancer.easeOfProcess.title')}</span> {t('comparison.freelancer.easeOfProcess.description')}
        </div>
      ),
      'Scalability': (
        <div>
          <span className="font-medium">{t('comparison.freelancer.scalability.title')}</span> {t('comparison.freelancer.scalability.description')}
        </div>
      ),
      'Client Attraction': (
        <div>
          <span className="font-medium">{t('comparison.freelancer.clientAttraction.title')}</span> {t('comparison.freelancer.clientAttraction.description')}
        </div>
      ),
    },
    'DIY': {
      'Upfront Cost': t('comparison.diy.upfrontCost'),
      'Ongoing Cost': t('comparison.diy.ongoingCost'),
      'Time to Launch': t('comparison.diy.timeToLaunch'),
      'Design Quality': (
        <div>
          {t('comparison.diy.designQuality.title')}
          <div className="text-xs text-[#0D503C]/70">{t('comparison.diy.designQuality.description')}</div>
        </div>
      ),
      'Ease of Process': (
        <div>
          <span className="font-medium">{t('comparison.diy.easeOfProcess.title')}</span> {t('comparison.diy.easeOfProcess.description')}
          <div className="text-xs text-[#0D503C]/70">{t('comparison.diy.easeOfProcess.subtitle')}</div>
        </div>
      ),
      'Scalability': (
        <div>
          <span className="font-medium">{t('comparison.diy.scalability.title')}</span> {t('comparison.diy.scalability.description')}
        </div>
      ),
      'Client Attraction': (
        <div>
          <span className="font-medium">{t('comparison.diy.clientAttraction.title')}</span> {t('comparison.diy.clientAttraction.description')}
        </div>
      ),
    }
  };

  // Category icons with feature-style styling
  const categoryIcons = {
    'Upfront Cost': <div className="flex items-center justify-center w-10 h-10 bg-[#F2FCE2] rounded-full"><DollarSign className="w-5 h-5 text-[#0D503C]" /></div>,
    'Ongoing Cost': <div className="flex items-center justify-center w-10 h-10 bg-[#F2FCE2] rounded-full"><DollarSign className="w-5 h-5 text-[#0D503C]" /></div>,
    'Time to Launch': <div className="flex items-center justify-center w-10 h-10 bg-[#F2FCE2] rounded-full"><Clock className="w-5 h-5 text-[#0D503C]" /></div>,
    'Design Quality': <div className="flex items-center justify-center w-10 h-10 bg-[#F2FCE2] rounded-full"><Palette className="w-5 h-5 text-[#0D503C]" /></div>,
    'Ease of Process': <div className="flex items-center justify-center w-10 h-10 bg-[#F2FCE2] rounded-full"><ArrowRight className="w-5 h-5 text-[#0D503C]" /></div>,
    'Scalability': <div className="flex items-center justify-center w-10 h-10 bg-[#F2FCE2] rounded-full"><Layers className="w-5 h-5 text-[#0D503C]" /></div>,
    'Client Attraction': <div className="flex items-center justify-center w-10 h-10 bg-[#F2FCE2] rounded-full"><MousePointer className="w-5 h-5 text-[#0D503C]" /></div>
  };

  // Extract categories
  const categories = Object.keys(comparisonData['Just Launch']);
  
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
                <TableHead className="w-[180px]">{t('comparison.category.upfrontCost')}</TableHead>
                {providers.map(provider => (
                  <TableHead 
                    key={provider} 
                    className={`text-center ${provider === 'Just Launch' ? 'bg-[#0D503C] text-[#F5F5E9]' : ''}`}
                  >
                    {provider}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map(category => (
                <TableRow key={category} className="hover:bg-[#F2FCE2]">
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      {categoryIcons[category]}
                      {getCategoryName(category)}
                    </div>
                  </TableCell>
                  {providers.map(provider => (
                    <TableCell 
                      key={`${provider}-${category}`}
                      className={`${provider === 'Just Launch' ? 'bg-[#0D503C]/5' : ''}`}
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
              highlight={provider === 'Just Launch'}
            />
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="flex flex-col items-center justify-center gap-6 mt-10">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToContact}
              className="bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0A4231] px-6 py-6 h-auto rounded-full text-base transition-transform hover:scale-105"
            >
              {t('comparison.cta.bookCall')}
            </Button>
            
            <Button 
              onClick={() => window.open("https://forms.justlaunch.be/", "_blank")}
              variant="outline"
              className="border-[#0D503C] text-[#0D503C] bg-[#F2FCE2] hover:bg-[#F2FCE2]/80 px-6 py-6 h-auto rounded-full text-base transition-transform hover:scale-105"
            >
              {t('comparison.cta.takeQuiz')}
            </Button>
          </div>
          
          <button 
            onClick={scrollToWorks}
            className="flex items-center gap-1 text-[#0D503C] hover:text-[#0A4231] underline underline-offset-4 font-medium"
          >
            {t('comparison.cta.seeWork')}
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
