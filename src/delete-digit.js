const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nStrAr = String(n);
  let result = 0;
  let max;

  for (let i = 0; i < nStrAr.length; i++) {
    max = Number(nStrAr.slice(0, i) + nStrAr.slice(i + 1));
    if (max > result) {
      result = max;
    }
  }

  return result;
}

module.exports = {
  deleteDigit
};
