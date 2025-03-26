
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Placeholder images - in a real project, you would use actual project images
const projects = [
  { 
    id: 1, 
    title: 'Eco-Startup Rebrand',
    category: 'Branding & Web',
    before: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 2, 
    title: 'Tech SaaS Platform',
    category: 'Web Design',
    before: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 3, 
    title: 'Fitness App Launch',
    category: 'Branding',
    before: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 4, 
    title: 'Food Delivery Service',
    category: 'Logo & Web',
    before: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  isActive: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isActive }) => {
  const { t } = useLanguage();
  
  return (
    <div className={`${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-95'} transition-all duration-500 ease-in-out h-full p-2`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-md h-full">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
          <p className="text-sm text-gray-500">{project.category}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 p-4">
          <div className="flex-1 relative">
            <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{t('carousel.before')}</div>
            <img src={project.before} alt={t('carousel.before')} className="w-full h-48 md:h-64 object-cover rounded-lg" />
          </div>
          <div className="flex-1 relative">
            <div className="absolute top-2 left-2 bg-brand-500/90 text-white text-xs px-2 py-1 rounded">{t('carousel.after')}</div>
            <img src={project.after} alt={t('carousel.after')} className="w-full h-48 md:h-64 object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Carousel = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const slideTimerRef = useRef<number | null>(null);

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? projects.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === projects.length - 1 ? 0 : current + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    startSlideTimer();
    return () => {
      if (slideTimerRef.current) {
        clearInterval(slideTimerRef.current);
      }
    };
  }, [activeIndex]);

  const startSlideTimer = () => {
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current);
    }
    
    slideTimerRef.current = window.setInterval(() => {
      handleNext();
    }, 5000);
  };

  return (
    <section id="work" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('carousel.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('carousel.subtitle')}
          </p>
        </div>

        <div className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-[450px] md:h-[400px]"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="min-w-full">
                  <ProjectCard project={project} isActive={true} />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center">
            <button 
              onClick={handlePrevious}
              className="p-2 rounded-full bg-white shadow-md -ml-2 hover:bg-gray-100 focus:outline-none"
              aria-label={t('carousel.previous')}
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-md -mr-2 hover:bg-gray-100 focus:outline-none"
              aria-label={t('carousel.next')}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                activeIndex === index ? 'bg-brand-500' : 'bg-gray-300'
              }`}
              aria-label={`${t('carousel.goToSlide')} ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
