
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

// Simplified loading fallback for better performance
const LoadingFallback = () => <div className="min-h-[300px]"></div>;

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
      <Suspense fallback={<LoadingFallback />}>
        <FeatureSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Carousel />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ProcessSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <PricingSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <TestimonialSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <FaqSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
