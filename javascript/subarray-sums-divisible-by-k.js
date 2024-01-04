/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  const map = {};
  let prefix = 0;
  let count = 0;

  map[0] = 1;

  nums.forEach((num) => {
    prefix = (prefix + (num % k) + k) % k;
    count += map[prefix] ?? 0;
    map[prefix] = (map[prefix] ?? 0) + 1;
  });

  return count;
};
