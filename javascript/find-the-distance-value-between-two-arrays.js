/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  arr2.sort((a, b) => a - b);

  const checkArrayOutOfRange = (arr, num, distance) => {
    const from = num - distance;
    const to = num + distance;

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      const value = arr[middle];

      if (from <= value && value <= to) return false;

      if (value < num) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    return true;
  };

  let distanceValue = 0;

  arr1.forEach((num) => {
    if (checkArrayOutOfRange(arr2, num, d)) {
      distanceValue += 1;
    }
  });

  return distanceValue;
};
