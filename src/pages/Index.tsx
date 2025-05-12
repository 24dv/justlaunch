
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import Carousel from '../components/Carousel';
import ProcessSection from '../components/ProcessSection';
import PricingSection from '../components/PricingSection';
import TestimonialSection from '../components/TestimonialSection';
import ComparisonSection from '../components/ComparisonSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import ExitIntentPopup from '../components/quiz/ExitIntentPopup';

const Index = () => {
  useEffect(() => {
    document.title = "Launch Your Brand Fast | Professional Design & Web Services";
    
    // Update meta description dynamically
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional web design and development services to launch your brand quickly. From idea to online in just days!');
    }
    
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
      <AnimatedBackground />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <FeatureSection />
        <div id="work">
          <Carousel />
        </div>
        <ProcessSection />
        <PricingSection />
        <TestimonialSection />
        <ComparisonSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
