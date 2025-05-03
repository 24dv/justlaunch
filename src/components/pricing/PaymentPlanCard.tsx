import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { X } from 'lucide-react';

interface PaymentPlanCardProps {
  onClose: () => void;
}

const PaymentPlanCard = ({ onClose }: PaymentPlanCardProps) => {
  const { t, language } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);

  // Listen for scroll events to close the modal
  useEffect(() => {
    const handleScroll = () => {
      // Simply close the modal on scroll
      onClose();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onClose]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div 
        ref={modalRef} 
        className="bg-[#F5F5E9] rounded-2xl shadow-2xl overflow-hidden border-2 border-[#0D503C] max-w-md w-full transition-all duration-300 ease-in-out animate-scale-up relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#0D503C]/10 transition-colors"
        >
          <X className="h-5 w-5 text-[#0D503C]" />
        </button>
        
        <div className="p-8">
          <div className="inline-flex items-center bg-[#F9A7A7]/30 text-[#0D503C] rounded-lg px-3 py-1 text-sm font-medium border border-[#F9A7A7] mb-4">
            {language === 'en' ? 'Easy Monthly Payments' : 'Gemakkelijke Maandelijkse Betalingen'}
          </div>
          
          <h3 className="text-2xl font-bold text-[#0D503C] mb-2 font-serif">
            {t('pricing.paymentPlan.title')}
          </h3>
          
          <div className="flex items-baseline mt-4 mb-6">
            <span className="text-4xl font-extrabold text-[#0D503C]">
              {t('pricing.paymentPlan.price')}
            </span>
            <span className="ml-2 text-[#0D503C]/70">{language === 'en' ? '+ VAT' : '+ BTW'}</span>
          </div>
          
          <p className="text-[#0D503C]/80 mb-6">
            {t('pricing.paymentPlan.description')}
          </p>

          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[#0D503C] uppercase tracking-wider">
                {t('pricing.paymentPlan.howItWorks')}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 flex items-center justify-center text-xs font-bold text-[#0D503C] mr-3 border border-[#0D503C]/20">
                    1
                  </div>
                  <p className="text-[#0D503C]/80">{t('pricing.paymentPlan.step1')}</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 flex items-center justify-center text-xs font-bold text-[#0D503C] mr-3 border border-[#0D503C]/20">
                    2
                  </div>
                  <p className="text-[#0D503C]/80">{t('pricing.paymentPlan.step2')}</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 flex items-center justify-center text-xs font-bold text-[#0D503C] mr-3 border border-[#0D503C]/20">
                    3
                  </div>
                  <p className="text-[#0D503C]/80">{t('pricing.paymentPlan.step3')}</p>
                </li>
              </ul>
            </div>

            <button
              onClick={scrollToContact}
              className="block w-full py-3 px-4 rounded-lg bg-[#F9A7A7] border border-[#0D503C]/20 text-[#0D503C] text-center font-medium hover:bg-[#F9A7A7]/80 transition-colors"
            >
              {t('pricing.paymentPlan.cta')}
            </button>

            <p className="text-sm text-[#0D503C]/70 text-center">
              {t('pricing.noPaymentCall')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlanCard;
