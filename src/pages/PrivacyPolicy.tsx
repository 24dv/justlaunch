
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    document.title = t('privacy.pageTitle');
    window.scrollTo(0, 0);
  }, [t]);

  return (
    <div className="min-h-screen bg-[#F5F5E9] text-[#0D503C] antialiased flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-12 px-6 md:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">{t('privacy.title')}</h1>
        
        <div className="prose prose-green max-w-none">
          <p className="mb-6">{t('privacy.lastUpdated', { date: new Date().toLocaleDateString(language === 'nl' ? 'nl-NL' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' }) })}</p>
          
          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">{t('privacy.introduction.title')}</h2>
          <p>{t('privacy.introduction.content')}</p>
          
          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">{t('privacy.dataCollection.title')}</h2>
          <p>{t('privacy.dataCollection.content')}</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>{t('privacy.dataCollection.items.1')}</li>
            <li>{t('privacy.dataCollection.items.2')}</li>
            <li>{t('privacy.dataCollection.items.3')}</li>
            <li>{t('privacy.dataCollection.items.4')}</li>
          </ul>
          
          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">{t('privacy.cookieUsage.title')}</h2>
          <p>{t('privacy.cookieUsage.content')}</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>{t('privacy.cookieUsage.items.1')}</li>
            <li>{t('privacy.cookieUsage.items.2')}</li>
            <li>{t('privacy.cookieUsage.items.3')}</li>
          </ul>
          
          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">{t('privacy.dataUsage.title')}</h2>
          <p>{t('privacy.dataUsage.content')}</p>
          
          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">{t('privacy.dataSharing.title')}</h2>
          <p>{t('privacy.dataSharing.content')}</p>
          
          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">{t('privacy.dataRetention.title')}</h2>
          <p>{t('privacy.dataRetention.content')}</p>
          
          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">{t('privacy.userRights.title')}</h2>
          <p>{t('privacy.userRights.content')}</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>{t('privacy.userRights.items.1')}</li>
            <li>{t('privacy.userRights.items.2')}</li>
            <li>{t('privacy.userRights.items.3')}</li>
            <li>{t('privacy.userRights.items.4')}</li>
            <li>{t('privacy.userRights.items.5')}</li>
          </ul>
          
          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">{t('privacy.security.title')}</h2>
          <p>{t('privacy.security.content')}</p>
          
          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">{t('privacy.changes.title')}</h2>
          <p>{t('privacy.changes.content')}</p>
          
          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">{t('privacy.contact.title')}</h2>
          <p>{t('privacy.contact.content')}</p>
          <p className="mt-2">Email: <a href="mailto:hello@justlaunch.be" className="text-[#0D503C] underline">hello@justlaunch.be</a></p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
