
import React from 'react';
import FaqHeader from './faq/FaqHeader';
import FaqList from './faq/FaqList';
import FaqFooter from './faq/FaqFooter';
import { useLanguage } from '../contexts/LanguageContext';
import { FaqItemType } from './faq/FaqList';

const FaqSection = () => {
  const { t, language } = useLanguage();
  
  // Create localized FAQ items based on current language
  const faqItems: FaqItemType[] = [
    {
      question: t('faq.question1.title'),
      answer: t('faq.question1.answer')
    },
    {
      question: t('faq.question2.title'),
      answer: t('faq.question2.answer')
    },
    {
      question: t('faq.question3.title'),
      answer: t('faq.question3.answer')
    },
    {
      question: t('faq.question4.title'),
      answer: t('faq.question4.answer')
    },
    {
      question: t('faq.question5.title'),
      answer: t('faq.question5.answer')
    },
    {
      question: t('faq.question6.title'),
      answer: t('faq.question6.answer')
    },
    {
      question: t('faq.question7.title'),
      answer: t('faq.question7.answer')
    }
  ];

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
