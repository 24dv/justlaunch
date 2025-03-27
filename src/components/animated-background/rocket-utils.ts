
import { Rocket } from './types';

// Initialize rockets
export const initializeRockets = (canvasWidth: number, canvasHeight: number): Rocket[] => {
  return Array.from({ length: 8 }, () => ({
    x: Math.random() * canvasWidth,
    y: canvasHeight + Math.random() * 200,
    size: 40 + Math.random() * 50, // Significantly larger rockets
    speed: 0.7 + Math.random() * 1.75, // 30% slower speed
    rotation: -0.1 + Math.random() * 0.2, // More focused upward orientation
    opacity: 0.8 // Increased opacity
  }));
};

// Draw a single rocket
export const drawRocket = (ctx: CanvasRenderingContext2D, rocket: Rocket): void => {
  ctx.save();
  
  // Translate to rocket position and apply rotation
  ctx.translate(rocket.x, rocket.y);
  ctx.rotate(rocket.rotation);
  
  // Use a consistent soft pink color
  const rocketPinkColor = `rgba(249, 167, 167, ${rocket.opacity})`;
  
  // Draw rocket body
  ctx.beginPath();
  
  // Rocket nose cone
  ctx.moveTo(0, -rocket.size * 1.2);
  ctx.lineTo(rocket.size * 0.3, -rocket.size * 0.7);
  ctx.lineTo(rocket.size * 0.3, rocket.size * 0.4);
  
  // Rocket body bottom
  ctx.lineTo(rocket.size * 0.2, rocket.size * 0.4);
  ctx.lineTo(rocket.size * 0.2, rocket.size * 0.6);
  ctx.lineTo(-rocket.size * 0.2, rocket.size * 0.6);
  ctx.lineTo(-rocket.size * 0.2, rocket.size * 0.4);
  
  // Rocket body top
  ctx.lineTo(-rocket.size * 0.3, rocket.size * 0.4);
  ctx.lineTo(-rocket.size * 0.3, -rocket.size * 0.7);
  
  ctx.closePath();
  ctx.fillStyle = rocketPinkColor;
  ctx.fill();
  
  // Draw rocket fins
  ctx.beginPath();
  ctx.moveTo(rocket.size * 0.2, rocket.size * 0.3);
  ctx.lineTo(rocket.size * 0.5, rocket.size * 0.5);
  ctx.lineTo(rocket.size * 0.2, rocket.size * 0.6);
  ctx.closePath();
  ctx.fill();
  
  ctx.beginPath();
  ctx.moveTo(-rocket.size * 0.2, rocket.size * 0.3);
  ctx.lineTo(-rocket.size * 0.5, rocket.size * 0.5);
  ctx.lineTo(-rocket.size * 0.2, rocket.size * 0.6);
  ctx.closePath();
  ctx.fill();
  
  // Draw rocket window/porthole
  ctx.beginPath();
  ctx.arc(0, -rocket.size * 0.2, rocket.size * 0.15, 0, Math.PI * 2);
  ctx.fillStyle = rocketPinkColor;
  ctx.fill();
  
  // Draw rocket's small antenna/tip
  ctx.beginPath();
  ctx.moveTo(0, -rocket.size * 1.2);
  ctx.lineTo(rocket.size * 0.05, -rocket.size * 1.3);
  ctx.arc(0, -rocket.size * 1.3, rocket.size * 0.05, 0, Math.PI * 2);
  ctx.fill();
  
  // Draw rocket flame - in same pink color
  ctx.beginPath();
  
  // Outer flame
  ctx.moveTo(-rocket.size * 0.2, rocket.size * 0.6);
  ctx.lineTo(-rocket.size * 0.3, rocket.size * 1.2);
  ctx.lineTo(0, rocket.size * 0.9);
  ctx.lineTo(rocket.size * 0.3, rocket.size * 1.2);
  ctx.lineTo(rocket.size * 0.2, rocket.size * 0.6);
  
  // Use gradient within the pink color range
  const flameGradient = ctx.createLinearGradient(0, rocket.size * 0.6, 0, rocket.size * 1.5);
  flameGradient.addColorStop(0, `rgba(249, 167, 167, ${rocket.opacity * 0.8})`);
  flameGradient.addColorStop(0.5, `rgba(249, 140, 140, ${rocket.opacity * 0.6})`);
  flameGradient.addColorStop(1, `rgba(249, 120, 120, ${rocket.opacity * 0.4})`);
  
  ctx.fillStyle = flameGradient;
  ctx.fill();
  
  ctx.restore();
};

// Update rocket position
export const updateRocket = (
  rocket: Rocket, 
  canvasWidth: number, 
  canvasHeight: number, 
  index: number
): void => {
  // Move rocket upward - 30% slower
  rocket.y -= rocket.speed;
  
  // Add very slight horizontal drift - reduced for less chaotic movement
  rocket.x += Math.sin(Date.now() * 0.0005 + index) * 0.2;
  
  // Reset rocket if it goes off screen
  if (rocket.y < -rocket.size * 2) {
    rocket.y = canvasHeight + rocket.size + Math.random() * 150;
    rocket.x = canvasWidth * 0.1 + Math.random() * (canvasWidth * 0.8); // Keep rockets more centered
    rocket.size = 40 + Math.random() * 50;
    rocket.speed = 0.7 + Math.random() * 1.75; // 30% slower speed
    rocket.rotation = -0.1 + Math.random() * 0.2; // Keep rockets pointing mostly upward
  }
};
