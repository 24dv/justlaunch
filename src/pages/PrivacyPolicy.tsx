
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    document.title = t('privacy.pageTitle');
    window.scrollTo(0, 0);
  }, [t]);

  return (
    <div className="min-h-screen bg-[#F5F5E9] text-[#0D503C] antialiased">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-serif mb-8">{t('privacy.title')}</h1>
        
        <div className="prose prose-green max-w-none">
          <p className="mb-6">{t('privacy.lastUpdated', { date: new Date().toLocaleDateString() })}</p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-serif mb-4">{t('privacy.introduction.title')}</h2>
            <p>{t('privacy.introduction.p1')}</p>
            <p className="mt-4">{t('privacy.introduction.p2')}</p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-serif mb-4">{t('privacy.dataCollection.title')}</h2>
            <p>{t('privacy.dataCollection.p1')}</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>{t('privacy.dataCollection.personalData.name')}</li>
              <li>{t('privacy.dataCollection.personalData.contact')}</li>
              <li>{t('privacy.dataCollection.personalData.usage')}</li>
              <li>{t('privacy.dataCollection.personalData.technical')}</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-serif mb-4">{t('privacy.cookiesUsage.title')}</h2>
            <p>{t('privacy.cookiesUsage.p1')}</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>{t('cookies.necessary.title')}</strong>: {t('privacy.cookiesUsage.necessaryCookies')}</li>
              <li><strong>{t('cookies.preferences.title')}</strong>: {t('privacy.cookiesUsage.preferenceCookies')}</li>
              <li><strong>{t('cookies.statistics.title')}</strong>: {t('privacy.cookiesUsage.statisticsCookies')}</li>
              <li><strong>{t('cookies.marketing.title')}</strong>: {t('privacy.cookiesUsage.marketingCookies')}</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-serif mb-4">{t('privacy.dataUsage.title')}</h2>
            <p>{t('privacy.dataUsage.p1')}</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>{t('privacy.dataUsage.purposes.service')}</li>
              <li>{t('privacy.dataUsage.purposes.communication')}</li>
              <li>{t('privacy.dataUsage.purposes.improvement')}</li>
              <li>{t('privacy.dataUsage.purposes.marketing')}</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-serif mb-4">{t('privacy.dataSharing.title')}</h2>
            <p>{t('privacy.dataSharing.p1')}</p>
            <p className="mt-4">{t('privacy.dataSharing.p2')}</p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-serif mb-4">{t('privacy.dataRetention.title')}</h2>
            <p>{t('privacy.dataRetention.p1')}</p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-serif mb-4">{t('privacy.userRights.title')}</h2>
            <p>{t('privacy.userRights.p1')}</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>{t('privacy.userRights.rights.access')}</li>
              <li>{t('privacy.userRights.rights.rectification')}</li>
              <li>{t('privacy.userRights.rights.erasure')}</li>
              <li>{t('privacy.userRights.rights.restriction')}</li>
              <li>{t('privacy.userRights.rights.dataPortability')}</li>
              <li>{t('privacy.userRights.rights.objection')}</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-serif mb-4">{t('privacy.security.title')}</h2>
            <p>{t('privacy.security.p1')}</p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-serif mb-4">{t('privacy.changes.title')}</h2>
            <p>{t('privacy.changes.p1')}</p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-serif mb-4">{t('privacy.contact.title')}</h2>
            <p>{t('privacy.contact.p1')}</p>
            <p className="mt-4">{t('privacy.contact.p2')} <a href="mailto:hello@justlaunch.be" className="text-[#0D503C] hover:underline">hello@justlaunch.be</a></p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
