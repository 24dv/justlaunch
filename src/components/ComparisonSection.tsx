
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Check, X, Euro, Clock, Palette, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";

// Mobile comparison card component
const MobileComparisonCard = ({ 
  title, 
  data,
  metrics,
  highlight = false 
}: { 
  title: string; 
  data: Record<string, React.ReactNode>;
  metrics: Array<{icon: React.ReactNode, name: string, key: string}>;
  highlight?: boolean;
}) => {
  return (
    <Card className={`mb-6 overflow-hidden ${highlight ? 'border-2 border-[#0D503C] shadow-lg' : ''}`}>
      <CardHeader className={`${highlight ? 'bg-[#0D503C] text-white' : 'bg-[#F5F5E9] border-b'} py-4`}>
        <CardTitle className="text-center">{title}</CardTitle>
        {highlight && <CardDescription className="text-center text-white/80">Recommended</CardDescription>}
      </CardHeader>
      <CardContent className="p-0">
        <ul className="divide-y divide-gray-200">
          {metrics.map((metric) => (
            <li key={metric.key} className="p-4">
              <div className="flex items-start">
                <div className="mr-3 mt-0.5 text-[#0D503C]">
                  {metric.icon}
                </div>
                <div>
                  <p className="font-medium text-[#0D503C] mb-1">{metric.name}</p>
                  <div className="text-sm">{data[metric.key]}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const ComparisonSection = () => {
  const { t, language } = useLanguage();
  
  // Metrics with their icons
  const metrics = [
    { icon: <Euro size={18} />, name: "Upfront Cost", key: "upfrontCost" },
    { icon: <Euro size={18} />, name: "Ongoing Cost", key: "ongoingCost" },
    { icon: <Clock size={18} />, name: "Time to Launch", key: "timeToLaunch" },
    { icon: <Palette size={18} />, name: "Design Quality", key: "designQuality" },
    { icon: <Check size={18} />, name: "Ease of Process", key: "easeOfProcess" },
    { icon: <ArrowUpRight size={18} />, name: "Scalability", key: "scalability" },
    { icon: <Check size={18} />, name: "Client Attraction", key: "clientAttraction" }
  ];

  // Data for each option
  const comparisonData = {
    justLaunch: {
      title: "Just Launch",
      upfrontCost: (
        <div className="flex items-center">
          <span className="font-semibold text-[#0D503C]">€1,500</span>
          <span className="ml-2 text-[#0D503C]/70">(logo, brand colors, custom 1-page website)</span>
        </div>
      ),
      ongoingCost: (
        <div className="flex items-center">
          <span className="font-semibold text-[#0D503C]">€10/mo</span>
          <span className="ml-2 text-[#0D503C]/70">(hosting, security monitoring, software updates, performance optimization)</span>
        </div>
      ),
      timeToLaunch: (
        <div className="flex items-start">
          <span className="font-semibold text-[#0D503C] whitespace-nowrap mr-2">14 days</span>
          <span className="text-[#0D503C]/70">(4-step process: Intro Call → Questionnaire → Review → Launch)</span>
        </div>
      ),
      designQuality: (
        <span className="text-[#0D503C]">Professional, custom logo & website (Belgium designers, mobile-optimized)</span>
      ),
      easeOfProcess: (
        <span className="text-[#0D503C]"><strong>Done-for-you:</strong> Minimal effort (we handle design, tech, setup; 1 revision round)</span>
      ),
      scalability: (
        <span className="text-[#0D503C]"><strong>Easy to scale:</strong> Add pages, features, or e-commerce later (€10/mo keeps it secure)</span>
      ),
      clientAttraction: (
        <span className="text-[#0D503C]"><strong>Built to convert:</strong> Clear CTAs, SEO-friendly, tailored for your audience</span>
      )
    },
    traditionalAgency: {
      title: "Traditional Agency",
      upfrontCost: (
        <span className="text-gray-700">€4,000-€8,000 (logo, brand colors, custom 1-page website)</span>
      ),
      ongoingCost: (
        <span className="text-gray-700">€100-€150/mo (hosting, maintenance, updates)</span>
      ),
      timeToLaunch: (
        <span className="text-gray-700">4-12 weeks (meetings, custom designs, multiple revisions)</span>
      ),
      designQuality: (
        <span className="text-gray-700">Highly custom, premium (but often overkill for startups)</span>
      ),
      easeOfProcess: (
        <span className="text-gray-700"><strong>High effort:</strong> Multiple meetings, revisions, approvals</span>
      ),
      scalability: (
        <span className="text-gray-700"><strong>Scalable but costly:</strong> New features often €1,000+</span>
      ),
      clientAttraction: (
        <span className="text-gray-700"><strong>Strong conversion focus</strong> (but costly and slow)</span>
      )
    },
    freelancer: {
      title: "Freelancer",
      upfrontCost: (
        <span className="text-gray-700">€2,500-€5,000 (logo, brand colors, custom 1-page website, varies by skill)</span>
      ),
      ongoingCost: (
        <span className="text-gray-700">€30-€50/mo (hosting, basic maintenance, client-managed)</span>
      ),
      timeToLaunch: (
        <span className="text-gray-700">3-5 weeks (depends on availability, revisions)</span>
      ),
      designQuality: (
        <span className="text-gray-700">Professional but inconsistent (depends on freelancer skill)</span>
      ),
      easeOfProcess: (
        <span className="text-gray-700"><strong>Moderate effort:</strong> Manage freelancer, revisions, communication</span>
      ),
      scalability: (
        <span className="text-gray-700"><strong>Limited:</strong> Scaling depends on freelancer availability, skills</span>
      ),
      clientAttraction: (
        <span className="text-gray-700"><strong>Varies:</strong> Conversion focus depends on freelancer expertise</span>
      )
    },
    diy: {
      title: "DIY",
      upfrontCost: (
        <span className="text-gray-700">€0-€500 (Canva free-€100, Wix/Squarespace €50-€1,000 for templates)</span>
      ),
      ongoingCost: (
        <span className="text-gray-700">€5-€50/mo (hosting €14/mo Wix, domain €15/yr, plugins, SSL €50/yr)</span>
      ),
      timeToLaunch: (
        <span className="text-gray-700">1 week-3 months (20-100+ hours, depending on skill)</span>
      ),
      designQuality: (
        <span className="text-gray-700">Template-based, risks looking generic or amateur (depends on skill)</span>
      ),
      easeOfProcess: (
        <span className="text-gray-700"><strong>High effort:</strong> Learn Canva/Wix, design, troubleshoot (steep learning curve)</span>
      ),
      scalability: (
        <span className="text-gray-700"><strong>Limited:</strong> Templates restrict growth; scaling often requires starting over</span>
      ),
      clientAttraction: (
        <span className="text-gray-700"><strong>Basic:</strong> Limited SEO/UX unless you're skilled or buy plugins</span>
      )
    }
  };

  return (
    <section id="comparison" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D503C] mb-3">
            Logo & Website Done Right: Just Launch (€1,500) vs. Agency vs. Freelancer vs. DIY
          </h2>
          <p className="text-lg text-[#0D503C]/80 max-w-3xl mx-auto">
            Launch like a pro in 14 days with Just Launch's Launch Package—perfect for freelancers, business owners, and side hustlers!
          </p>
        </div>

        {/* Desktop table (hidden on mobile) */}
        <div className="hidden md:block overflow-x-auto">
          <Table className="w-full border border-[#0D503C]/10 rounded-lg overflow-hidden">
            <TableHeader>
              <TableRow className="bg-[#F5F5E9] border-b">
                <TableHead className="w-1/5 bg-[#F5F5E9]">Comparison</TableHead>
                <TableHead className="w-1/5 bg-[#0D503C] text-white">Just Launch</TableHead>
                <TableHead className="w-1/5">Traditional Agency</TableHead>
                <TableHead className="w-1/5">Freelancer</TableHead>
                <TableHead className="w-1/5">DIY</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {metrics.map((metric) => (
                <TableRow key={metric.key}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      {metric.icon}
                      {metric.name}
                    </div>
                  </TableCell>
                  <TableCell className="bg-[#F5F5E9]/30">
                    {comparisonData.justLaunch[metric.key as keyof typeof comparisonData.justLaunch]}
                  </TableCell>
                  <TableCell>
                    {comparisonData.traditionalAgency[metric.key as keyof typeof comparisonData.traditionalAgency]}
                  </TableCell>
                  <TableCell>
                    {comparisonData.freelancer[metric.key as keyof typeof comparisonData.freelancer]}
                  </TableCell>
                  <TableCell>
                    {comparisonData.diy[metric.key as keyof typeof comparisonData.diy]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile cards (shown only on mobile) */}
        <div className="md:hidden space-y-6">
          <MobileComparisonCard 
            title={comparisonData.justLaunch.title} 
            data={comparisonData.justLaunch as Record<string, React.ReactNode>}
            metrics={metrics}
            highlight={true}
          />
          <MobileComparisonCard 
            title={comparisonData.traditionalAgency.title} 
            data={comparisonData.traditionalAgency as Record<string, React.ReactNode>}
            metrics={metrics}
          />
          <MobileComparisonCard 
            title={comparisonData.freelancer.title} 
            data={comparisonData.freelancer as Record<string, React.ReactNode>}
            metrics={metrics}
          />
          <MobileComparisonCard 
            title={comparisonData.diy.title} 
            data={comparisonData.diy as Record<string, React.ReactNode>}
            metrics={metrics}
          />
        </div>

        {/* Call to action area */}
        <div className="mt-10 text-center">
          <div className="bg-[#F5F5E9] rounded-lg p-6 md:p-10 max-w-4xl mx-auto shadow-sm">
            <p className="text-lg md:text-xl text-[#0D503C] mb-6">
              Launch your logo & website with confidence in Belgium!<br/>
              <span className="italic font-medium">"Just Launch made my brand pro in 14 days!"</span> – Jake, Freelancer.<br/>
              Ready to shine?
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button 
                className="bg-[#0D503C] hover:bg-[#0D503C]/90 text-white px-8 py-6 text-lg h-auto"
                onClick={() => window.open('https://justlaunch.be/', '_blank')}
              >
                Book Free Call
              </Button>
              <Button 
                variant="outline" 
                className="border-[#0D503C] text-[#0D503C] hover:bg-[#0D503C]/10 px-8 py-6 text-lg h-auto"
                onClick={() => window.open('https://forms.justlaunch.be/', '_blank')}
              >
                Take the Quiz
              </Button>
            </div>
            
            <a 
              href="https://justlaunch.be/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0D503C] underline hover:text-[#0D503C]/80 text-lg font-medium"
            >
              See 6 brands we launched in 14 days!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
