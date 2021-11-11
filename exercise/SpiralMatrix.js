// 0.0.1: + SpiralMatrix

import { matrix, matrixToString } from '../ext/Array.js';
import { Point } from './Point.js';
import { Turtle } from './Turtle.js';

// SpiralMatrix
/**
 * SpiralMatrix
 * ------------
 * a matrix (2D array) filled with integers circulating as a spiral.
   ```
   let m = new SpiralMatrix(4);
   console.log(`${m}`);
   ```
 * ### Methods
 * - matrix.toString()
 */
export class SpiralMatrix {
  // init
  constructor(n) {
    // ⭐️ is-blocked function (passed to this.turtle)
    function isBlockedAt(x, y) {
      if (!(0 <= x && x < n && 0 <= y && y < n)) return true;
      return this.footprint[x][y] > 0; // ⭐️ .bind(this)❗️
    }

    // map matrix size
    this.size = n;

    // n x n matrix
    this.footprint = matrix(n, n);

    // this.turtle
    this.turtle = new Turtle(
      new Point(0, 0), // position
      new Point(0, 1), // direction
      isBlockedAt.bind(this), // ⭐️ .bind(this)❗️
    );

    // run the turtle
    this._index = 1;
    this._run();
  }

  // mark the map
  _markMap() {
    const { x, y } = this.turtle.position;
    this.footprint[x][y] = this._index;
    this._index += 1;
  }

  // run the turtle
  _run() {
    while (!this.turtle.isInDeadEnd) {
      this._markMap();
      this.turtle.forward();
    }
  }

  // this.toString()
  toString() {
    return matrixToString(this.footprint, '0');
  }
}
