
import { Check } from 'lucide-react';
import { ComparisonData } from './types';

// Comparison data
export const comparisonData: ComparisonData = {
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
    'Ease of Process': (
      <div>
        <span className="font-medium">Done-for-you:</span> Minimal effort
        <div className="text-xs text-[#0D503C]/70">We handle design, tech, setup; 1 revision round</div>
      </div>
    ),
    'Design Quality': (
      <div>
        Professional, custom logo & website
        <div className="text-xs text-[#0D503C]/70">Belgium designers, mobile-optimized</div>
      </div>
    ),
    'Scalability': (
      <div>
        <span className="font-medium">Easy to scale:</span> Add pages and other features for low prices
      </div>
    ),
    'Conversion & Visibility': (
      <div>
        <span className="font-medium">Built to convert:</span> Clear CTAs, SEO-friendly
        <div className="text-xs text-[#0D503C]/70">Tailored for your audience</div>
      </div>
    ),
  },
  'Traditional Agency': {
    'Upfront Cost': '€4,000-€8,000',
    'Ongoing Cost': '€50-€150/mo',
    'Time to Launch': '4-12 weeks',
    'Ease of Process': (
      <div>
        <span className="font-medium">High effort:</span> Multiple meetings, revisions, approvals
      </div>
    ),
    'Design Quality': (
      <div>
        Highly custom, premium
        <div className="text-xs text-[#0D503C]/70">Often overkill for startups</div>
      </div>
    ),
    'Scalability': (
      <div>
        <span className="font-medium">Scalable but costly:</span> New features often €1,000+
      </div>
    ),
    'Conversion & Visibility': (
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
    'Ease of Process': (
      <div>
        <span className="font-medium">Moderate effort:</span> Manage freelancer, revisions, communication
      </div>
    ),
    'Design Quality': (
      <div>
        Professional but inconsistent
        <div className="text-xs text-[#0D503C]/70">Depends on freelancer skill</div>
      </div>
    ),
    'Scalability': (
      <div>
        <span className="font-medium">Limited:</span> Scaling depends on freelancer availability, skills
      </div>
    ),
    'Conversion & Visibility': (
      <div>
        <span className="font-medium">Varies:</span> Conversion focus depends on freelancer expertise
      </div>
    ),
  },
  'DIY': {
    'Upfront Cost': '€0-€500',
    'Ongoing Cost': '€5-€50/mo',
    'Time to Launch': '1 week-3 months',
    'Ease of Process': (
      <div>
        <span className="font-medium">High effort:</span> Learn Canva/Wix, design, troubleshoot
        <div className="text-xs text-[#0D503C]/70">Steep learning curve</div>
      </div>
    ),
    'Design Quality': (
      <div>
        Template-based, risks looking generic
        <div className="text-xs text-[#0D503C]/70">Depends on skill</div>
      </div>
    ),
    'Scalability': (
      <div>
        <span className="font-medium">Limited:</span> Templates restrict growth; scaling often requires starting over
      </div>
    ),
    'Conversion & Visibility': (
      <div>
        <span className="font-medium">Basic:</span> Limited SEO/UX unless you're skilled or buy plugins
      </div>
    ),
  }
};

// Category icons using emojis
export const categoryIcons = {
  'Upfront Cost': <span className="text-xl">💶</span>,
  'Ongoing Cost': <span className="text-xl">📅💸</span>,
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
