/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const sum = (1 + middle) * (middle / 2);

    if (sum === n) return middle;

    if (sum < n) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left - 1;
};
