/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const value = nums[middle];

    if (value === target) return middle;

    if (value < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;
};
