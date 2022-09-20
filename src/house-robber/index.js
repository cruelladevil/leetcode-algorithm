/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let prev = 0;
  let curr = 0;

  nums.forEach((money) => {
    const next = Math.max(prev + money, curr);
    [prev, curr] = [curr, next];
  });

  return curr;
};
