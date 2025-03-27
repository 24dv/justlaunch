
import React, { useRef } from 'react';
import { useRocketAnimation } from './animated-background/useRocketAnimation';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRocketAnimation();
  
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ 
          opacity: 0.85,
          willChange: 'transform', // Hint to browser for optimization
        }}
        aria-hidden="true"
      />
    </div>
  );
};

export default React.memo(AnimatedBackground);
