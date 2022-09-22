/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let curSum = 0;
  let maxSum = nums[0];

  nums.forEach((num) => {
    curSum = Math.max(curSum + num, num);
    maxSum = Math.max(maxSum, curSum);
  });

  return maxSum;
};
