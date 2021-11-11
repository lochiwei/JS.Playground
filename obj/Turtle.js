// 0.0.1: + Turtle

import { Point } from './Point.js';

/**
 * Turtle
 * ------
 * ```
 * new Turtle(pos, dir, blockFunc)
 * ```
 * always turns right when blocked.
 *
 * ### Properties
 * - turtle.position: Point
 * - turtle.direction: Point
 * - turtle.isInDeadEnd: Bool
 * - turtle.isBlocked (getter)
 *
 * ### Methods
 * - turtle.isBlockedAt(x,y)
 * - turtle.turnRight()
 * - turtle.forward()
 */
export class Turtle {
  /**
   * x-axis: ↓, y-axis: ➝
   * @param {Point} position - Point(x,y): turtle's starting position
   * @param {Point} direction - Point(x,y): turtle's moving direction
   * @param {function} isBlockedAt - isBlockedAt(x, y): Bool
   */
  constructor(position, direction, isBlockedAt) {
    this.position = position; // turtle starting position
    this.direction = direction; // moving dir

    this.isBlockedAt = isBlockedAt;
    this.isInDeadEnd = false;
  }

  // turtle.turnRight()
  turnRight() {
    this.direction.turnRight();
    return this; // for chaining
  }

  // turtle.isBlocked
  get isBlocked() {
    const { x, y } = this.position;
    const { x: u, y: v } = this.direction;
    return this.isBlockedAt(x + u, y + v);
  }

  // turtle.forward()
  forward() {
    const originalDir = this.direction.copy();

    while (this.isBlocked) {
      this.turnRight();
      if (this.direction.isEqual(originalDir)) {
        this.isInDeadEnd = true;
        break;
      }
    }

    if (!this.isInDeadEnd) {
      this.position = this.position.add(this.direction);
    }
  }
}
