
import { SpaceObject } from '../types';

// Helper function to scale number of objects based on screen size
const scaleCount = (baseCount: number, canvasWidth: number, canvasHeight: number): number => {
  const screenSize = Math.min(canvasWidth, canvasHeight);
  
  // Reduce count for smaller screens
  if (screenSize < 600) {
    return Math.max(1, Math.floor(baseCount * 0.5)); // 50% on small screens
  } else if (screenSize < 1200) {
    return Math.max(1, Math.floor(baseCount * 0.7)); // 70% on medium screens
  }
  
  return baseCount; // 100% on large screens
};

export const initializeSpaceObjects = (canvasWidth: number, canvasHeight: number): SpaceObject[] => {
  // Create an array of space objects (stars, planets, rockets)
  const spaceObjects: SpaceObject[] = [];
  
  // Scale counts based on screen size
  const starCount = scaleCount(30, canvasWidth, canvasHeight);
  const planetCount = scaleCount(5, canvasWidth, canvasHeight);
  const rocketCount = scaleCount(3, canvasWidth, canvasHeight);
  
  // Add stars (small, numerous)
  for (let i = 0; i < starCount; i++) {
    spaceObjects.push({
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      size: 1 + Math.random() * 3,
      speed: 0.05 + Math.random() * 0.1,
      rotation: Math.random() * Math.PI * 2,
      opacity: 0.3 + Math.random() * 0.5,
      type: 'star'
    });
  }
  
  // Add planets (medium, few)
  for (let i = 0; i < planetCount; i++) {
    spaceObjects.push({
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      size: 30 + Math.random() * 70,
      speed: 0.02 + Math.random() * 0.05,
      rotation: Math.random() * Math.PI * 2,
      opacity: 0.2 + Math.random() * 0.4,
      type: 'planet'
    });
  }
  
  // Add rockets (moving faster)
  for (let i = 0; i < rocketCount; i++) {
    spaceObjects.push({
      x: Math.random() * canvasWidth,
      y: canvasHeight + Math.random() * 200,
      size: 120 + Math.random() * 160,
      speed: 0.5 + Math.random() * 0.8,
      rotation: -0.1 + Math.random() * 0.2,
      opacity: 0.6,
      type: 'rocket'
    });
  }
  
  return spaceObjects;
};
