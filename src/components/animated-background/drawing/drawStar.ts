
import { SpaceObject } from '../types';

// Use the exact same pink as the hero section circles
const SPACE_COLOR = '#F9A7A7';

export const drawStar = (ctx: CanvasRenderingContext2D, star: SpaceObject): void => {
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
