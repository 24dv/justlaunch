
import { SpaceObject } from '../types';

// Use the exact same pink as the hero section circles
const SPACE_COLOR = '#F9A7A7';

export const drawRocket = (ctx: CanvasRenderingContext2D, rocket: SpaceObject): void => {
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
