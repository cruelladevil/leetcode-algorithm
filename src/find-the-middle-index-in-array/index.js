/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  let rightSum = nums.reduce((acc, cur) => acc + cur);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    rightSum -= nums[i];

    if (leftSum === rightSum) return i;

    leftSum += nums[i];
  }

  return -1;
};
