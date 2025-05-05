import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  useEffect(() => {
    const img = new Image();
    img.onload = () => console.log('Logo image loaded successfully');
    img.onerror = () => console.error('Logo image failed to load');
    img.src = '/lovable-uploads/dfa51763-aac8-425e-a575-1ea249440af8.png';
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
            src="/lovable-uploads/dfa51763-aac8-425e-a575-1ea249440af8.png" 
            alt="Just Launch Logo" 
            className="h-8 object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center">
          <div className="flex items-center space-x-3 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-xs md:text-[13px] lg:text-sm font-medium text-[#0D503C] hover:text-[#0A4231] transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                {item.name}
              </button>
            ))}
          </div>
          
          <div className="flex items-center ml-3 lg:ml-8">
            <LanguageSwitcher />
            
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-3 lg:ml-4 inline-flex items-center justify-center rounded-full bg-[#0D503C] px-3 md:px-4 lg:px-5 py-2 md:py-2.5 text-xs md:text-[13px] lg:text-sm font-medium text-[#F5F5E9] transition-colors hover:bg-[#0A4231] focus:outline-none whitespace-nowrap"
            >
              {t('nav.getStarted')}
            </button>
          </div>
        </div>

        <div className="flex items-center md:hidden">
          <LanguageSwitcher />
          <button 
            className="ml-4 text-[#0D503C] hover:text-[#0A4231] focus:outline-none relative z-50" 
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu - keep existing code */}
      <div
        className={`fixed inset-0 bg-[#F5F5E9] z-40 transform transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-full opacity-0 pointer-events-none'
        }`}
        style={{ height: '100vh' }}
      >
        {/* ... keep existing code (mobile menu content) */}
        <div className="absolute inset-0 bg-[url('/lovable-uploads/01fb568c-15a1-428b-8b55-1a686093f02e.png')] bg-cover bg-center opacity-5"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-[10%] left-[10%] w-16 h-16 rounded-full bg-[#F9A7A7] opacity-20 blur-xl"></div>
        <div className="absolute bottom-[20%] right-[15%] w-20 h-20 rounded-full bg-[#0D503C] opacity-10 blur-xl"></div>
        
        <div className="flex flex-col h-full justify-center items-center p-8 relative">
          <div className="w-full max-w-md">
            {navItems.map((item, index) => (
              <div 
                key={item.name}
                className="mb-5 overflow-hidden"
                style={{ 
                  animationDelay: isOpen ? `${index * 0.1}s` : '0s'
                }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex w-full items-center justify-between py-3 text-xl font-medium text-[#0D503C] hover:text-[#0A4231] transition-all transform ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  } transition-all duration-300 ease-out`}
                  style={{ 
                    transitionDelay: isOpen ? `${index * 0.1}s` : '0s'
                  }}
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0D503C] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ChevronRight 
                    size={18} 
                    className="transform transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            ))}
            
            <div 
              className={`mt-8 ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } transition-all duration-500 delay-300`}
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full flex items-center justify-center rounded-full bg-[#0D503C] px-6 py-4 text-base font-medium text-[#F5F5E9] shadow-lg hover:bg-[#0A4231] transition-all duration-300 transform hover:scale-[1.02] focus:outline-none"
              >
                {t('nav.getStarted')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
