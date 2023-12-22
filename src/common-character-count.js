const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Array = s1.split('');
  let s2Array = s2.split('');
  let result = 0;
  let coin;

  for (let i = 0; i < s1Array.length; i++) {
    coin = s2Array.indexOf(s1Array[i]);
    if (coin !== -1) {
        result += 1;
        s2Array.splice(coin, 1);
    }
}
  return result;
}

module.exports = {
  getCommonCharacterCount
};
