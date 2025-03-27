
import { Rocket } from './types';

// Use the exact same pink as the hero section circles
const ROCKET_COLOR = '#F9A7A7'; // Matching the hero section circles

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
  ctx.lineWidth = rocket.size * 0.035;
  ctx.strokeStyle = ROCKET_COLOR;
  ctx.fillStyle = 'transparent';
  
  const rocketWidth = rocket.size * 0.35;
  const rocketHeight = rocket.size * 0.8;
  
  // Main rocket body - outlined style
  ctx.beginPath();
  
  // Draw the main body shape (pointed oval)
  ctx.moveTo(0, -rocketHeight/2); // Top point
  ctx.bezierCurveTo(
    rocketWidth/2, -rocketHeight/2,   // Control point 1
    rocketWidth, -rocketHeight/4,    // Control point 2
    rocketWidth, 0                  // End point
  );
  ctx.bezierCurveTo(
    rocketWidth, rocketHeight/4,     // Control point 1
    rocketWidth/2, rocketHeight/2,   // Control point 2
    0, rocketHeight/2               // End point
  );
  ctx.bezierCurveTo(
    -rocketWidth/2, rocketHeight/2,  // Control point 1
    -rocketWidth, rocketHeight/4,    // Control point 2
    -rocketWidth, 0                 // End point
  );
  ctx.bezierCurveTo(
    -rocketWidth, -rocketHeight/4,   // Control point 1
    -rocketWidth/2, -rocketHeight/2, // Control point 2
    0, -rocketHeight/2              // End point (back to start)
  );
  ctx.stroke();
  
  // Draw the two circular windows
  const windowSize = rocket.size * 0.1;
  const windowSpacing = rocket.size * 0.15;
  
  // Upper window
  ctx.beginPath();
  ctx.arc(0, -windowSpacing/2, windowSize, 0, Math.PI * 2);
  ctx.stroke();
  
  // Lower window
  ctx.beginPath();
  ctx.arc(0, windowSpacing/2, windowSize, 0, Math.PI * 2);
  ctx.stroke();
  
  // Draw the central line connecting the windows
  ctx.beginPath();
  ctx.moveTo(0, -windowSpacing/2 - windowSize);
  ctx.lineTo(0, windowSpacing/2 + windowSize);
  ctx.stroke();
  
  // Draw the horizontal line through bottom window
  ctx.beginPath();
  ctx.moveTo(-windowSize * 1.5, windowSpacing/2);
  ctx.lineTo(windowSize * 1.5, windowSpacing/2);
  ctx.stroke();
  
  // Draw small dots/rivets (4 dots)
  const dotSize = rocket.size * 0.015;
  
  // Upper dots
  ctx.beginPath();
  ctx.arc(-rocketWidth * 0.6, -rocketHeight * 0.15, dotSize, 0, Math.PI * 2);
  ctx.fillStyle = ROCKET_COLOR;
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(rocketWidth * 0.6, -rocketHeight * 0.15, dotSize, 0, Math.PI * 2);
  ctx.fill();
  
  // Lower dots
  ctx.beginPath();
  ctx.arc(-rocketWidth * 0.6, rocketHeight * 0.25, dotSize, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(rocketWidth * 0.6, rocketHeight * 0.25, dotSize, 0, Math.PI * 2);
  ctx.fill();
  
  // Draw the fins
  const finHeight = rocket.size * 0.2;
  const finWidth = rocket.size * 0.15;
  
  // Left fin
  ctx.beginPath();
  ctx.moveTo(-rocketWidth * 0.9, rocketHeight * 0.1);
  ctx.lineTo(-rocketWidth * 1.4, rocketHeight * 0.35);
  ctx.lineTo(-rocketWidth * 0.9, rocketHeight * 0.35);
  ctx.closePath();
  ctx.stroke();
  
  // Right fin
  ctx.beginPath();
  ctx.moveTo(rocketWidth * 0.9, rocketHeight * 0.1);
  ctx.lineTo(rocketWidth * 1.4, rocketHeight * 0.35);
  ctx.lineTo(rocketWidth * 0.9, rocketHeight * 0.35);
  ctx.closePath();
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
