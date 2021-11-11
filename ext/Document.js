// 0.0.1: + $(), $all()

// ⭐️ $(): select first element
export function $(selector, parent = document) {
  return parent.querySelector(selector);
}

// ⭐️ $all(): select all elements
export function $all(selector, parent = document) {
  return parent.querySelectorAll(selector);
}
