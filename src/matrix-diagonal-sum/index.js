/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const n = mat.length;
  let diagonalSum = 0;

  for (let i = 0; i < n; i += 1) {
    diagonalSum += mat[i][i];
    diagonalSum += mat[i][n - i - 1];
  }

  if (n % 2 === 1) {
    const middle = Math.floor((n - 1) / 2);
    diagonalSum -= mat[middle][middle];
  }

  return diagonalSum;
};
