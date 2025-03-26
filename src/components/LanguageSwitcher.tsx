
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        className={`px-2 py-1 text-xs font-medium rounded ${
          language === 'en' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <button
        className={`px-2 py-1 text-xs font-medium rounded ${
          language === 'nl' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => setLanguage('nl')}
      >
        NL
      </button>
    </div>
  );
};

export default LanguageSwitcher;
