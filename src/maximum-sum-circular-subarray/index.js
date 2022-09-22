/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let totalSum = 0;
  let curMax = 0;
  let curMin = 0;
  let maxSum = nums[0];
  let minSum = nums[0];

  nums.forEach((num) => {
    curMax = Math.max(curMax + num, num);
    curMin = Math.min(curMin + num, num);
    maxSum = Math.max(maxSum, curMax);
    minSum = Math.min(minSum, curMin);
    totalSum += num;
  });

  if (maxSum < 0) return maxSum;

  return Math.max(maxSum, totalSum - minSum);
};
