
import React, { useEffect, useRef } from 'react';
import { useRocketAnimation } from './animated-background/useRocketAnimation';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRocketAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Performance optimization
  useEffect(() => {
    const checkScrollPerformance = () => {
      if (containerRef.current) {
        // If scrolling becomes janky, we could reduce canvas opacity or animation complexity here
        // This is a placeholder for potential future optimizations
      }
    };
    
    window.addEventListener('scroll', checkScrollPerformance);
    return () => window.removeEventListener('scroll', checkScrollPerformance);
  }, []);

  return (
    <div ref={containerRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: 0.85 }} // Adjusted opacity for better visibility
      />
    </div>
  );
};

export default AnimatedBackground;
