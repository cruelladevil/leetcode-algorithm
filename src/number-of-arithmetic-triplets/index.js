/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  const set = new Set();

  nums.forEach((num) => {
    set.add(num);
  });

  return nums.reduce((tripletCount, curr) => {
    if (set.has(curr + diff) && set.has(curr - diff)) {
      return tripletCount + 1;
    }
    return tripletCount;
  }, 0);
};
