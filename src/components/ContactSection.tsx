
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactHeader from './contact/ContactHeader';
import ContactInfoSection from './contact/ContactInfoSection';
import ContactForm from './contact/ContactForm';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding pb-24 bg-[#F5F5E9]">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Change from grid layout to flex layout with alignment start */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="mt-1 lg:flex-1">
              <ContactHeader />
              <ContactInfoSection />
            </div>
            <div className="w-full lg:flex-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
