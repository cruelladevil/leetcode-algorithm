/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = {};

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];

    if (i - map[num] <= k) return true;

    map[num] = i;
  }

  return false;
};
