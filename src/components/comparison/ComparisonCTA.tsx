
import React from 'react';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';

interface ComparisonCTAProps {
  onContactClick: () => void;
  onFormClick: () => void;
}

const ComparisonCTA: React.FC<ComparisonCTAProps> = ({ onContactClick, onFormClick }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-10">
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={onContactClick}
          className="bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0A4231] px-5 py-3 rounded-full text-base h-[44px] transform transition-transform hover:scale-[1.02]"
        >
          Book Your Free Intro Call
        </Button>
        
        <Button 
          onClick={onFormClick}
          variant="outline"
          className="border-[#0D503C] text-[#0D503C] bg-[#0D503C]/10 hover:bg-[#0A4231] hover:text-[#F5F5E9] hover:border-[#0A4231] px-5 py-3 rounded-full text-base h-[44px] transform transition-transform hover:scale-[1.02]"
        >
          Am I Ready to Launch?
        </Button>
      </div>
      
      <button 
        onClick={onContactClick}
        className="flex items-center gap-1 text-[#0D503C] hover:text-[#0A4231] underline underline-offset-4 font-medium"
      >
        See what we can do for you in 14 days!
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ComparisonCTA;
