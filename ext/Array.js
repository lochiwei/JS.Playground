// versions
// 1.0.0 (2021.11.10):
// + arrayMax(), arrayMin()
// + matrixMax(), matrixMin(), matrixToString(), matrixToHTMLTable()
// + matrix(), matrixMap()

/**
 * arrayMax(arr, mapFunc)
 * ----------------------
 * - array -> max
 *
 * find the *max something* in the array.
 * the *max something* is defined by the map function `mapFunc`.
 *
 * @param {function} mapFunc - the function by which elements are mapped.
 */
export function arrayMax(arr, mapFunc = (x) => x) {
  return Math.max(...arr.map((x) => mapFunc(x)));
}

/**
 * arrayMin(arr, mapFunc)
 * ----------------------
 * - array -> min
 *
 * find the *min something* in the array.
 * the *min something* is defined by the map function `mapFunc`.
 *
 * @param {function} mapFunc - the function by which elements are mapped.
 */
export function arrayMin(arr, mapFunc = (x) => x) {
  return Math.min(...arr.map((x) => mapFunc(x)));
}

/**
 * matrixMax(matrix, mapFunc)
 * --------------------------
 * - matrix -> max
 *
 * find the *max something* in the matrix (2D array).
 * the *max something* is defined by the map function `mapFunc`.
 *
 * @param {function} mapFunc - the function by which elements are mapped.
 */
export function matrixMax(matrix, mapFunc = (x) => x) {
  return arrayMax(matrix.flat(), mapFunc);
}

/**
 * matrixMin(matrix, mapFunc)
 * --------------------------
 * - matrix -> min
 *
 * find the *min something* in the matrix (2D array).
 * the *min something* is defined by the map function `mapFunc`.
 *
 * @param {function} mapFunc - the function by which elements are mapped.
 */
export function matrixMin(matrix, mapFunc = (x) => x) {
  return arrayMin(matrix.flat(), mapFunc);
}

/**
 * matrixToString(matrix, padString)
 * ---------------------------------
 * - matrix -> string
 *
 * turn a matrix (2D array) into string.
 *
 * @param {any[][]} matrix - 2D array.
 * @param {string} padString - the string to pad with.
 */
export function matrixToString(matrix, padString = ' ') {
  // max length of elements
  let n = matrixMax(matrix, (x) => `${x}`.length);

  return matrix
    .map(
      (row) =>
        '[' +
        row.map((item) => `${item}`.padStart(n, padString)).join(' ') +
        ']',
    )
    .join('\n');
}

/**
 * matrixToHTMLTable(matrix)
 * -------------------------
 * - matrix -> `<table>` HTML string
 *
 * turn a 2D array (matrix) into HTML `<table>` tag string.
 * (intended to be used for `innerHTML` of an `HTMLElement`)
 *
 * @param {any[][]} matrix - 2D array
 */
export function matrixToHTMLTable(matrix) {
  let html = matrix
    .map((row) => row.map((x) => `<td>${x}</td>`).join(''))
    .join(`</tr><tr>`);
  return `<table><tr>${html}</tr></table>`;
}

/**
 * matrix(m, n, fill)
 * ------------------
 * create a m x n matrix (2D array) filled with `fill`.
 *
 * @param {number} m - number of rows
 * @param {number} n - number of columns
 */
export function matrix(m, n, fill = 0) {
  return Array(m)
    .fill()
    .map((_) => Array(n).fill(fill));
}

/**
 * matrixMap()
 * -----------
 * matrix -> matrix
 * @param {any[][]} matrix - 2D array
 * @param {function} f - mapping function
 */
export function matrixMap(matrix, f) {
  return matrix.map((row, i) => row.map((cell, j) => f(cell, i, j)));
}
