
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import ContactFormSuccess from './ContactFormSuccess';
import ContactFormField from './ContactFormField';
import ContactFormButton from './ContactFormButton';
import ContactPackageSelect from './ContactPackageSelect';

type FormState = {
  name: string;
  email: string;
  package: string;
};

const ContactForm = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    package: 'launch'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handlePackageChange = (value: string) => {
    setFormState(prev => ({ ...prev, package: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('https://formspree.io/f/mjkyebnn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          package: formState.package,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      navigate('/thank-you');
    } catch (err) {
      console.error('Failed to send form:', err);
      setError('Failed to send your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F5F5E9] rounded-xl shadow-lg border-2 border-[#0D503C] overflow-hidden">
      {isSubmitted ? (
        <ContactFormSuccess />
      ) : (
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <ContactFormField
            id="name"
            name="name"
            label={t('contact.form.name')}
            value={formState.name}
            onChange={handleChange}
            placeholder={language === 'en' ? "Thijs Doe" : "Jan Jansen"}
          />
          
          <ContactFormField
            id="email"
            name="email"
            type="email"
            label={t('contact.form.email')}
            value={formState.email}
            onChange={handleChange}
            placeholder={language === 'en' ? "thijs@yourstartup.com" : "jan@voorbeeld.nl"}
          />
          
          <ContactPackageSelect
            value={formState.package}
            onValueChange={handlePackageChange}
          />
          
          {error && (
            <div className="p-3 bg-red-100 border border-red-300 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}
          
          <ContactFormButton isSubmitting={isSubmitting} />
          
          <p className="text-xs text-[#0D503C]/70 text-center">
            {t('contact.form.privacy')}
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
