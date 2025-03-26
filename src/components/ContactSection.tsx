
import React, { useState } from 'react';
import { Check, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    package: 'launch'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset after showing success message
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          company: '',
          message: '',
          package: 'launch'
        });
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-[#F5F5E9]">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D503C] mb-4 font-serif">
                {t('contact.title')}
              </h2>
              <p className="text-xl text-[#0D503C]/80 mb-8">
                {t('contact.subtitle')}
              </p>
              <div className="w-24 h-1 bg-[#0D503C] mb-8" />
              
              <div className="bg-[#0D503C]/5 p-6 rounded-xl mb-8 border-2 border-dashed border-[#0D503C]/30">
                <h3 className="text-xl font-semibold text-[#0D503C] mb-4 font-serif">
                  {t('contact.nextSteps')}
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 text-[#0D503C] flex items-center justify-center mr-3 border border-[#0D503C]/20">
                      <span className="text-sm font-medium">1</span>
                    </div>
                    <p className="text-[#0D503C]/80">
                      {t('contact.step1')}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 text-[#0D503C] flex items-center justify-center mr-3 border border-[#0D503C]/20">
                      <span className="text-sm font-medium">2</span>
                    </div>
                    <p className="text-[#0D503C]/80">
                      {t('contact.step2')}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 text-[#0D503C] flex items-center justify-center mr-3 border border-[#0D503C]/20">
                      <span className="text-sm font-medium">3</span>
                    </div>
                    <p className="text-[#0D503C]/80">
                      {t('contact.step3')}
                    </p>
                  </li>
                </ul>
              </div>
              
              <div className="text-[#0D503C]/80">
                <p className="font-medium text-[#0D503C]">{t('contact.questions')}</p>
                <p className="mt-2 text-[#0D503C]">{t('contact.email')}</p>
              </div>
            </div>
            
            <div className="bg-[#F5F5E9] rounded-xl shadow-lg p-8 border-2 border-[#0D503C]">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <div className="h-12 w-12 bg-[#F9A7A7]/30 rounded-full flex items-center justify-center mb-4 border border-[#F9A7A7]">
                    <Check className="h-6 w-6 text-[#0D503C]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D503C] mb-2 font-serif">{t('contact.success.title')}</h3>
                  <p className="text-[#0D503C]/80">
                    {t('contact.success.message')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0D503C] mb-1">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#0D503C]/30 rounded-lg focus:ring-2 focus:ring-[#0D503C] focus:border-[#0D503C] bg-[#F5F5E9]"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0D503C] mb-1">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#0D503C]/30 rounded-lg focus:ring-2 focus:ring-[#0D503C] focus:border-[#0D503C] bg-[#F5F5E9]"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#0D503C] mb-1">
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#0D503C]/30 rounded-lg focus:ring-2 focus:ring-[#0D503C] focus:border-[#0D503C] bg-[#F5F5E9]"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="package" className="block text-sm font-medium text-[#0D503C] mb-1">
                      {t('contact.form.package')}
                    </label>
                    <select
                      id="package"
                      name="package"
                      value={formState.package}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#0D503C]/30 rounded-lg focus:ring-2 focus:ring-[#0D503C] focus:border-[#0D503C] bg-[#F5F5E9]"
                    >
                      <option value="launch">Launch Package (€1,500)</option>
                      <option value="premium">Premium Package (€2,500)</option>
                      <option value="premium-plan">Premium Package - Payment Plan (€833/month)</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0D503C] mb-1">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-[#0D503C]/30 rounded-lg focus:ring-2 focus:ring-[#0D503C] focus:border-[#0D503C] bg-[#F5F5E9]"
                      placeholder="Share a bit about your project and what you're looking for..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 flex items-center justify-center rounded-lg text-[#F5F5E9] font-medium transition-colors ${
                      isSubmitting
                        ? 'bg-[#0D503C]/50 cursor-not-allowed'
                        : 'bg-[#0D503C] hover:bg-[#0A4231]'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#F5F5E9]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('contact.form.submitting')}
                      </span>
                    ) : (
                      <span className="flex items-center">
                        {t('contact.form.submit')}
                        <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </button>
                  
                  <p className="text-xs text-[#0D503C]/70 text-center mt-4">
                    {t('contact.form.privacy')}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
