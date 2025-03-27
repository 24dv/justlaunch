
import { useEffect, useRef } from 'react';
import { Rocket } from './types';
import { initializeRockets, drawRocket, updateRocket } from './rocket-utils';

export const useRocketAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rocketsRef = useRef<Rocket[]>([]);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Animation loop
    const animate = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw each rocket
      rocketsRef.current.forEach((rocket, index) => {
        updateRocket(rocket, canvas.width, canvas.height, index);
        drawRocket(ctx, rocket);
      });
      
      // Continue animation
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    rocketsRef.current = initializeRockets(canvas.width, canvas.height);
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      rocketsRef.current = initializeRockets(canvas.width, canvas.height);
    });

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return canvasRef;
};
