/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  words.sort((a, b) => a.length - b.length);

  const dp = {};
  let maxLength = 0;

  words.forEach((word) => {
    dp[word] = 1;

    for (let i = 0; i < word.length; i += 1) {
      const predecessor = word.slice(0, i) + word.slice(i + 1);
      dp[word] = Math.max(dp[word], (dp[predecessor] || 0) + 1);
    }

    maxLength = Math.max(maxLength, dp[word]);
  });

  return maxLength;
};
