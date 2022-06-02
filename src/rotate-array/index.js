/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const { length } = nums;
  const distance = k % length;

  const reverse = (start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start += 1;
      end -= 1;
    }
  };

  reverse(0, length - 1);
  reverse(0, distance - 1);
  reverse(distance, length - 1);
};
