const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let newArr = arr;
if (!Array.isArray(arr)) {
  throw new Error("'arr' parameter must be an instance of the Array!");
} else {
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[newArr.length-1] === '--discard-next' || newArr[newArr.length-1] === '--double-next') {
     newArr = newArr.slice(0, newArr.length-1);
   } else if (newArr[0] === '--discard-prev' || newArr[0] === '--double-prev') {
     newArr = newArr.slice(1);
   } else if (newArr[i] === '--discard-next' && newArr[i + 2] === '--double-prev') {
     newArr = newArr.slice(0, i).concat(newArr.slice(i + 3));
   } else if (newArr[i] === '--discard-next' && newArr[i + 2] === '--discard-prev') {
    newArr = newArr.slice(0, i).concat(newArr.slice(i + 3));
  } else  if (newArr[i] === '--discard-next') {
     newArr = newArr.slice(0, i).concat(newArr.slice(i + 2));
   } else if (newArr[i] === '--discard-prev') {
     newArr = newArr.slice(0, i - 1).concat(newArr.slice(i + 1));
   } else if (newArr[i] === '--double-next') {
     newArr = newArr.slice(0, i).concat(newArr[i + 1], newArr.slice(i + 1));
   } else if (newArr[i] === '--double-prev') {
     newArr = newArr.slice(0, i).concat(newArr[i - 1], newArr.slice(i + 1));
   } else if (arr.indexOf('--discard-next') === -1  && arr.indexOf('--discard-prev') === -1  && arr.indexOf('--double-next') === -1 && arr.indexOf('--double-prev') === -1) {
     newArr = arr;
   } 
 }
  return newArr;
}

}

module.exports = {
  transform
};
