
import { useEffect, useRef } from 'react';
import { SpaceObject } from './types';
import { 
  initializeSpaceObjects, 
  drawSpaceObject, 
  updateSpaceObject 
} from './rocket-utils';

export const useRocketAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spaceObjectsRef = useRef<SpaceObject[]>([]);
  const animationFrameRef = useRef<number>(0);
  const lastTimestampRef = useRef<number>(0);
  const isVisibleRef = useRef<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
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

      // Only draw animation frames at a reasonable rate (max 20fps for background)
      const elapsed = timestamp - lastTimestampRef.current;
      if (elapsed < 50) { // ~20fps cap for better performance (changed from 33ms/30fps)
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      
      // Skip rendering when tab is not visible
      if (!isVisibleRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate);
        lastTimestampRef.current = timestamp;
        return;
      }
      
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
      
      // Skip gradient for better performance
      ctx.fillStyle = 'rgba(249, 167, 167, 0.02)'; // Just use a flat color instead of gradient
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

    // Initialize - delay animation start slightly to prioritize main content loading
    let initTimeout: number;
    const initAnimation = () => {
      resizeCanvas();
      spaceObjectsRef.current = initializeSpaceObjects(
        canvas.width / (window.devicePixelRatio || 1), 
        canvas.height / (window.devicePixelRatio || 1)
      );
      animate(0);
    };
    
    initTimeout = window.setTimeout(initAnimation, 100);

    // Handle window resize - with debounce
    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        resizeCanvas();
        // Only reinitialize objects on significant size changes
        const width = canvas.width / (window.devicePixelRatio || 1);
        const height = canvas.height / (window.devicePixelRatio || 1);
        
        // Check if current objects were initialized with significantly different dimensions
        const currentWidth = spaceObjectsRef.current.length > 0 ? 
          Math.max(...spaceObjectsRef.current.map(obj => obj.x)) : 0;
        const currentHeight = spaceObjectsRef.current.length > 0 ? 
          Math.max(...spaceObjectsRef.current.map(obj => obj.y)) : 0;
          
        // Reinitialize only if dimensions changed significantly
        if (Math.abs(currentWidth - width) > width * 0.2 || 
            Math.abs(currentHeight - height) > height * 0.2) {
          spaceObjectsRef.current = initializeSpaceObjects(width, height);
        }
      }, 300); // 300ms debounce
    };
    
    // Visibility API to pause animation when tab is hidden
    const handleVisibilityChange = () => {
      isVisibleRef.current = document.visibilityState === 'visible';
    };
    
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameRef.current);
      clearTimeout(resizeTimeout);
      clearTimeout(initTimeout);
    };
  }, []);

  return canvasRef;
};
