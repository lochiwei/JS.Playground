// versions
// 1.2.1: + flattenObject(obj)

import './styles.css';

import { log } from '../ext/debug';
import { $ } from '../ext/Document';
// import { permutations } from '../math/combinatorics';
// import { caching } from '../decorator/caching.js';
import { flattenObject } from '../ext/Object';
// import { matrix, matrixMap, matrixToHTMLTable } from '../ext/Array.js';
// import { Matrix } from '../obj/Matrix.js';
// import { SpiralMatrix } from '../obj/SpiralMatrix.js';

// ------------ lab ------------

const dict = {
  a: { a: 1, b: 2 },
  b: { a: 3, b: 4, c: 5 },
};

const app = $('#app');

app.innerHTML = `
<div id="div"></div>
`;

// const div = $('#div');
// div.innerHTML = new Matrix(m).tableHTML;

// ------------ log ------------
[
  // `${toString(m)}`,
  flattenObject(dict),
  // {a.a: 1, a.b: 2, b.a: 3, b.b: 4, b.c: 5}
].forEach((x) => log(x));
