
// Export all drawing functions and utilities from a central file

import { SpaceObject } from './types';
import { drawStar } from './drawing/drawStar';
import { drawPlanet } from './drawing/drawPlanet';
import { drawRocket } from './drawing/drawRocket';
import { initializeSpaceObjects } from './utils/initializeObjects';
import { updateSpaceObject } from './utils/updateObjects';

// Use the exact same pink as the hero section circles
const SPACE_COLOR = '#F9A7A7';

export { 
  initializeSpaceObjects,
  updateSpaceObject
};

// Drawing function that delegates to the appropriate drawer based on object type
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
