
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to deliver?",
    answer: "Our standard delivery time is 14 days from the moment we receive your project brief and initial payment. The Premium Package may take up to 21 days due to the additional deliverables included."
  },
  {
    question: "Can I make changes after I receive the drafts?",
    answer: "Absolutely! Our Launch Package includes two rounds of revisions, while the Premium Package includes three rounds. Additional revision rounds can be arranged for an extra fee if needed."
  },
  {
    question: "What if I need additional services later?",
    answer: "We offer a range of services that can be added to your package at any time. This includes additional pages, social media templates, print materials, and more. Just reach out to us with your specific needs."
  },
  {
    question: "How does the payment plan work?",
    answer: "Our payment plan splits the total cost into three equal monthly payments. You'll pay the first installment to start the project, the second after approving the initial drafts, and the final payment before receiving the completed files."
  },
  {
    question: "Do you provide the source files of my logo and website?",
    answer: "Yes, upon completion, you'll receive all source files for your logo (AI, EPS, PDF) and website. You'll have full ownership of all the assets we create for you."
  },
  {
    question: "What information do you need to get started?",
    answer: "To get started, we need information about your business, target audience, preferences, competitors, and any design inspiration. We'll provide a comprehensive questionnaire after you sign up."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to the most common questions about our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-3 text-gray-600 animate-accordion-down">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
