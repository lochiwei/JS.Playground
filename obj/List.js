// 0.0.1: + List()

/**
 * List
 * ----
 * (generator function) generates an iterator of numbers.
 * ```
 * List(5)
 * List(5, {start: 1})
 * List(5, {start: -1, step: -2})
 * ```
 * @param {number} count - number of elements to be generated.
 * @param {{start: number, step: number}}
 */
export function* List(count, { start = 0, step = 1 } = {}) {
  for (let i = 0; i < count; i++) {
    yield start + step * i;
  }
}
