/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];

    if (set.has(num)) return true;

    set.add(num);
  }

  return false;
};
