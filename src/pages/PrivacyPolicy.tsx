
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5E9]">
      <Navbar />
      
      <main className="flex-grow container mx-auto py-12 px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="space-y-10">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-[#0D503C] font-serif">{t('privacy.title')}</h1>
            <p className="text-base text-[#0D503C]/80 mb-8">{t('privacy.lastUpdated', { date: new Date().toLocaleDateString() })}</p>
          </div>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0D503C] font-serif">{t('privacy.introduction.title')}</h2>
            <p className="text-base text-[#0D503C]/80 mb-4">{t('privacy.introduction.text')}</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0D503C] font-serif">{t('privacy.dataCollection.title')}</h2>
            <p className="text-base text-[#0D503C]/80 mb-4">{t('privacy.dataCollection.text')}</p>
            <ul className="list-disc pl-6 text-[#0D503C]/80 space-y-2">
              <li>{t('privacy.dataCollection.items.personal')}</li>
              <li>{t('privacy.dataCollection.items.usage')}</li>
              <li>{t('privacy.dataCollection.items.technical')}</li>
              <li>{t('privacy.dataCollection.items.cookies')}</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0D503C] font-serif">{t('privacy.dataUse.title')}</h2>
            <p className="text-base text-[#0D503C]/80 mb-4">{t('privacy.dataUse.text')}</p>
            <ul className="list-disc pl-6 text-[#0D503C]/80 space-y-2">
              <li>{t('privacy.dataUse.items.service')}</li>
              <li>{t('privacy.dataUse.items.improvement')}</li>
              <li>{t('privacy.dataUse.items.communication')}</li>
              <li>{t('privacy.dataUse.items.legal')}</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0D503C] font-serif">{t('privacy.cookies.title')}</h2>
            <p className="text-base text-[#0D503C]/80 mb-4">{t('privacy.cookies.text')}</p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#0D503C]">{t('privacy.cookies.types.necessary.title')}</h3>
                <p className="text-base text-[#0D503C]/80">{t('privacy.cookies.types.necessary.description')}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#0D503C]">{t('privacy.cookies.types.analytics.title')}</h3>
                <p className="text-base text-[#0D503C]/80">{t('privacy.cookies.types.analytics.description')}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#0D503C]">{t('privacy.cookies.types.marketing.title')}</h3>
                <p className="text-base text-[#0D503C]/80">{t('privacy.cookies.types.marketing.description')}</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0D503C] font-serif">{t('privacy.dataSharing.title')}</h2>
            <p className="text-base text-[#0D503C]/80 mb-4">{t('privacy.dataSharing.text')}</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0D503C] font-serif">{t('privacy.dataRights.title')}</h2>
            <p className="text-base text-[#0D503C]/80 mb-4">{t('privacy.dataRights.text')}</p>
            <ul className="list-disc pl-6 text-[#0D503C]/80 space-y-2">
              <li>{t('privacy.dataRights.items.access')}</li>
              <li>{t('privacy.dataRights.items.rectification')}</li>
              <li>{t('privacy.dataRights.items.erasure')}</li>
              <li>{t('privacy.dataRights.items.restriction')}</li>
              <li>{t('privacy.dataRights.items.objection')}</li>
              <li>{t('privacy.dataRights.items.portability')}</li>
            </ul>
            <p className="mt-4 text-base text-[#0D503C]/80">{t('privacy.dataRights.contact')}</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0D503C] font-serif">{t('privacy.security.title')}</h2>
            <p className="text-base text-[#0D503C]/80">{t('privacy.security.text')}</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0D503C] font-serif">{t('privacy.changes.title')}</h2>
            <p className="text-base text-[#0D503C]/80">{t('privacy.changes.text')}</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#0D503C] font-serif">{t('privacy.contact.title')}</h2>
            <p className="text-base text-[#0D503C]/80">
              {t('privacy.contact.text')}
              <br />
              <a href="mailto:hello@justlaunch.be" className="text-[#0D503C] hover:text-[#F9A7A7] underline">
                hello@justlaunch.be
              </a>
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
