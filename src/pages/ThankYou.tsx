
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const ThankYou = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5E9]">
      <Helmet>
        <title>{t('contact.thankyou.title')} | Just Launch</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="text-center p-8 max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-[#0D503C] font-serif">{t('contact.thankyou.title')}</h1>
        <p className="text-xl text-[#0D503C]/80 mb-8">
          {t('contact.thankyou.message')}
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center rounded-full bg-[#0D503C] px-5 py-2.5 text-sm font-medium text-[#F5F5E9] shadow-sm hover:bg-[#0A4231] transition-all"
        >
          {t('contact.thankyou.backHome')}
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
