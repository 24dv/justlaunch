
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-6 py-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#0D503C] mb-8">
          {t('privacy.title')}
        </h1>
        
        <div className="prose prose-green max-w-none">
          <p className="mb-6 text-gray-700">
            {t('privacy.lastUpdated')} {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-8">
            <h2 className="text-xl font-serif font-semibold text-[#0D503C] mb-4">
              {t('privacy.introduction.title')}
            </h2>
            <p className="mb-4 text-gray-700">
              {t('privacy.introduction.p1')}
            </p>
            <p className="mb-4 text-gray-700">
              {t('privacy.introduction.p2')}
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-serif font-semibold text-[#0D503C] mb-4">
              {t('privacy.dataCollection.title')}
            </h2>
            <p className="mb-4 text-gray-700">
              {t('privacy.dataCollection.p1')}
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">{t('privacy.dataCollection.list.item1')}</li>
              <li className="mb-2">{t('privacy.dataCollection.list.item2')}</li>
              <li className="mb-2">{t('privacy.dataCollection.list.item3')}</li>
              <li className="mb-2">{t('privacy.dataCollection.list.item4')}</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-serif font-semibold text-[#0D503C] mb-4">
              {t('privacy.cookies.title')}
            </h2>
            <p className="mb-4 text-gray-700">
              {t('privacy.cookies.p1')}
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">
                <strong>{t('privacy.cookies.list.item1.title')}</strong>: {t('privacy.cookies.list.item1.description')}
              </li>
              <li className="mb-2">
                <strong>{t('privacy.cookies.list.item2.title')}</strong>: {t('privacy.cookies.list.item2.description')}
              </li>
              <li className="mb-2">
                <strong>{t('privacy.cookies.list.item3.title')}</strong>: {t('privacy.cookies.list.item3.description')}
              </li>
              <li className="mb-2">
                <strong>{t('privacy.cookies.list.item4.title')}</strong>: {t('privacy.cookies.list.item4.description')}
              </li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-serif font-semibold text-[#0D503C] mb-4">
              {t('privacy.dataSharing.title')}
            </h2>
            <p className="mb-4 text-gray-700">
              {t('privacy.dataSharing.p1')}
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-serif font-semibold text-[#0D503C] mb-4">
              {t('privacy.dataRights.title')}
            </h2>
            <p className="mb-4 text-gray-700">
              {t('privacy.dataRights.p1')}
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">{t('privacy.dataRights.list.item1')}</li>
              <li className="mb-2">{t('privacy.dataRights.list.item2')}</li>
              <li className="mb-2">{t('privacy.dataRights.list.item3')}</li>
              <li className="mb-2">{t('privacy.dataRights.list.item4')}</li>
              <li className="mb-2">{t('privacy.dataRights.list.item5')}</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-serif font-semibold text-[#0D503C] mb-4">
              {t('privacy.contact.title')}
            </h2>
            <p className="mb-4 text-gray-700">
              {t('privacy.contact.p1')} <a href="mailto:hello@justlaunch.be" className="text-[#0D503C] hover:text-[#F9A7A7] transition-colors">hello@justlaunch.be</a>.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
