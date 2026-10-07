import { describe, it, expect } from 'vitest';
import { dist } from './geometry';

describe('geometry', () => {
  it('calculates the distance between two points', () => {
    expect(dist({ x: 0, y: 0 }, { x: 3, y: 4 })).toBe(5);
  });
});
