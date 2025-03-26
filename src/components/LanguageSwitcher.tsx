
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        className={`px-2 py-1 text-xs font-medium rounded-full border ${
          language === 'en' 
            ? 'bg-[#0D503C] text-[#F5F5E9] border-[#0D503C]' 
            : 'bg-transparent text-[#0D503C] border-[#0D503C] hover:bg-[#0D503C]/10'
        }`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <button
        className={`px-2 py-1 text-xs font-medium rounded-full border ${
          language === 'nl' 
            ? 'bg-[#0D503C] text-[#F5F5E9] border-[#0D503C]' 
            : 'bg-transparent text-[#0D503C] border-[#0D503C] hover:bg-[#0D503C]/10'
        }`}
        onClick={() => setLanguage('nl')}
      >
        NL
      </button>
    </div>
  );
};

export default LanguageSwitcher;
