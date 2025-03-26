
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
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {t(`faq.question${index}.title`)}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-3 text-gray-600 animate-accordion-down">
                  <p>{t(`faq.question${index}.answer`)}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            {t('faq.moreQuestions')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition-colors"
          >
            {t('faq.contactUs')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
