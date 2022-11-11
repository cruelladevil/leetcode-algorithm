/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 0;

  for (let fast = 1; fast < nums.length; fast += 1) {
    if (nums[slow] !== nums[fast]) {
      nums[slow + 1] = nums[fast];
      slow += 1;
    }
  }

  return slow + 1;
};
