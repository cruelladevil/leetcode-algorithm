/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const matrix = Array.from({ length: m }, () => {
    return Array.from({ length: n });
  });

  for (let row = 0; row < m; row += 1) {
    matrix[row][0] = 1;
  }

  for (let col = 0; col < n; col += 1) {
    matrix[0][col] = 1;
  }

  for (let row = 1; row < m; row += 1) {
    for (let col = 1; col < n; col += 1) {
      matrix[row][col] = matrix[row - 1][col] + matrix[row][col - 1];
    }
  }

  return matrix[m - 1][n - 1];
};
