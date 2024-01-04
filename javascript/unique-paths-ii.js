/**
 * @param {number[][]} dp
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array.from(obstacleGrid);

  if (dp[0][0] === 1) return 0;

  dp[0][0] = 1;

  for (let row = 1; row < m; row += 1) {
    dp[row][0] = dp[row][0] === 0 && dp[row - 1][0] === 1 ? 1 : 0;
  }

  for (let col = 1; col < n; col += 1) {
    dp[0][col] = dp[0][col] === 0 && dp[0][col - 1] === 1 ? 1 : 0;
  }

  for (let row = 1; row < m; row += 1) {
    for (let col = 1; col < n; col += 1) {
      if (dp[row][col] === 0) {
        dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
      } else {
        dp[row][col] = 0;
      }
    }
  }

  return dp[m - 1][n - 1];
};
