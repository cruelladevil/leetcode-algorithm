/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const row = Math.floor(middle / n);
    const col = middle % n;
    const value = matrix[row][col];

    if (value === target) return true;

    if (value < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return false;
};
