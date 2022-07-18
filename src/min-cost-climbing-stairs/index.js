/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let minCostTwoBefore = cost[0];
  let minCostOneBefore = cost[1];

  for (let i = 2; i < cost.length; i += 1) {
    const minCostCurrent = cost[i] + Math.min(minCostTwoBefore, minCostOneBefore);

    minCostTwoBefore = minCostOneBefore;
    minCostOneBefore = minCostCurrent;
  }

  return Math.min(minCostTwoBefore, minCostOneBefore);
};
