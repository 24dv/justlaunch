
import { SpaceObject } from '../types';

export const initializeSpaceObjects = (canvasWidth: number, canvasHeight: number): SpaceObject[] => {
  // Create an array of space objects (stars, planets, rockets)
  const spaceObjects: SpaceObject[] = [];
  
  // Add stars (small, numerous)
  for (let i = 0; i < 30; i++) {
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
  for (let i = 0; i < 5; i++) {
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
  for (let i = 0; i < 3; i++) {
    spaceObjects.push({
      x: Math.random() * canvasWidth,
      y: canvasHeight + Math.random() * 200,
      size: 120 + Math.random() * 160,
      speed: 0.5 + Math.random() * 0.8,
      rotation: -0.1 + Math.random() * 0.2,
      opacity: 0.6 + Math.random() * 0.3,
      type: 'rocket'
    });
  }
  
  return spaceObjects;
};
