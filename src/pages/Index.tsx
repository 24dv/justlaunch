
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import Carousel from '../components/Carousel';
import ProcessSection from '../components/ProcessSection';
import PricingSection from '../components/PricingSection';
import TestimonialSection from '../components/TestimonialSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Launch Your Brand Fast | Professional Design & Web Services";
    
    // Smooth scroll to section when URL contains hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Function to handle scroll animations
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.feature-card, [class*="animate-"]');
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        
        if (isVisible && !el.classList.contains('animation-triggered')) {
          el.classList.add('animation-triggered');
          
          if (el.classList.contains('feature-card')) {
            el.classList.add('animate-scale-up');
          }
        }
      });
    };
    
    // Initial check for elements in viewport
    setTimeout(handleScrollAnimation, 300);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);
  
  return (
    <div className="min-h-screen bg-[#F5F5E9] text-[#0D503C] antialiased">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Carousel />
      <ProcessSection />
      <PricingSection />
      <TestimonialSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
