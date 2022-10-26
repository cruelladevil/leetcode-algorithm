/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const map = new Map([[0, 0]]);
  let sum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i];

    const remainder = sum % k;

    if (!map.has(remainder)) {
      map.set(remainder, i + 1);
    } else if (map.get(remainder) < i) {
      return true;
    }
  }

  return false;
};
