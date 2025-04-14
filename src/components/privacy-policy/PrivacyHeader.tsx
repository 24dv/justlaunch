
import React from 'react';
import { FileText, Clock } from 'lucide-react';

interface PrivacyHeaderProps {
  title: string;
  lastUpdated: string;
  formattedDate: string;
}

const PrivacyHeader = ({ title, lastUpdated, formattedDate }: PrivacyHeaderProps) => {
  return (
    <>
      <div className="flex items-center space-x-2 mb-4">
        <FileText size={24} className="text-[#0D503C]" />
        <h1 className="text-3xl font-serif m-0">{title}</h1>
      </div>
      
      <div className="flex items-center text-sm text-[#0D503C]/60 mb-8">
        <Clock size={16} className="mr-1" />
        {lastUpdated} {formattedDate}
      </div>
    </>
  );
};

export default PrivacyHeader;
