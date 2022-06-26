/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0;
  let max = nums[0];

  nums.forEach((num) => {
    sum = Math.max(sum + num, num);
    max = Math.max(max, sum);
  });

  return max;
};
