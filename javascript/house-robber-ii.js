/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  const robFromTo = (from, to) => {
    let prev = 0;
    let curr = 0;

    for (let i = from; i < to; i += 1) {
      const next = Math.max(prev + nums[i], curr);
      [prev, curr] = [curr, next];
    }

    return curr;
  };

  const firstRobMoney = robFromTo(0, nums.length - 1);
  const secondRobMoney = robFromTo(1, nums.length);

  return Math.max(firstRobMoney, secondRobMoney);
};
