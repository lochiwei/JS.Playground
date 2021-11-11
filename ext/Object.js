// versions:
// 0.0.1 (2021.11.11)
// + toString()
// + flattenObject()

/**
 * toString(obj)
 * =============
 * ⭐️ 使用時要注意：obj 內不能有「循環式」的屬性，否則會產生無限迴圈❗️
 */
export function toString(obj) {
  // Set
  if (String(obj) === '[object Set]')
    return `{${[...obj].map((x) => toString(x)).join(', ')}}`;

  // Map
  if (String(obj) === '[object Map]')
    return `{${[...obj].map((p) => `${p[0]}→${toString(p[1])}`).join(', ')}}`;

  // function: return its code
  if (typeof obj === 'function') return obj.toString();

  // NaN
  if (obj !== null && obj !== undefined && obj.toString() === 'NaN')
    return 'NaN';

  // convert to string and check if it's an object
  let str = JSON.stringify(obj);
  let isObject = /^\{.*\}$/g.test(str); // { ... }

  // not an object, return str anyway
  if (!isObject) return str;

  // IS an object, try to get its methods as well.
  let result = [];
  for (let key in obj) {
    result.push(`${key}: ${toString(obj[key])}`);
  }
  return `{${result.join(', ')}}`;
}

/**
 * flatten a "multi-level" object to a flat one.
 * @param {object} obj - the object to be flattened
 */
export function flattenObject(obj) {
  // the flattened object
  let result = {};

  // try to add property to result with (key, value) pair
  function addProperty(key, value) {
    // base case:
    // `value` is not an object, add it to result directly.
    if (typeof value !== 'object') {
      result[key] = value;
      return;
    }
    // recursive case:
    // `value` is an object, try to add its properties to result
    for (let prop in value) {
      addProperty(`${key}${key ? '.' : ''}${prop}`, value[prop]);
    }
  }

  // begin to add properties from the root object
  addProperty('', obj);
  return result;
}
