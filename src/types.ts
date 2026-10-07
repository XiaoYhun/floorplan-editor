export interface Point {
  x: number;
  y: number;
}

export interface Wall {
  id: string;
  start: Point;
  end: Point;
  thickness: number;
  length: number;
}

export interface Viewport {
  x: number;
  y: number;
  scale: number;
}
