
import React from 'react';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-[#0D503C] text-[#F5F5E9]">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 font-serif">Just Launch</h2>
            <p className="text-[#F5F5E9]/80 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hello@justlaunch.com" className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors">{t('footer.logoDesign')}</a></li>
              <li><a href="#" className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors">{t('footer.webDesign')}</a></li>
              <li><a href="#" className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors">{t('footer.brandIdentity')}</a></li>
              <li><a href="#" className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors">{t('footer.socialMedia')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors">{t('footer.about')}</a></li>
              <li><a href="#" className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors">{t('footer.portfolio')}</a></li>
              <li><a href="#" className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors">{t('footer.process')}</a></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors cursor-pointer">{t('footer.contactUs')}</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#F5F5E9]/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#F5F5E9]/50 text-sm">
            &copy; {new Date().getFullYear()} Just Launch. {t('footer.copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[#F5F5E9]/50 hover:text-[#F9A7A7] text-sm">{t('footer.privacy')}</a>
            <a href="#" className="text-[#F5F5E9]/50 hover:text-[#F9A7A7] text-sm">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
