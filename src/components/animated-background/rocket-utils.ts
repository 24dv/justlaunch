
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
  
  // Tin Tin inspired rocket - outlined style with red and white checkered pattern
  
  // Main rocket body - cylindrical with rounded top
  ctx.beginPath();
  
  // Draw the main cylinder body
  const bodyWidth = rocketWidth;
  
  // Left side of cylinder
  ctx.moveTo(-bodyWidth/2, rocketHeight/2); // Bottom left of cylinder
  ctx.lineTo(-bodyWidth/2, -rocketHeight/3); // Up to where nose cone starts
  
  // Nose cone (rounded top)
  ctx.quadraticCurveTo(
    -bodyWidth/2, -rocketHeight/2, // Control point
    0, -rocketHeight/2            // Top center point
  );
  ctx.quadraticCurveTo(
    bodyWidth/2, -rocketHeight/2, // Control point
    bodyWidth/2, -rocketHeight/3  // Right side where nose starts
  );
  
  // Right side of cylinder
  ctx.lineTo(bodyWidth/2, rocketHeight/2); // Bottom right of cylinder
  
  // Draw the body
  ctx.stroke();
  
  // Add the characteristic Tin Tin rocket fins (3 fins)
  const finHeight = rocketHeight * 0.25;
  const finWidth = bodyWidth * 0.8;
  const finY = rocketHeight * 0.3; // Position fins near bottom
  
  // Left fin
  ctx.beginPath();
  ctx.moveTo(-bodyWidth/2, finY);
  ctx.lineTo(-bodyWidth/2 - finWidth, finY + finHeight);
  ctx.lineTo(-bodyWidth/2 - finWidth/2, finY + finHeight);
  ctx.lineTo(-bodyWidth/2, finY + finHeight/3);
  ctx.closePath();
  ctx.stroke();
  
  // Right fin
  ctx.beginPath();
  ctx.moveTo(bodyWidth/2, finY);
  ctx.lineTo(bodyWidth/2 + finWidth, finY + finHeight);
  ctx.lineTo(bodyWidth/2 + finWidth/2, finY + finHeight);
  ctx.lineTo(bodyWidth/2, finY + finHeight/3);
  ctx.closePath();
  ctx.stroke();
  
  // Bottom fin (slightly smaller and centered)
  ctx.beginPath();
  ctx.moveTo(0, rocketHeight/2);
  ctx.lineTo(0, rocketHeight/2 + finHeight * 0.8);
  ctx.lineTo(-finWidth/3, rocketHeight/2 + finHeight * 0.6);
  ctx.lineTo(0, rocketHeight/2 + finHeight/4);
  ctx.lineTo(finWidth/3, rocketHeight/2 + finHeight * 0.6);
  ctx.lineTo(0, rocketHeight/2 + finHeight * 0.8);
  ctx.stroke();
  
  // Add details - windows and checkered pattern
  
  // Main circular window near top
  const windowSize = bodyWidth * 0.6;
  ctx.beginPath();
  ctx.arc(0, -rocketHeight/4, windowSize/2, 0, Math.PI * 2);
  ctx.stroke();
  
  // Smaller portholes along the body
  const numPortholes = 3;
  const portholeDiameter = bodyWidth * 0.25;
  const portholesStartY = -rocketHeight/8;
  const portholesSpacing = rocketHeight/6;
  
  for (let i = 0; i < numPortholes; i++) {
    ctx.beginPath();
    ctx.arc(0, portholesStartY + i * portholesSpacing, portholeDiameter/2, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  // Add the characteristic red and white checkered pattern at the bottom (but only outline)
  const checkerHeight = rocketHeight/6;
  const checkerWidth = bodyWidth/4;
  const checkerY = rocketHeight/2 - checkerHeight;
  
  // Vertical dividing lines for the checkered pattern
  for (let i = 1; i < 4; i++) {
    const x = -bodyWidth/2 + (i * checkerWidth);
    ctx.beginPath();
    ctx.moveTo(x, checkerY);
    ctx.lineTo(x, rocketHeight/2);
    ctx.stroke();
  }
  
  // Horizontal line for the checkerboard
  ctx.beginPath();
  ctx.moveTo(-bodyWidth/2, checkerY);
  ctx.lineTo(bodyWidth/2, checkerY);
  ctx.stroke();
  
  // Engine nozzle - simple outline
  ctx.beginPath();
  const nozzleWidth = bodyWidth * 0.6;
  const nozzleHeight = rocketHeight/10;
  ctx.moveTo(-nozzleWidth/2, rocketHeight/2);
  ctx.lineTo(-nozzleWidth/2, rocketHeight/2 + nozzleHeight);
  ctx.lineTo(nozzleWidth/2, rocketHeight/2 + nozzleHeight);
  ctx.lineTo(nozzleWidth/2, rocketHeight/2);
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
