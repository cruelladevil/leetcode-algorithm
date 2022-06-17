/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const value = arr[middle];
    const previousValue = arr[middle - 1];
    const nextValue = arr[middle + 1];

    if (value > previousValue && value > nextValue) return middle;

    if (value < nextValue) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;
};
