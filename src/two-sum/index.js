/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};
  const has = Object.prototype.hasOwnProperty;

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];

    if (has.call(map, num)) {
      return [map[num], i];
    }

    map[target - num] = i;
  }

  return [];
};
