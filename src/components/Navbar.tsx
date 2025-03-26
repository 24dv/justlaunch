
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

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
          className="text-2xl font-bold text-[#0D503C] font-serif tracking-tight"
          onClick={() => window.scrollTo(0, 0)}
        >
          Just Launch
        </Link>

        {/* Desktop Navigation */}
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
