// 0.0.1: + c(m,n), permutations()

import { caching } from '../decorator/caching.js';

// binomial combinations
function _c(m, n) {
  if (m - n < 0 || n < 0) return 0;
  if (m - n === 0 || n === 0) return 1;
  return _c(m - 1, n - 1) + _c(m - 1, n);
}

// give 'memory' to function '_c'
export const c = caching(_c);

/**
 * find all the permutations of an array.
 * @param {any[]} arr - array (of distinct elements)
 */
export function permutations(arr) {
  // base case:
  if (arr.length === 1) return [arr];
  // recursive case:
  // |ABC = A|BC + B|AC + C|AB
  // hint: A|BC means fix A, permute BC.
  return arr
    .map((x, i) => {
      let subarr = arr.slice(); // copy array
      subarr.splice(i, 1); // remove `x` in place
      return permutations(subarr).map((p) => [x, ...p]);
    })
    .reduce((union, ps) => [...union, ...ps], []);
}
