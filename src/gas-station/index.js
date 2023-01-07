/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const n = gas.length;
  let totalSum = 0;
  let subSum = 0;
  let start = 0;

  for (let i = 0; i < n; i += 1) {
    totalSum += gas[i] - cost[i];
    subSum += gas[i] - cost[i];

    if (subSum < 0) {
      subSum = 0;
      start = i + 1;
    }
  }

  return totalSum < 0 ? -1 : start % n;
};
