
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-[#F5F5E9]">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D503C] mb-4 font-serif tracking-tight">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-[#0D503C]/80">
            {t('faq.subtitle')}
          </p>
          <div className="w-24 h-1 bg-[#0D503C] mx-auto mt-6" />
        </div>

        <div className="max-w-3xl mx-auto divide-y-2 divide-[#0D503C]/30 border-2 border-[#0D503C] rounded-xl overflow-hidden">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="bg-[#F5F5E9]">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none p-5"
              >
                <h3 className="text-lg font-medium text-[#0D503C] font-serif">
                  {t(`faq.question${index}.title`)}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#0D503C]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#0D503C]" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-5 pt-0 text-[#0D503C]/80 animate-accordion-down">
                  <p>{t(`faq.question${index}.answer`)}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#0D503C]/80 mb-6">
            {t('faq.moreQuestions')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#0D503C] px-6 py-3 text-base font-medium text-[#F5F5E9] shadow-sm hover:bg-[#0A4231] transition-colors"
          >
            {t('faq.contactUs')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
