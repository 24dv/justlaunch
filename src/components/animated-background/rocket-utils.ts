
import { Rocket } from './types';

// Initialize rockets - fewer, much larger rockets
export const initializeRockets = (canvasWidth: number, canvasHeight: number): Rocket[] => {
  return Array.from({ length: 4 }, () => ({
    x: Math.random() * canvasWidth,
    y: canvasHeight + Math.random() * 200,
    size: 160 + Math.random() * 200, // 4x larger rockets (was 40-90, now 160-360)
    speed: 0.5 + Math.random() * 1.2, // 30% slower speed for better readability
    rotation: -0.1 + Math.random() * 0.2, // Mostly upward orientation
    opacity: 0.9 // Higher opacity for better visibility of outline
  }));
};

// Draw a single rocket - outline style
export const drawRocket = (ctx: CanvasRenderingContext2D, rocket: Rocket): void => {
  ctx.save();
  
  // Translate to rocket position and apply rotation
  ctx.translate(rocket.x, rocket.y);
  ctx.rotate(rocket.rotation);
  
  // Use a consistent pink color for outline
  const pinkColor = 'rgba(255, 105, 180, 0.9)';
  
  // Set line properties for outline style
  ctx.lineWidth = rocket.size * 0.05;
  ctx.strokeStyle = pinkColor;
  
  // Main rocket body - outline style
  ctx.beginPath();
  // Draw the rocket nose/top
  ctx.arc(0, -rocket.size * 0.6, rocket.size * 0.4, Math.PI, 0, true);
  // Draw the rocket body sides
  ctx.lineTo(rocket.size * 0.4, rocket.size * 0.4);
  ctx.lineTo(-rocket.size * 0.4, rocket.size * 0.4);
  ctx.closePath();
  ctx.stroke();
  
  // Draw the rocket window/porthole - outline style
  ctx.beginPath();
  ctx.arc(0, -rocket.size * 0.2, rocket.size * 0.15, 0, Math.PI * 2);
  ctx.stroke();
  
  // Draw left fin - outline style
  ctx.beginPath();
  ctx.moveTo(-rocket.size * 0.4, rocket.size * 0.1);
  ctx.lineTo(-rocket.size * 0.7, rocket.size * 0.4);
  ctx.lineTo(-rocket.size * 0.4, rocket.size * 0.4);
  ctx.closePath();
  ctx.stroke();
  
  // Draw right fin - outline style
  ctx.beginPath();
  ctx.moveTo(rocket.size * 0.4, rocket.size * 0.1);
  ctx.lineTo(rocket.size * 0.7, rocket.size * 0.4);
  ctx.lineTo(rocket.size * 0.4, rocket.size * 0.4);
  ctx.closePath();
  ctx.stroke();
  
  // Draw rocket flames - outline style
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

// Update rocket position
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
