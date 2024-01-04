/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let isIncreasing = false;
  let isDecreasing = false;

  for (let i = 0; i < nums.length - 1; i += 1) {
    if (nums[i] < nums[i + 1]) isIncreasing = true;
    if (nums[i] > nums[i + 1]) isDecreasing = true;

    if (isIncreasing && isDecreasing) return false;
  }

  return true;
};
