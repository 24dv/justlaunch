
import React, { useEffect, useRef, useState } from 'react';
import { useRocketAnimation } from './animated-background/useRocketAnimation';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRocketAnimation();
  const [isIntersecting, setIsIntersecting] = useState(true);
  
  useEffect(() => {
    // Use Intersection Observer to determine if canvas is visible
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            setIsIntersecting(entry.isIntersecting);
          });
        },
        {
          rootMargin: '100px',
          threshold: 0.01
        }
      );
      
      if (canvasRef.current) {
        observer.observe(canvasRef.current);
      }
      
      return () => {
        if (canvasRef.current) {
          observer.unobserve(canvasRef.current);
        }
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ 
          opacity: 0.85,
          willChange: 'transform', // Hint to browser for optimization
          visibility: isIntersecting ? 'visible' : 'hidden' 
        }}
        aria-hidden="true"
      />
    </div>
  );
};

export default React.memo(AnimatedBackground);
