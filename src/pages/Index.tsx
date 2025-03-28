
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
    
    // Smooth scroll to section when URL contains hash - but with a slight delay for better performance
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    
    // Function to handle scroll animations with IntersectionObserver - using a more efficient approach
    const setupScrollAnimations = () => {
      if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animation-triggered');
              
              // Unobserve after animation is triggered
              animationObserver.unobserve(entry.target);
            }
          });
        }, {
          rootMargin: '0px 0px -50px 0px', // Reduced margin
          threshold: 0.1
        });
        
        // Observe elements with animation classes
        document.querySelectorAll('.feature-card, [class*="animate-"]').forEach((el) => {
          animationObserver.observe(el);
        });
      }
    };
    
    // Set up after content is loaded to prioritize core content rendering
    if (document.readyState === 'complete') {
      setupScrollAnimations();
    } else {
      window.addEventListener('load', setupScrollAnimations);
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('load', setupScrollAnimations);
    };
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
