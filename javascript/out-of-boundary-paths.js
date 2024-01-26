/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const MOD = 1_000_000_007;

  const dp = Array.from({ length: m }, () => {
    return Array.from({ length: n }, () => {
      return Array.from({ length: maxMove + 1 }, () => 0);
    });
  });

  for (let moveCount = 1; moveCount < maxMove + 1; moveCount += 1) {
    for (let row = 0; row < m; row += 1) {
      for (let col = 0; col < n; col += 1) {
        directions.forEach(([dRow, dCol]) => {
          const newRow = row + dRow;
          const newCol = col + dCol;
          const isOutOfGrid = newRow < 0 || newRow >= m || newCol < 0 || newCol >= n;

          if (isOutOfGrid) {
            dp[row][col][moveCount] = (dp[row][col][moveCount] + 1) % MOD;
          } else {
            dp[row][col][moveCount] = (dp[row][col][moveCount] + dp[newRow][newCol][moveCount - 1]) % MOD;
          }
        });
      }
    }
  }

  return dp[startRow][startColumn][maxMove];
};
