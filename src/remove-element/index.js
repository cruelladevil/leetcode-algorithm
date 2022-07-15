/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast += 1) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow += 1;
    }
  }

  return slow;
};
