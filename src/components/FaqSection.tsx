
import React from 'react';
import FaqHeader from './faq/FaqHeader';
import FaqList from './faq/FaqList';
import FaqFooter from './faq/FaqFooter';
import { faqItems } from '../data/faqData';

const FaqSection = () => {
  return (
    <section id="faq" className="section-padding bg-[#F5F5E9]">
      <div className="container mx-auto">
        <FaqHeader />
        <FaqList items={faqItems} />
        <FaqFooter />
      </div>
    </section>
  );
};

export default FaqSection;
