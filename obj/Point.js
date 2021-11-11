// 0.0.1: + Point

/**
 * Point
 * -----
 * ```
 * new Point(x,y)
 * ```
 * ### Methods
 * - p.turnRight()
 * - p.add(p2)
 * - p.isEqual(p2)
 * - p.copy()
 *
 * ### Properties
 * - p.x
 * - p.y
 */
export class Point {
  // init
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // point.turRight()
  turnRight() {
    const { x, y } = this;
    this.x = y;
    this.y = -x;
    return this;
  }

  // p1.add(p2)
  add(point) {
    const { x: x1, y: y1 } = this;
    const { x: x2, y: y2 } = point;
    return new Point(x1 + x2, y1 + y2);
  }

  // point.copy()
  copy() {
    return new Point(this.x, this.y);
  }

  // p1.isEqual(p2)
  isEqual(p2) {
    return this.x === p2.x && this.y === p2.y;
  }
}
