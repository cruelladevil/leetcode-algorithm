/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const map = {};

  nums.forEach((num) => {
    if (!map[num]) map[num] = 0;
    map[num] += 1;
  });

  let prev = 0;
  let curr = 0;

  Object.entries(map).forEach(([num, count]) => {
    const value = num * count;

    if (map[num - 1]) {
      [prev, curr] = [curr, Math.max(prev + value, curr)];
    } else {
      [prev, curr] = [curr, curr + value];
    }
  });

  return curr;
};
