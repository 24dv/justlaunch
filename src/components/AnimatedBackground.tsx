
import React from 'react';
import { useRocketAnimation } from './animated-background/useRocketAnimation';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRocketAnimation();

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.9 }} // Slightly adjusted opacity for better visibility with the new color
    />
  );
};

export default AnimatedBackground;
