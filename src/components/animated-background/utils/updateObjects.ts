
import { SpaceObject } from '../types';

export const updateSpaceObject = (
  object: SpaceObject, 
  canvasWidth: number, 
  canvasHeight: number, 
  index: number,
  timestamp: number
): void => {
  if (object.type === 'star') {
    // Stars twinkle but stay mostly in place
    object.opacity = 0.3 + Math.sin(timestamp * 0.001 + index) * 0.2;
    object.y -= object.speed * 0.1; // Very slow vertical drift
    
    // Reset stars when they drift off screen
    if (object.y < -10) {
      object.y = canvasHeight + 10;
      object.x = Math.random() * canvasWidth;
    }
  } 
  else if (object.type === 'planet') {
    // Planets rotate slowly and move horizontally
    object.rotation += 0.0001;
    object.x += Math.sin(timestamp * 0.0001 + index) * 0.2;
    object.y += Math.cos(timestamp * 0.0001 + index * 2) * 0.1;
    
    // Keep planets within visible bounds with wrapping
    if (object.x > canvasWidth + object.size * 2) {
      object.x = -object.size * 2;
    } else if (object.x < -object.size * 2) {
      object.x = canvasWidth + object.size * 2;
    }
    
    if (object.y > canvasHeight + object.size * 2) {
      object.y = -object.size * 2;
    } else if (object.y < -object.size * 2) {
      object.y = canvasHeight + object.size * 2;
    }
  } 
  else if (object.type === 'rocket') {
    // Rockets move upward steadily
    object.y -= object.speed;
    
    // Add slight horizontal drift
    object.x += Math.sin(timestamp * 0.0003 + index) * 0.3;
    
    // Reduce rocket opacity by 20%
    object.opacity = 0.8;
    
    // Reset rocket when it goes off screen
    if (object.y < -object.size * 2) {
      object.y = canvasHeight + object.size + Math.random() * 150;
      object.x = canvasWidth * 0.2 + Math.random() * (canvasWidth * 0.6); // Keep rockets more centered
      object.size = 120 + Math.random() * 160;
      object.speed = 0.5 + Math.random() * 0.8;
      object.rotation = -0.1 + Math.random() * 0.2; // Keep rockets pointing mostly upward
      object.opacity = 0.8; // Ensure opacity is set on reset
    }
  }
};

