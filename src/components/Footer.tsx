
import React, { useEffect } from 'react';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log('Logo image path:', '/public/lovable-uploads/f7fa1b2c-fd5b-4193-9e41-ab177f4a7592.png');
    
    const img = new Image();
    img.onload = () => console.log('Logo image loaded successfully');
    img.onerror = () => console.error('Logo image failed to load');
    img.src = '/lovable-uploads/f7fa1b2c-fd5b-4193-9e41-ab177f4a7592.png';
  }, []);

  const scrollToSection = (id) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  return (
    <footer className="bg-[#0D503C] text-[#F5F5E9]">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/f7fa1b2c-fd5b-4193-9e41-ab177f4a7592.png" 
                alt="Just Launch Logo" 
                className="h-40 mb-4 object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-[#F5F5E9]/80 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <button className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </button>
              <button className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </button>
              <button className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </button>
              <button onClick={() => window.location.href = 'mailto:hello@justlaunch.com'} className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors" aria-label="Email">
                <Mail size={20} />
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li><button className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors">{t('footer.logoDesign')}</button></li>
              <li><button className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors">{t('footer.webDesign')}</button></li>
              <li><button className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors">{t('footer.brandIdentity')}</button></li>
              <li><button className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors">{t('footer.socialMedia')}</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><button className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors cursor-pointer">{t('footer.about')}</button></li>
              <li><button className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors cursor-pointer">{t('footer.portfolio')}</button></li>
              <li><button onClick={() => scrollToSection('process')} className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors cursor-pointer">{t('footer.process')}</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-[#F5F5E9]/70 hover:text-[#F9A7A7] transition-colors cursor-pointer">{t('footer.contactUs')}</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#F5F5E9]/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#F5F5E9]/50 text-sm">
            &copy; {new Date().getFullYear()} Just Launch. {t('footer.copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-[#F5F5E9]/50 hover:text-[#F9A7A7] text-sm">{t('footer.privacy')}</button>
            <button className="text-[#F5F5E9]/50 hover:text-[#F9A7A7] text-sm">{t('footer.terms')}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

