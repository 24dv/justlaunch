
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
          <span className="font-bold text-[#0D503C]">14 days</span>
          <Check size={18} className="text-green-600" />
        </div>
      ),
      'Design Quality': (
        <div>
          Professional, custom logo & website
          <div className="text-xs text-[#0D503C]/70">Belgium designers, mobile-optimized</div>
        </div>
      ),
      'Ease of Process': (
        <div>
          <span className="font-medium">Done-for-you:</span> Minimal effort
          <div className="text-xs text-[#0D503C]/70">We handle design, tech, setup; 1 revision round</div>
        </div>
      ),
      'Scalability': (
        <div>
          <span className="font-medium">Easy to scale:</span> Add pages, features, or e-commerce later
          <div className="text-xs text-[#0D503C]/70">€10/mo keeps it secure</div>
        </div>
      ),
      'Client Attraction': (
        <div>
          <span className="font-medium">Built to convert:</span> Clear CTAs, SEO-friendly
          <div className="text-xs text-[#0D503C]/70">Tailored for your audience</div>
        </div>
      ),
    },
    'Traditional Agency': {
      'Upfront Cost': '€4,000-€8,000',
      'Ongoing Cost': '€100-€150/mo',
      'Time to Launch': '4-12 weeks',
      'Design Quality': (
        <div>
          Highly custom, premium
          <div className="text-xs text-[#0D503C]/70">Often overkill for startups</div>
        </div>
      ),
      'Ease of Process': (
        <div>
          <span className="font-medium">High effort:</span> Multiple meetings, revisions, approvals
        </div>
      ),
      'Scalability': (
        <div>
          <span className="font-medium">Scalable but costly:</span> New features often €1,000+
        </div>
      ),
      'Client Attraction': (
        <div>
          Strong conversion focus
          <div className="text-xs text-[#0D503C]/70">But costly and slow</div>
        </div>
      ),
    },
    'Freelancer': {
      'Upfront Cost': '€2,500-€5,000',
      'Ongoing Cost': '€30-€50/mo',
      'Time to Launch': '3-5 weeks',
      'Design Quality': (
        <div>
          Professional but inconsistent
          <div className="text-xs text-[#0D503C]/70">Depends on freelancer skill</div>
        </div>
      ),
      'Ease of Process': (
        <div>
          <span className="font-medium">Moderate effort:</span> Manage freelancer, revisions, communication
        </div>
      ),
      'Scalability': (
        <div>
          <span className="font-medium">Limited:</span> Scaling depends on freelancer availability, skills
        </div>
      ),
      'Client Attraction': (
        <div>
          <span className="font-medium">Varies:</span> Conversion focus depends on freelancer expertise
        </div>
      ),
    },
    'DIY': {
      'Upfront Cost': '€0-€500',
      'Ongoing Cost': '€5-€50/mo',
      'Time to Launch': '1 week-3 months',
      'Design Quality': (
        <div>
          Template-based, risks looking generic
          <div className="text-xs text-[#0D503C]/70">Depends on skill</div>
        </div>
      ),
      'Ease of Process': (
        <div>
          <span className="font-medium">High effort:</span> Learn Canva/Wix, design, troubleshoot
          <div className="text-xs text-[#0D503C]/70">Steep learning curve</div>
        </div>
      ),
      'Scalability': (
        <div>
          <span className="font-medium">Limited:</span> Templates restrict growth; scaling often requires starting over
        </div>
      ),
      'Client Attraction': (
        <div>
          <span className="font-medium">Basic:</span> Limited SEO/UX unless you're skilled or buy plugins
        </div>
      ),
    }
  };

  // Category icons
  const categoryIcons = {
    'Upfront Cost': <DollarSign className="w-5 h-5" />,
    'Ongoing Cost': <DollarSign className="w-5 h-5" />,
    'Time to Launch': <Clock className="w-5 h-5" />,
    'Design Quality': <Palette className="w-5 h-5" />,
    'Ease of Process': <ArrowRight className="w-5 h-5" />,
    'Scalability': <Layers className="w-5 h-5" />,
    'Client Attraction': <MousePointer className="w-5 h-5" />
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
    <section className="section-padding bg-[#F5F5E9] border-y border-[#0D503C]/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D503C] mb-4 font-serif tracking-tight">
            {t('compare.title') || "Just Launch vs. Agency vs. Freelancer vs. DIY"}
          </h2>
          <p className="text-xl text-[#0D503C]/80 max-w-3xl mx-auto">
            {t('compare.subtitle') || "We designed Just Launch after seeing too many startups waste time and money doing it the hard way"}
          </p>
          <div className="w-24 h-1 bg-[#0D503C] mx-auto mt-6" />
        </div>
        
        {/* Deliverables line */}
        <div className="text-center mb-8">
          <p className="text-lg font-medium text-[#0D503C] inline-flex items-center justify-center">
            <span className="bg-[#F2FCE2] px-6 py-2 rounded-full">
              {t('compare.deliverables') || "Deliverables: Logo + Color palette + Custom 1-page website"}
            </span>
          </p>
        </div>
        
        {/* Desktop version - Table */}
        <div className="hidden lg:block mb-12 overflow-hidden rounded-xl border border-[#0D503C]/20 shadow-md">
          <Table>
            <TableHeader className="bg-[#0D503C]/5">
              <TableRow>
                <TableHead className="w-[180px]">Category</TableHead>
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
                <TableRow key={category}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      {categoryIcons[category]}
                      {category}
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
              className="bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0A4231] px-6 py-3 rounded-full text-base"
            >
              Book Your Free Intro Call
            </Button>
            
            <Button 
              onClick={() => window.open("https://forms.justlaunch.be/", "_blank")}
              variant="outline"
              className="border-[#0D503C] text-[#0D503C] hover:bg-[#0D503C]/5 px-6 py-3 rounded-full text-base"
            >
              Am I Ready to Launch?
            </Button>
          </div>
          
          <button 
            onClick={scrollToWorks}
            className="flex items-center gap-1 text-[#0D503C] hover:text-[#0A4231] underline underline-offset-4 font-medium"
          >
            See what we can do for you in 14 days!
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
