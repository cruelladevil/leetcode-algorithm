/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  const n = nums.length;

  for (let i = 0; i < n; i += 1) {
    const value = nums[nums[i]] % n;
    nums[i] = value * n + nums[i];
  }

  for (let i = 0; i < n; i += 1) {
    const value = Math.floor(nums[i] / n);
    nums[i] = value;
  }

  return nums;
};
