/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length;
  const dp = Array.from({ length: n }, () => 0);

  nums.forEach((curr, i) => {
    let count = 1;

    for (let j = 0; j < i; j += 1) {
      const prev = nums[j];

      if (curr > prev) {
        count = Math.max(count, dp[j] + 1);
      }
    }

    dp[i] = count;
  });

  return Math.max(...dp);
};
