// 0.0.1: + caching()

// ⭐️ caching decorator
//    use a closure to ecapsulate 'f'
export function caching(f) {
  // make a new cache for this 'f'
  let cache = new Map();

  // returns a function that can remember
  return function (...args) {
    // if not in cache, cache it.
    const key = `${args}`;
    if (!cache.has(key)) {
      //          ╭- call a method -╮  ('f' could be a method)
      let value = f.apply(this, args); // ⭐️ with "this" context
      cache.set(key, value);
      // log(`(${key}, ${value}) cached ...`);
    }
    // get function value from cache
    return cache.get(key);
  };
}
