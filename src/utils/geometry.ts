import { Point, Wall } from "../types";

// calculate the distance between two points
export function dist(a: Point, b: Point): number {
  return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
}

// helper to get the distance from raw coordinates
export function distance(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

// how close an endpoint needs to be to snap
export const SNAP_DIST = 12; // in pixels
export const BASE_SCALE = 28;

// build the polygon points string for a wall with thickness
export function wallPolygon(wall: Wall): string {
  try {
    const dx = wall.end.x - wall.start.x;
    const dy = wall.end.y - wall.start.y;
    const len = Math.sqrt(dx * dx + dy * dy);
    const nx = (-dy / len) * (wall.thickness / 2);
    const ny = (dx / len) * (wall.thickness / 2);
    const p1 = `${wall.start.x + nx},${wall.start.y + ny}`;
    const p2 = `${wall.end.x + nx},${wall.end.y + ny}`;
    const p3 = `${wall.end.x - nx},${wall.end.y - ny}`;
    const p4 = `${wall.start.x - nx},${wall.start.y - ny}`;
    return `${p1} ${p2} ${p3} ${p4}`;
  } catch (err) {
    // if something goes wrong just return an empty polygon
    return "0,0 0,0 0,0 0,0";
  }
}
