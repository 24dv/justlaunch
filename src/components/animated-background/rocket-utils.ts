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
  
  const rocketScale = rocket.size / 200; // Normalize size
  
  // Define rocket dimensions
  const bodyWidth = 40 * rocketScale;
  const bodyHeight = 100 * rocketScale;
  const noseHeight = 40 * rocketScale;
  const finWidth = 20 * rocketScale;
  const finHeight = 30 * rocketScale;
  
  // 1. Draw rocket body (main cylinder)
  ctx.beginPath();
  ctx.rect(-bodyWidth/2, -bodyHeight/2, bodyWidth, bodyHeight);
  ctx.stroke();
  
  // 2. Draw pointed nose cone
  ctx.beginPath();
  ctx.moveTo(-bodyWidth/2, -bodyHeight/2);
  ctx.lineTo(0, -bodyHeight/2 - noseHeight);
  ctx.lineTo(bodyWidth/2, -bodyHeight/2);
  ctx.closePath();
  ctx.stroke();
  
  // 3. Draw rocket fins (three fins at equal angles)
  // Left fin
  ctx.beginPath();
  ctx.moveTo(-bodyWidth/2, bodyHeight/2 - finHeight/2);
  ctx.lineTo(-bodyWidth/2 - finWidth, bodyHeight/2 + finHeight/2);
  ctx.lineTo(-bodyWidth/2, bodyHeight/2 + finHeight/2);
  ctx.closePath();
  ctx.stroke();
  
  // Right fin
  ctx.beginPath();
  ctx.moveTo(bodyWidth/2, bodyHeight/2 - finHeight/2);
  ctx.lineTo(bodyWidth/2 + finWidth, bodyHeight/2 + finHeight/2);
  ctx.lineTo(bodyWidth/2, bodyHeight/2 + finHeight/2);
  ctx.closePath();
  ctx.stroke();
  
  // Bottom fin
  ctx.beginPath();
  ctx.moveTo(-finWidth/2, bodyHeight/2);
  ctx.lineTo(0, bodyHeight/2 + finHeight);
  ctx.lineTo(finWidth/2, bodyHeight/2);
  ctx.closePath();
  ctx.stroke();
  
  // 4. Draw engine nozzle
  const nozzleWidth = bodyWidth * 0.7;
  const nozzleHeight = 15 * rocketScale;
  
  ctx.beginPath();
  ctx.moveTo(-nozzleWidth/2, bodyHeight/2);
  ctx.lineTo(-nozzleWidth/2, bodyHeight/2 + nozzleHeight);
  ctx.lineTo(nozzleWidth/2, bodyHeight/2 + nozzleHeight);
  ctx.lineTo(nozzleWidth/2, bodyHeight/2);
  ctx.stroke();
  
  // 5. Draw window (clean, single circular porthole)
  const windowSize = bodyWidth * 0.6;
  ctx.beginPath();
  ctx.arc(0, -bodyHeight/4, windowSize/2, 0, Math.PI * 2);
  ctx.stroke();
  
  // 6. Add engine thrust/flame effect
  const flameGradient = ctx.createRadialGradient(
    0, bodyHeight/2 + nozzleHeight, 0,
    0, bodyHeight/2 + nozzleHeight * 3, nozzleWidth
  );
  flameGradient.addColorStop(0, `${SPACE_COLOR}80`); // 50% opacity
  flameGradient.addColorStop(1, 'transparent');
  
  ctx.fillStyle = flameGradient;
  ctx.beginPath();
  ctx.moveTo(-nozzleWidth/2, bodyHeight/2 + nozzleHeight);
  ctx.quadraticCurveTo(
    0, bodyHeight/2 + nozzleHeight * 4,
    nozzleWidth/2, bodyHeight/2 + nozzleHeight
  );
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
