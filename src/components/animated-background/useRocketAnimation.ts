
import { useEffect, useRef } from 'react';
import { SpaceObject } from './types';
import { initializeSpaceObjects, drawSpaceObject, updateSpaceObject } from './rocket-utils';

export const useRocketAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spaceObjectsRef = useRef<SpaceObject[]>([]);
  const animationFrameRef = useRef<number>(0);
  const lastTimestampRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen with proper device pixel ratio
    const resizeCanvas = () => {
      const devicePixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    // Improved animation loop with requestAnimationFrame throttling for performance
    const animate = (timestamp: number) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp;
      }
      
      // Only draw animation frames at a reasonable rate (max 60fps)
      const elapsed = timestamp - lastTimestampRef.current;
      if (elapsed < 16) { // ~60fps cap
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
      
      // Draw background with subtle gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(249, 167, 167, 0.01)'); // Very subtle pink tint at top
      gradient.addColorStop(1, 'rgba(249, 167, 167, 0.03)'); // Slightly stronger at bottom
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
      
      // Update and draw each space object
      spaceObjectsRef.current.forEach((object, index) => {
        updateSpaceObject(object, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1), index, timestamp);
        drawSpaceObject(ctx, object);
      });
      
      // Continue animation
      animationFrameRef.current = requestAnimationFrame(animate);
      lastTimestampRef.current = timestamp;
    };

    // Initialize
    resizeCanvas();
    spaceObjectsRef.current = initializeSpaceObjects(
      canvas.width / (window.devicePixelRatio || 1), 
      canvas.height / (window.devicePixelRatio || 1)
    );
    animate(0);

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
      spaceObjectsRef.current = initializeSpaceObjects(
        canvas.width / (window.devicePixelRatio || 1), 
        canvas.height / (window.devicePixelRatio || 1)
      );
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return canvasRef;
};
