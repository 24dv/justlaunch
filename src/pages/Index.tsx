
import React, { useEffect, lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

// Lazy load components that appear below the fold
const FeatureSection = lazy(() => import('../components/FeatureSection'));
const Carousel = lazy(() => import('../components/Carousel'));
const ProcessSection = lazy(() => import('../components/ProcessSection'));
const PricingSection = lazy(() => import('../components/PricingSection'));
const TestimonialSection = lazy(() => import('../components/TestimonialSection'));
const FaqSection = lazy(() => import('../components/FaqSection'));
const ContactSection = lazy(() => import('../components/ContactSection'));
const Footer = lazy(() => import('../components/Footer'));

// Loading fallback for lazy loaded components
const LoadingFallback = () => <div className="min-h-[300px] flex items-center justify-center">
  <div className="w-8 h-8 border-4 border-[#0D503C] border-t-transparent rounded-full animate-spin"></div>
</div>;

const Index = () => {
  useEffect(() => {
    document.title = "Launch Your Brand Fast | Professional Design & Web Services";
    
    // Smooth scroll to section when URL contains hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      requestAnimationFrame(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
    
    // Function to handle scroll animations with IntersectionObserver
    const setupScrollAnimations = () => {
      if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              
              // Add appropriate animation classes based on element type
              if (el.classList.contains('feature-card')) {
                el.classList.add('animation-triggered', 'animate-scale-up');
              } else if (el.classList.contains('animate-slide-in-left')) {
                el.classList.add('animation-triggered');
              } else if (el.classList.contains('animate-slide-in-right')) {
                el.classList.add('animation-triggered');
              }
              
              // Unobserve after animation is triggered
              animationObserver.unobserve(el);
            }
          });
        }, {
          rootMargin: '0px 0px -100px 0px',
          threshold: 0.1
        });
        
        // Observe elements with animation classes
        document.querySelectorAll('.feature-card, [class*="animate-"]').forEach((el) => {
          animationObserver.observe(el);
        });
      }
    };
    
    // Set up after a short delay to ensure elements are rendered
    const timer = setTimeout(setupScrollAnimations, 300);
    
    // Cleanup
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-[#F5F5E9] text-[#0D503C] antialiased">
      <Navbar />
      <HeroSection />
      <Suspense fallback={<LoadingFallback />}>
        <FeatureSection />
        <Carousel />
        <ProcessSection />
        <PricingSection />
        <TestimonialSection />
        <FaqSection />
        <ContactSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
