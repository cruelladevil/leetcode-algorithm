/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  const dp = Array.from({ length: m + 1 }, () => {
    return Array.from({ length: n + 1 }, () => 0);
  });

  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      dp[i][j] =
        word1.charAt(i - 1) === word2.charAt(j - 1)
          ? dp[i - 1][j - 1] + 1
          : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return m + n - 2 * dp[m][n];
};
