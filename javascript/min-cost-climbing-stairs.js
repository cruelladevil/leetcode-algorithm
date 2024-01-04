/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let prev = cost[0];
  let curr = cost[1];

  for (let i = 2; i < cost.length; i += 1) {
    const next = cost[i] + Math.min(prev, curr);

    [prev, curr] = [curr, next];
  }

  return Math.min(prev, curr);
};
