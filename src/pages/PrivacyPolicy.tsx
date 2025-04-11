
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#F5F5E9] min-h-screen">
      <div className="container mx-auto py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-[#0D503C]/70 hover:text-[#F9A7A7] transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              {t('privacy.backToHome')}
            </Link>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-[#0D503C]/10">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-[#0D503C]" />
              <h1 className="text-3xl font-serif text-[#0D503C]">{t('privacy.title')}</h1>
            </div>

            <div className="prose prose-green max-w-none text-[#0D503C]/80">
              <p className="text-lg mb-6">{t('privacy.introduction')}</p>

              <h2 className="text-xl font-serif text-[#0D503C] mt-8 mb-4">{t('privacy.whatWeCollect.title')}</h2>
              <p>{t('privacy.whatWeCollect.description')}</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>{t('privacy.whatWeCollect.item1')}</li>
                <li>{t('privacy.whatWeCollect.item2')}</li>
                <li>{t('privacy.whatWeCollect.item3')}</li>
              </ul>

              <h2 className="text-xl font-serif text-[#0D503C] mt-8 mb-4">{t('privacy.howWeUse.title')}</h2>
              <p>{t('privacy.howWeUse.description')}</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>{t('privacy.howWeUse.item1')}</li>
                <li>{t('privacy.howWeUse.item2')}</li>
                <li>{t('privacy.howWeUse.item3')}</li>
              </ul>

              <h2 className="text-xl font-serif text-[#0D503C] mt-8 mb-4">{t('privacy.cookies.title')}</h2>
              <p>{t('privacy.cookies.description')}</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>{t('privacy.cookies.item1')}</li>
                <li>{t('privacy.cookies.item2')}</li>
              </ul>

              <h2 className="text-xl font-serif text-[#0D503C] mt-8 mb-4">{t('privacy.thirdParty.title')}</h2>
              <p>{t('privacy.thirdParty.description')}</p>

              <h2 className="text-xl font-serif text-[#0D503C] mt-8 mb-4">{t('privacy.rights.title')}</h2>
              <p>{t('privacy.rights.description')}</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>{t('privacy.rights.item1')}</li>
                <li>{t('privacy.rights.item2')}</li>
                <li>{t('privacy.rights.item3')}</li>
                <li>{t('privacy.rights.item4')}</li>
              </ul>

              <h2 className="text-xl font-serif text-[#0D503C] mt-8 mb-4">{t('privacy.contact.title')}</h2>
              <p>{t('privacy.contact.description')}</p>
              <p className="mt-4">Email: <a href="mailto:hello@justlaunch.be" className="text-[#0D503C] hover:text-[#F9A7A7] transition-colors">hello@justlaunch.be</a></p>

              <h2 className="text-xl font-serif text-[#0D503C] mt-8 mb-4">{t('privacy.updates.title')}</h2>
              <p>{t('privacy.updates.description')}</p>
              <p className="mt-4 italic text-sm">{t('privacy.lastUpdated')}: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
