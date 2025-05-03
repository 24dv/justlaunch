
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactHeader />
              <ContactInfoSection />
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
