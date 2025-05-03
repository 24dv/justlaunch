
import React, { useState } from 'react';
import { Check, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

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
        <div className="h-full flex flex-col items-center justify-center text-center p-8">
          <div className="h-12 w-12 bg-[#F9A7A7]/30 rounded-full flex items-center justify-center mb-4 border border-[#F9A7A7]">
            <Check className="h-6 w-6 text-[#0D503C]" />
          </div>
          <h3 className="text-2xl font-bold text-[#0D503C] mb-2 font-serif">{t('contact.success.title')}</h3>
          <p className="text-[#0D503C]/80">
            {t('contact.success.message')}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div>
            <Label 
              htmlFor="name" 
              className="text-sm font-medium text-[#0D503C] block mb-2"
            >
              {t('contact.form.name')}
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full border-2 border-[#0D503C]/30 rounded-md focus:ring-2 focus:ring-[#0D503C] focus:border-[#0D503C] bg-[#F5F5E9]"
              placeholder={language === 'en' ? "Thijs Doe" : "Jan Jansen"}
            />
          </div>
          
          <div>
            <Label 
              htmlFor="email" 
              className="text-sm font-medium text-[#0D503C] block mb-2"
            >
              {t('contact.form.email')}
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full border-2 border-[#0D503C]/30 rounded-md focus:ring-2 focus:ring-[#0D503C] focus:border-[#0D503C] bg-[#F5F5E9]"
              placeholder={language === 'en' ? "thijs@yourstartup.com" : "jan@voorbeeld.nl"}
            />
          </div>
          
          <div>
            <Label 
              htmlFor="package" 
              className="text-sm font-medium text-[#0D503C] block mb-2"
            >
              {t('contact.form.package')}
            </Label>
            <Select
              value={formState.package}
              onValueChange={handlePackageChange}
            >
              <SelectTrigger 
                className="w-full border-2 border-[#0D503C]/30 rounded-md bg-[#F5F5E9] focus:ring-2 focus:ring-[#0D503C] focus:border-[#0D503C]"
              >
                <SelectValue placeholder={language === 'en' ? "Select a package" : "Selecteer een pakket"} />
              </SelectTrigger>
              <SelectContent>
                {language === 'en' ? (
                  <>
                    <SelectItem value="launch">Launch Package (€1,500)</SelectItem>
                    <SelectItem value="premium">Premium Package (€2,500)</SelectItem>
                    <SelectItem value="premium-plan">Premium Package - Payment Plan (€833/month)</SelectItem>
                    <SelectItem value="not-sure">Not sure yet</SelectItem>
                  </>
                ) : (
                  <>
                    <SelectItem value="launch">Launch Pakket (€1.500)</SelectItem>
                    <SelectItem value="premium">Premium Pakket (€2.500)</SelectItem>
                    <SelectItem value="premium-plan">Premium Pakket - Betalingsplan (€833/maand)</SelectItem>
                    <SelectItem value="not-sure">Nog niet zeker</SelectItem>
                  </>
                )}
              </SelectContent>
            </Select>
          </div>
          
          {error && (
            <div className="p-3 bg-red-100 border border-red-300 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-[#0D503C] hover:bg-[#0A4231] text-[#F5F5E9] font-medium rounded-md transition-colors flex items-center justify-center"
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
                {language === 'en' ? 'Book Your Free Intro Call!' : 'Plan je gratis introgesprek!'}
                <Send className="ml-2 h-4 w-4" />
              </span>
            )}
          </Button>
          
          <p className="text-xs text-[#0D503C]/70 text-center">
            {t('contact.form.privacy')}
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
