
import React, { useEffect } from 'react';
import { Shield, ChevronLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-[#F5F5E9] min-h-screen">
      <div className="container mx-auto py-12 px-6">
        <Button 
          variant="ghost" 
          onClick={goBack} 
          className="mb-6 text-[#0D503C] hover:text-[#0D503C] hover:bg-[#0D503C]/10"
        >
          <ChevronLeft size={16} className="mr-1" />
          {t('privacyPolicy.back') || 'Back'}
        </Button>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-[#0D503C]" size={24} />
            <h1 className="text-3xl font-serif font-semibold text-[#0D503C]">
              {t('privacyPolicy.title') || 'Privacy Policy'}
            </h1>
          </div>

          <p className="text-sm text-[#666] mb-8">
            {t('privacyPolicy.lastUpdated') || 'Last Updated'}: April 11, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-serif font-medium text-[#0D503C] mb-3">
                {t('privacyPolicy.introduction.title') || '1. Introduction'}
              </h2>
              <p className="text-[#333] mb-4">
                {t('privacyPolicy.introduction.content') || 
                  'Just Launch ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy informs you about how we look after your personal data when you visit our website and tells you about your privacy rights and how the law protects you.'}
              </p>
            </section>

            <Separator className="bg-[#0D503C]/10" />

            <section>
              <h2 className="text-xl font-serif font-medium text-[#0D503C] mb-3">
                {t('privacyPolicy.dataCollection.title') || '2. What Data We Collect'}
              </h2>
              <p className="text-[#333] mb-3">
                {t('privacyPolicy.dataCollection.content') || 
                  'We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#333]">
                <li>
                  <span className="font-medium">{t('privacyPolicy.dataCollection.identity') || 'Identity Data'}</span>: 
                  {t('privacyPolicy.dataCollection.identityDesc') || ' includes first name, last name, username or similar identifier.'}
                </li>
                <li>
                  <span className="font-medium">{t('privacyPolicy.dataCollection.contact') || 'Contact Data'}</span>: 
                  {t('privacyPolicy.dataCollection.contactDesc') || ' includes email address and telephone numbers.'}
                </li>
                <li>
                  <span className="font-medium">{t('privacyPolicy.dataCollection.technical') || 'Technical Data'}</span>: 
                  {t('privacyPolicy.dataCollection.technicalDesc') || ' includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.'}
                </li>
                <li>
                  <span className="font-medium">{t('privacyPolicy.dataCollection.usage') || 'Usage Data'}</span>: 
                  {t('privacyPolicy.dataCollection.usageDesc') || ' includes information about how you use our website, products and services.'}
                </li>
              </ul>
            </section>

            <Separator className="bg-[#0D503C]/10" />

            <section>
              <h2 className="text-xl font-serif font-medium text-[#0D503C] mb-3">
                {t('privacyPolicy.cookies.title') || '3. Cookies'}
              </h2>
              <p className="text-[#333] mb-3">
                {t('privacyPolicy.cookies.content') || 
                  'Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.'}
              </p>
              <p className="text-[#333] mb-3">
                {t('privacyPolicy.cookies.types') || 'We use the following cookies:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#333]">
                <li>
                  <span className="font-medium">{t('privacyPolicy.cookies.necessary') || 'Necessary Cookies'}</span>: 
                  {t('privacyPolicy.cookies.necessaryDesc') || ' These cookies are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website.'}
                </li>
                <li>
                  <span className="font-medium">{t('privacyPolicy.cookies.analytics') || 'Analytical/Performance Cookies'}</span>: 
                  {t('privacyPolicy.cookies.analyticsDesc') || ' These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.'}
                </li>
                <li>
                  <span className="font-medium">{t('privacyPolicy.cookies.functional') || 'Functionality Cookies'}</span>: 
                  {t('privacyPolicy.cookies.functionalDesc') || ' These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.'}
                </li>
                <li>
                  <span className="font-medium">{t('privacyPolicy.cookies.targeting') || 'Targeting Cookies'}</span>: 
                  {t('privacyPolicy.cookies.targetingDesc') || ' These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.'}
                </li>
              </ul>
            </section>

            <Separator className="bg-[#0D503C]/10" />

            <section>
              <h2 className="text-xl font-serif font-medium text-[#0D503C] mb-3">
                {t('privacyPolicy.dataUse.title') || '4. How We Use Your Data'}
              </h2>
              <p className="text-[#333] mb-3">
                {t('privacyPolicy.dataUse.content') || 'We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#333]">
                <li>{t('privacyPolicy.dataUse.consent') || 'Where you have given us consent to do so.'}</li>
                <li>{t('privacyPolicy.dataUse.contract') || 'Where we need to perform the contract we are about to enter into or have entered into with you.'}</li>
                <li>{t('privacyPolicy.dataUse.legal') || 'Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.'}</li>
                <li>{t('privacyPolicy.dataUse.compliance') || 'Where we need to comply with a legal obligation.'}</li>
              </ul>
            </section>

            <Separator className="bg-[#0D503C]/10" />

            <section>
              <h2 className="text-xl font-serif font-medium text-[#0D503C] mb-3">
                {t('privacyPolicy.rights.title') || '5. Your Legal Rights'}
              </h2>
              <p className="text-[#333] mb-3">
                {t('privacyPolicy.rights.content') || 'Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#333]">
                <li>{t('privacyPolicy.rights.access') || 'Request access to your personal data.'}</li>
                <li>{t('privacyPolicy.rights.correction') || 'Request correction of your personal data.'}</li>
                <li>{t('privacyPolicy.rights.erasure') || 'Request erasure of your personal data.'}</li>
                <li>{t('privacyPolicy.rights.restriction') || 'Request restriction of processing your personal data.'}</li>
                <li>{t('privacyPolicy.rights.transfer') || 'Request transfer of your personal data.'}</li>
                <li>{t('privacyPolicy.rights.object') || 'Right to object to processing of your personal data.'}</li>
              </ul>
            </section>

            <Separator className="bg-[#0D503C]/10" />

            <section>
              <h2 className="text-xl font-serif font-medium text-[#0D503C] mb-3">
                {t('privacyPolicy.contact.title') || '6. Contact Us'}
              </h2>
              <p className="text-[#333]">
                {t('privacyPolicy.contact.content') || 'If you have any questions about this privacy policy or our privacy practices, please contact us at:'}
              </p>
              <div className="mt-3">
                <p className="text-[#333]">Email: <a href="mailto:hello@justlaunch.be" className="text-[#0D503C] hover:underline">hello@justlaunch.be</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
