
import React from 'react';
import { useRocketAnimation } from './animated-background/useRocketAnimation';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRocketAnimation();
  
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ 
          opacity: 0.7, // Reduced opacity for better performance
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
    </div>
  );
};

// Using memo to prevent unnecessary re-renders
export default React.memo(AnimatedBackground);
