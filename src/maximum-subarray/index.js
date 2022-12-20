/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let curSum = 0;
  let maxSum = -Infinity;

  nums.forEach((num) => {
    curSum = Math.max(curSum + num, num);
    maxSum = Math.max(maxSum, curSum);
  });

  return maxSum;
};
