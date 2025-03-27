
import React from 'react';
import { Shield, Settings } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const MaintenanceCard = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#F5F5E9] rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl border-2 border-[#0D503C]">
      <div className="p-8">
        <div className="flex items-center mb-4">
          <Shield className="h-8 w-8 text-[#0D503C] mr-3" />
          <h3 className="text-2xl font-bold text-[#0D503C] font-serif">
            Ongoing Maintenance & Security
          </h3>
        </div>
        <div className="flex items-baseline mt-4 mb-6">
          <span className="text-4xl font-extrabold text-[#0D503C]">
            €10
          </span>
          <span className="ml-2 text-[#0D503C]/70">/ month</span>
        </div>
        <p className="text-[#0D503C]/80 mb-4">
          We keep your website online, secure, and running smoothly—so you don't have to worry about a thing.
        </p>
        <p className="text-xs text-[#0D503C]/70 mb-4">
          * Monthly subscription for continuous website care
        </p>
        <div className="bg-[#0D503C]/5 rounded-lg p-4 border border-[#0D503C]/10 mt-4">
          <div className="flex items-center mb-2">
            <Settings className="h-5 w-5 text-[#0D503C] mr-2" />
            <h4 className="text-sm font-semibold text-[#0D503C]">What's Included</h4>
          </div>
          <ul className="space-y-2 text-[#0D503C]/80 text-sm">
            <li>• Website hosting</li>
            <li>• Security monitoring</li>
            <li>• Regular software updates</li>
            <li>• Performance optimization</li>
            <li>• Monthly performance report</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceCard;
