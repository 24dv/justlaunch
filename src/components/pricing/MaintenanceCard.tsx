
import React from 'react';
import { Shield, Settings } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const MaintenanceCard = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#F5F5E9] rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl border-2 border-[#0D503C]">
      <div className="p-5 bg-[#0D503C] text-[#F5F5E9]">
        <div className="flex items-center mb-3">
          <Shield className="h-6 w-6 text-[#F5F5E9] mr-2" />
          <h3 className="text-xl font-bold text-[#F5F5E9] font-serif">
            {t('pricing.maintenance.title')}
          </h3>
        </div>
        <div className="flex items-baseline mt-2 mb-3">
          <span className="text-3xl font-extrabold text-[#F5F5E9]">
            €10
          </span>
          <span className="ml-2 text-[#F5F5E9]/70">/ month + VAT</span>
        </div>
        <p className="text-[#F5F5E9]/80 mb-3 text-sm">
          {t('pricing.maintenance.description')}
        </p>
        <div className="bg-[#F5F5E9]/10 rounded-lg p-3 border border-[#F5F5E9]/20">
          <div className="flex items-center mb-2">
            <Settings className="h-4 w-4 text-[#F5F5E9] mr-2" />
            <h4 className="text-sm font-semibold text-[#F5F5E9]">{t('pricing.maintenance.included')}</h4>
          </div>
          <div className="grid grid-cols-2 gap-x-2 text-[#F5F5E9]/80 text-xs">
            <div>• {t('pricing.maintenance.hosting')}</div>
            <div>• {t('pricing.maintenance.security')}</div>
            <div>• {t('pricing.maintenance.updates')}</div>
            <div>• {t('pricing.maintenance.optimization')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceCard;
