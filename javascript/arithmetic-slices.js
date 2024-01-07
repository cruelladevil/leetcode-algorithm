/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  const n = nums.length;
  const dp = Array.from({ length: n }, () => 0);

  for (let i = 2; i < n; i += 1) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      dp[i] = dp[i - 1] + 1;
    }
  }

  return dp.reduce((acc, cur) => acc + cur, 0);
};
