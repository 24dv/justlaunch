import { SpaceObject } from './types';

// Use the exact same pink as the hero section circles
const SPACE_COLOR = '#F9A7A7';

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

export const drawSpaceObject = (ctx: CanvasRenderingContext2D, object: SpaceObject): void => {
  ctx.save();
  ctx.translate(object.x, object.y);
  
  // Set style based on opacity
  ctx.globalAlpha = object.opacity;
  ctx.strokeStyle = SPACE_COLOR;
  ctx.fillStyle = SPACE_COLOR;
  ctx.lineWidth = object.size * 0.05;
  
  if (object.type === 'star') {
    drawStar(ctx, object);
  } else if (object.type === 'planet') {
    drawPlanet(ctx, object);
  } else if (object.type === 'rocket') {
    drawRocket(ctx, object);
  }
  
  ctx.restore();
};

const drawStar = (ctx: CanvasRenderingContext2D, star: SpaceObject): void => {
  // Simple star - just a point with a subtle glow
  ctx.beginPath();
  ctx.arc(0, 0, star.size, 0, Math.PI * 2);
  ctx.fill();
  
  // Add a subtle glow effect
  const gradient = ctx.createRadialGradient(0, 0, star.size * 0.2, 0, 0, star.size * 3);
  gradient.addColorStop(0, `${SPACE_COLOR}40`); // 25% opacity
  gradient.addColorStop(1, 'transparent');
  
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(0, 0, star.size * 3, 0, Math.PI * 2);
  ctx.fill();
};

const drawPlanet = (ctx: CanvasRenderingContext2D, planet: SpaceObject): void => {
  ctx.rotate(planet.rotation);
  
  // Main planet body
  ctx.beginPath();
  ctx.arc(0, 0, planet.size, 0, Math.PI * 2);
  ctx.globalAlpha = planet.opacity * 0.3;
  ctx.fill();
  ctx.globalAlpha = planet.opacity;
  ctx.stroke();
  
  // Add a ring (for some planets)
  if (planet.size > 60) {
    ctx.beginPath();
    ctx.ellipse(0, 0, planet.size * 1.5, planet.size * 0.3, 0, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  // Add surface details
  ctx.beginPath();
  ctx.arc(planet.size * 0.3, -planet.size * 0.2, planet.size * 0.2, 0, Math.PI * 2);
  ctx.stroke();
};

const drawRocket = (ctx: CanvasRenderingContext2D, rocket: SpaceObject): void => {
  ctx.rotate(rocket.rotation);
  
  const rocketWidth = rocket.size * 0.35;
  const rocketHeight = rocket.size * 0.8;
  
  // Main rocket body - cylindrical with pointed tip
  ctx.beginPath();
  
  // Draw the main cylinder body
  const bodyWidth = rocketWidth;
  
  // Left side of cylinder
  ctx.moveTo(-bodyWidth/2, rocketHeight/2); // Bottom left
  ctx.lineTo(-bodyWidth/2, -rocketHeight/3); // Up to nose cone
  
  // Nose cone with pointed tip
  ctx.quadraticCurveTo(
    -bodyWidth/4, -rocketHeight/2.5, // Control point
    0, -rocketHeight/2 - rocketHeight/10 // Top point with tip
  );
  ctx.quadraticCurveTo(
    bodyWidth/4, -rocketHeight/2.5, // Control point 
    bodyWidth/2, -rocketHeight/3  // Right side where nose starts
  );
  
  // Right side of cylinder
  ctx.lineTo(bodyWidth/2, rocketHeight/2); // Bottom right
  
  // Draw the body
  ctx.stroke();
  
  // Add rocket fins (3 fins)
  const finHeight = rocketHeight * 0.25;
  const finWidth = bodyWidth * 0.8;
  const finY = rocketHeight * 0.3;
  
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
  
  // Bottom fin
  ctx.beginPath();
  ctx.moveTo(0, rocketHeight/2);
  ctx.lineTo(0, rocketHeight/2 + finHeight * 0.8);
  ctx.lineTo(-finWidth/3, rocketHeight/2 + finHeight * 0.6);
  ctx.lineTo(0, rocketHeight/2 + finHeight/4);
  ctx.lineTo(finWidth/3, rocketHeight/2 + finHeight * 0.6);
  ctx.lineTo(0, rocketHeight/2 + finHeight * 0.8);
  ctx.stroke();
  
  // Main circular window
  const windowSize = bodyWidth * 0.6;
  ctx.beginPath();
  ctx.arc(0, -rocketHeight/4, windowSize/2, 0, Math.PI * 2);
  ctx.stroke();
  
  // Single smaller porthole
  const portholeDiameter = bodyWidth * 0.25;
  ctx.beginPath();
  ctx.arc(0, rocketHeight/8, portholeDiameter/2, 0, Math.PI * 2);
  ctx.stroke();
  
  // Engine nozzle
  ctx.beginPath();
  const nozzleWidth = bodyWidth * 0.6;
  const nozzleHeight = rocketHeight/10;
  
  ctx.moveTo(-nozzleWidth/2, rocketHeight/2);
  ctx.lineTo(-nozzleWidth/2, rocketHeight/2 + nozzleHeight);
  ctx.lineTo(nozzleWidth/2, rocketHeight/2 + nozzleHeight);
  ctx.lineTo(nozzleWidth/2, rocketHeight/2);
  ctx.stroke();
  
  // Add a faint engine glow/flame
  const flameGradient = ctx.createRadialGradient(
    0, rocketHeight/2 + nozzleHeight * 1.5, 0,
    0, rocketHeight/2 + nozzleHeight * 1.5, nozzleWidth
  );
  flameGradient.addColorStop(0, `${SPACE_COLOR}80`); // 50% opacity
  flameGradient.addColorStop(1, 'transparent');
  
  ctx.fillStyle = flameGradient;
  ctx.beginPath();
  ctx.ellipse(0, rocketHeight/2 + nozzleHeight * 1.5, nozzleWidth/2, nozzleWidth, 0, 0, Math.PI * 2);
  ctx.fill();
};

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
    
    // Reset rocket when it goes off screen
    if (object.y < -object.size * 2) {
      object.y = canvasHeight + object.size + Math.random() * 150;
      object.x = canvasWidth * 0.2 + Math.random() * (canvasWidth * 0.6); // Keep rockets more centered
      object.size = 120 + Math.random() * 160;
      object.speed = 0.5 + Math.random() * 0.8;
      object.rotation = -0.1 + Math.random() * 0.2; // Keep rockets pointing mostly upward
    }
  }
};
