
import { RefObject } from 'react';

/**
 * Sets up desktop-specific exit intent detection
 */
export const setupDesktopDetection = (
  isMobile: boolean,
  topThreshold: number,
  cooldownTime: number,
  lastDetection: number,
  showExitIntentPopup: () => void,
  mousePositionsRef: RefObject<{ x: number; y: number; timestamp: number }[]>
) => {
  if (isMobile) return () => {};

  // For desktop: track mouse movement to detect if cursor is moving toward the top of the page
  let lastMouseY = 0;
  let lastMouseX = 0;
  let lastMoveTime = Date.now();

  const handleMouseMove = (e: MouseEvent) => {
    const currentTime = Date.now();
    
    // Update mouse position history for velocity tracking
    const newPosition = { 
      x: e.clientX, 
      y: e.clientY, 
      timestamp: currentTime 
    };
    
    if (mousePositionsRef.current) {
      mousePositionsRef.current.push(newPosition);
      if (mousePositionsRef.current.length > 5) {
        mousePositionsRef.current.shift();
      }
    }
    
    // Calculate velocity (pixels per millisecond)
    const deltaY = e.clientY - lastMouseY;
    const deltaTime = currentTime - lastMoveTime;
    const velocityY = deltaTime > 0 ? deltaY / deltaTime : 0;
    
    // Predict if user is about to exit (near top edge OR moving quickly upward toward top)
    const isNearTopEdge = e.clientY < topThreshold;
    const isMovingUpQuickly = velocityY < -0.5 && e.clientY < window.innerHeight * 0.3;
    
    if (
      !isMobile && 
      (isNearTopEdge || isMovingUpQuickly) && 
      Date.now() - lastDetection > cooldownTime // Cooldown expired
    ) {
      console.log("Exit intent detected: Near top or moving up quickly");
      showExitIntentPopup();
    }
    
    // Update last positions for next calculation
    lastMouseY = e.clientY;
    lastMouseX = e.clientX;
    lastMoveTime = currentTime;
  };

  document.addEventListener('mousemove', handleMouseMove);
  
  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
  };
};
