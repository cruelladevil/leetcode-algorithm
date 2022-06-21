/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const missing = arr[middle] - (middle + 1);

    if (missing < k) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left + k;
};
