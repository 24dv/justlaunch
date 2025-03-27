
import { Rocket } from './types';

// Use a soft pink color that matches the website's palette
const ROCKET_COLOR = 'rgba(255, 105, 180, 0.9)'; // Soft pink with slight transparency

export const initializeRockets = (canvasWidth: number, canvasHeight: number): Rocket[] => {
  return Array.from({ length: 4 }, () => ({
    x: Math.random() * canvasWidth,
    y: canvasHeight + Math.random() * 200,
    size: 160 + Math.random() * 200, // 4x larger rockets
    speed: 0.5 + Math.random() * 1.2, // 30% slower speed
    rotation: -0.1 + Math.random() * 0.2, // Mostly upward orientation
    opacity: 0.9 
  }));
};

export const drawRocket = (ctx: CanvasRenderingContext2D, rocket: Rocket): void => {
  ctx.save();
  
  // Translate to rocket position and apply rotation
  ctx.translate(rocket.x, rocket.y);
  ctx.rotate(rocket.rotation);
  
  // Set line and stroke properties
  ctx.lineWidth = rocket.size * 0.05;
  ctx.strokeStyle = ROCKET_COLOR;
  ctx.fillStyle = 'transparent';
  
  // Main rocket body - outlined style
  ctx.beginPath();
  // Draw the rocket nose/top
  ctx.arc(0, -rocket.size * 0.6, rocket.size * 0.4, Math.PI, 0, true);
  // Draw the rocket body sides
  ctx.lineTo(rocket.size * 0.4, rocket.size * 0.4);
  ctx.lineTo(-rocket.size * 0.4, rocket.size * 0.4);
  ctx.closePath();
  ctx.stroke();
  
  // Draw the rocket window/porthole - outlined style
  ctx.beginPath();
  ctx.arc(0, -rocket.size * 0.2, rocket.size * 0.15, 0, Math.PI * 2);
  ctx.stroke();
  
  // Draw left fin - outlined style
  ctx.beginPath();
  ctx.moveTo(-rocket.size * 0.4, rocket.size * 0.1);
  ctx.lineTo(-rocket.size * 0.7, rocket.size * 0.4);
  ctx.lineTo(-rocket.size * 0.4, rocket.size * 0.4);
  ctx.closePath();
  ctx.stroke();
  
  // Draw right fin - outlined style
  ctx.beginPath();
  ctx.moveTo(rocket.size * 0.4, rocket.size * 0.1);
  ctx.lineTo(rocket.size * 0.7, rocket.size * 0.4);
  ctx.lineTo(rocket.size * 0.4, rocket.size * 0.4);
  ctx.closePath();
  ctx.stroke();
  
  // Draw rocket flames - outlined style
  ctx.beginPath();
  // Left flame line
  ctx.moveTo(-rocket.size * 0.2, rocket.size * 0.4);
  ctx.lineTo(-rocket.size * 0.2, rocket.size * 0.8);
  ctx.stroke();
  
  // Middle flame line
  ctx.beginPath();
  ctx.moveTo(0, rocket.size * 0.4);
  ctx.lineTo(0, rocket.size * 1.0);
  ctx.stroke();
  
  // Right flame line
  ctx.beginPath();
  ctx.moveTo(rocket.size * 0.2, rocket.size * 0.4);
  ctx.lineTo(rocket.size * 0.2, rocket.size * 0.8);
  ctx.stroke();
  
  ctx.restore();
};

export const updateRocket = (
  rocket: Rocket, 
  canvasWidth: number, 
  canvasHeight: number, 
  index: number
): void => {
  // Move rocket upward
  rocket.y -= rocket.speed;
  
  // Add very slight horizontal drift
  rocket.x += Math.sin(Date.now() * 0.0003 + index) * 0.3;
  
  // Reset rocket if it goes off screen
  if (rocket.y < -rocket.size * 2) {
    rocket.y = canvasHeight + rocket.size + Math.random() * 150;
    rocket.x = canvasWidth * 0.2 + Math.random() * (canvasWidth * 0.6); // Keep rockets more centered
    rocket.size = 160 + Math.random() * 200; // 4x larger than before
    rocket.speed = 0.5 + Math.random() * 1.2; // 30% slower for better readability
    rocket.rotation = -0.1 + Math.random() * 0.2; // Keep rockets pointing mostly upward
  }
};
