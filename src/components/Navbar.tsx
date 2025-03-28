import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    console.log('Logo image path:', '/public/lovable-uploads/f7fa1b2c-fd5b-4193-9e41-ab177f4a7592.png');
    
    const img = new Image();
    img.onload = () => console.log('Logo image loaded successfully');
    img.onerror = () => console.error('Logo image failed to load');
    img.src = '/public/lovable-uploads/f7fa1b2c-fd5b-4193-9e41-ab177f4a7592.png';
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: t('nav.features'), id: 'features' },
    { name: t('nav.work'), id: 'work' },
    { name: t('nav.process'), id: 'process' },
    { name: t('nav.pricing'), id: 'pricing' },
    { name: t('nav.faq'), id: 'faq' },
    { name: t('nav.contact'), id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-[#F5F5E9]/90 shadow-md backdrop-blur-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center text-[#0D503C] font-serif tracking-tight"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img 
            src="/public/lovable-uploads/f7fa1b2c-fd5b-4193-9e41-ab177f4a7592.png" 
            alt="Just Launch Logo" 
            className="h-10 object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-[#0D503C] hover:text-[#0A4231] transition-colors duration-200 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
          
          <LanguageSwitcher />
          
          <button
            onClick={() => scrollToSection('contact')}
            className="ml-4 inline-flex items-center justify-center rounded-full bg-[#0D503C] px-5 py-2.5 text-sm font-medium text-[#F5F5E9] transition-colors hover:bg-[#0A4231] focus:outline-none"
          >
            {t('nav.getStarted')}
          </button>
        </div>

        <div className="flex items-center md:hidden">
          <LanguageSwitcher />
          <button 
            className="ml-4 text-[#0D503C] hover:text-[#0A4231] focus:outline-none" 
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-0 left-0 right-0 h-full bg-[#F5F5E9] z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden overflow-auto`}
        style={{ position: 'fixed', height: '100vh' }}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8 relative">
          <button 
            className="absolute top-6 right-6 text-[#0D503C] hover:text-[#0A4231] focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-lg font-medium text-[#0D503C] hover:text-[#0A4231] cursor-pointer"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#0D503C] px-6 py-3 text-base font-medium text-[#F5F5E9] hover:bg-[#0A4231] focus:outline-none"
          >
            {t('nav.getStarted')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
