/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;
  let num = -1;
  let found = false;
  let center = 0;
  const arr = array;

  while (found === false && start <= end) {
    center = Math.floor((start + end) / 2);
    if (arr[center] === value) {
      found = true;
      num = center;
    } else if (arr[center] > value) {
      end = center - 1;
    } else {
      start = center + 1;
    }
  }
  return num;
}
module.exports = findIndex;
