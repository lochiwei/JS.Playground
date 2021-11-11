// 0.0.1: + Matrix

// import { toString } from '../ext/helpers.js';
import {
  matrix,
  matrixMap,
  matrixMax,
  matrixMin,
  matrixToString,
  matrixToHTMLTable,
} from '../ext/Array.js';

/**
 * Matrix (v1.2)
 * -------------
 * ```
 * new Matrix(3, 2, 'x')
 * new Matrix([[1,2,3], [4,5,6]])
 * ```
 * ### Methods
 * - matrix.map(f)
 * - matrix.max(f)
 * - matxix.copy()
 * - matrix.toString(padString)
 *
 * ### Properties
 * - matrix.tableHTML
 * - matrix.numberOfRows
 * - matrix.numberOfColumns
 */
export class Matrix {
  /**
   * new instance of Matrix
   * @param {number|any[][]} m - number of rows, or 2D array
   * @param {number} n - number of columns
   * @param {any} fill - value to fill the matrix with
   */
  constructor(m, n, fill) {
    // if m is not an positive integer,
    // it is expected to be a matrix (2D array)
    this.cells = Array.isArray(m[0]) ? m : matrix(m, n, fill);
  }

  // ⭐️ matrix.map((cell, i, j) => ...) -> new Matrix
  map(f) {
    let m = matrixMap(this.cells, f);
    return new Matrix(m);
  }

  // max of the matrix
  max(f = (x) => x) {
    return matrixMax(this.cells, f);
  }

  // min of the matrix
  min(f = (x) => x) {
    return matrixMin(this.cells, f);
  }

  // deep copy an array (make sure we won't SHARE arr with outer code)
  // for internal use only, external code should use `matrix.cells`.
  _deepCopy(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  // matrix.numberOfRows
  get numberOfRows() {
    return this.cells.length;
  }

  // matrix.numberOfColumns
  get numberOfColumns() {
    return this.cells[0].length;
  }

  // matrix.copy()
  copy() {
    return new Matrix(this._deepCopy(this.cells));
  }

  // matrix.toString()
  toString(padString = ' ') {
    return matrixToString(this.cells, padString);
  }

  // matrix.tableHTML
  get tableHTML() {
    return matrixToHTMLTable(this.cells);
  }
} // end: Matrix
