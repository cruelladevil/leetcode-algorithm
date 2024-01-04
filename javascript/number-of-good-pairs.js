/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const map = {};
  let pairCount = 0;

  nums.forEach((num) => {
    if (!map[num]) map[num] = 0;
    pairCount += map[num];
    map[num] += 1;
  });

  return pairCount;
};
