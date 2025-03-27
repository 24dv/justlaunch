
import { SpaceObject } from '../types';

// Use the exact same pink as the hero section circles
const SPACE_COLOR = '#F9A7A7';

export const drawPlanet = (ctx: CanvasRenderingContext2D, planet: SpaceObject): void => {
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
