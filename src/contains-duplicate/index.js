/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i += 1) {
    const number = nums[i];

    if (set.has(number)) return true;

    set.add(number);
  }

  return false;
};
