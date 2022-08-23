/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] % 2 === 1 && nums[right] % 2 === 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
    }

    if (nums[left] % 2 === 0) left += 1;
    if (nums[right] % 2 === 1) right -= 1;
  }

  return nums;
};
