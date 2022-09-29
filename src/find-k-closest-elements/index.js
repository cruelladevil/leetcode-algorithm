/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let left = 0;
  let right = arr.length - k;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (x - arr[middle] > arr[middle + k] - x) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return arr.slice(left, left + k);
};
