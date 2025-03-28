import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from '../contexts/LanguageContext';

const FaqSection = () => {
  const { t } = useLanguage();

  const faqItems = [
    {
      question: "How long does it take to deliver?",
      answer: "We aim to launch your full brand and website within 14 days of kickoff — as long as feedback and content are provided on time. We'll share a clear timeline once your spot is confirmed."
    },
    {
      question: "Can I make changes after I receive the drafts?",
      answer: "Yes — each package includes at least one round of revisions. You'll have a chance to give feedback before we finalize."
    },
    {
      question: "How does the payment plan work?",
      answer: "For the Premium Package, you can split the cost into 3 equal monthly payments. No extra fees, no surprises."
    },
    {
      question: "Do I get everything I need to launch and use my brand?",
      answer: "Yes — you'll receive high-resolution PNG files that are ready to use across your website, social media, and digital platforms. For most founders, that's all you'll ever need."
    },
    {
      question: "Is this right for me if I'm just getting started?",
      answer: "Absolutely. We work with solo founders, freelancers, and small businesses at all stages — whether you're launching something new or refreshing your current brand."
    },
    {
      question: "Can I add more pages, templates, or services later?",
      answer: "Yes — additional work like extra pages or marketing assets can be added after your launch. Just reach out, we'll always give you a clear quote first."
    },
    {
      question: "Where are you based?",
      answer: "Just Launch is based in Belgium, but we work with clients all over Europe and beyond."
    }
  ];

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

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="border-2 border-[#0D503C] rounded-xl overflow-hidden divide-y-2 divide-[#0D503C]/30">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-b last:border-b-0 bg-[#F5F5E9]"
              >
                <AccordionTrigger className="p-5 text-lg font-medium text-[#0D503C] font-serif hover:text-[#0D503C]/80 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 pt-0 text-[#0D503C]/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
