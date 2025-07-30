
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import ContactFormSuccess from './ContactFormSuccess';
import ContactFormField from './ContactFormField';
import ContactFormButton from './ContactFormButton';
import ContactPackageSelect from './ContactPackageSelect';
import { sanitizeInput, isValidEmail, isValidName, isValidPackage, RateLimiter } from '@/lib/security';

type FormState = {
  name: string;
  email: string;
  package: string;
};

type ValidationErrors = {
  name?: string;
  email?: string;
  package?: string;
  general?: string;
};

// Create rate limiter instance
const rateLimiter = new RateLimiter(3, 60000); // 3 attempts per minute

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
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const validateForm = (): ValidationErrors => {
    const errors: ValidationErrors = {};
    
    if (!formState.name.trim()) {
      errors.name = 'Name is required';
    } else if (!isValidName(formState.name)) {
      errors.name = 'Please enter a valid name (letters, spaces, hyphens only)';
    }
    
    if (!formState.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formState.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!isValidPackage(formState.package)) {
      errors.package = 'Please select a valid package';
    }
    
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    setFormState(prev => ({ ...prev, [name]: sanitizedValue }));
    
    // Clear validation error for this field
    if (validationErrors[name as keyof ValidationErrors]) {
      setValidationErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handlePackageChange = (value: string) => {
    setFormState(prev => ({ ...prev, package: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setValidationErrors({});
    
    // Rate limiting check
    const userIdentifier = formState.email || 'anonymous';
    if (!rateLimiter.isAllowed(userIdentifier)) {
      const remainingTime = Math.ceil(rateLimiter.getRemainingTime(userIdentifier) / 1000);
      setError(`Too many attempts. Please wait ${remainingTime} seconds before trying again.`);
      setIsSubmitting(false);
      return;
    }
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setIsSubmitting(false);
      return;
    }
    
    try {
      const response = await fetch('https://formspree.io/f/mjkyebnn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: sanitizeInput(formState.name),
          email: sanitizeInput(formState.email),
          package: formState.package,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      navigate('/thank-you');
    } catch (err) {
      console.error('Failed to send form:', err);
      setError('Unable to send your message. Please check your connection and try again.');
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
            error={validationErrors.name}
          />
          
          <ContactFormField
            id="email"
            name="email"
            type="email"
            label={t('contact.form.email')}
            value={formState.email}
            onChange={handleChange}
            placeholder={language === 'en' ? "thijs@yourstartup.com" : "jan@voorbeeld.nl"}
            error={validationErrors.email}
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
