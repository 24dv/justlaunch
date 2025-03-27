
export interface SpaceObject {
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  opacity: number;
  type: 'star' | 'planet' | 'rocket';
}
