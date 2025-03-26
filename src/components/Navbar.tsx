
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

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

  const navItems = [
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.work'), href: '#work' },
    { name: t('nav.process'), href: '#process' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.faq'), href: '#faq' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-[#F5F5E9]/90 shadow-md backdrop-blur-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-[#0D503C] font-serif tracking-tight">
          fastbrandlaunch
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[#0D503C] hover:text-[#0A4231] transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          
          <LanguageSwitcher />
          
          <a
            href="#contact"
            className="ml-4 inline-flex items-center justify-center rounded-full bg-[#0D503C] px-5 py-2.5 text-sm font-medium text-[#F5F5E9] transition-colors hover:bg-[#0A4231] focus:outline-none"
          >
            {t('nav.getStarted')}
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <LanguageSwitcher />
          <button 
            className="ml-4 text-[#0D503C] hover:text-[#0A4231] focus:outline-none" 
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-[#F5F5E9] z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-[#0D503C] hover:text-[#0A4231]"
              onClick={toggleMenu}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#0D503C] px-6 py-3 text-base font-medium text-[#F5F5E9] hover:bg-[#0A4231] focus:outline-none"
            onClick={toggleMenu}
          >
            {t('nav.getStarted')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
