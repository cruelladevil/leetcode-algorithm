/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const n = matrix.length;

  const dp = Array.from({ length: n }, () => {
    return Array.from({ length: n }, () => 0);
  });

  dp[0] = [...matrix[0]];

  for (let row = 1; row < n; row += 1) {
    for (let col = 0; col < n; col += 1) {
      const leftTop = dp[row - 1][col - 1] || Infinity;
      const top = dp[row - 1][col];
      const rightTop = dp[row - 1][col + 1] || Infinity;
      const minNeighbor = Math.min(leftTop, top, rightTop);

      dp[row][col] = matrix[row][col] + minNeighbor;
    }
  }

  return Math.min(...dp[dp.length - 1]);
};
