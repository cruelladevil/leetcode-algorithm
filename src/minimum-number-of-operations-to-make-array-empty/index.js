/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const counter = {};

  nums.forEach((num) => {
    if (!counter[num]) {
      counter[num] = 0;
    }
    counter[num] += 1;
  });

  const operationCounts = Object.values(counter).map((count) => {
    if (count === 1) {
      return -1;
    }

    if (count % 3 === 0) {
      return count / 3;
    } else {
      return Math.floor(count / 3) + 1;
    }
  });

  return operationCounts.includes(-1) ? -1 : operationCounts.reduce((acc, cur) => acc + cur, 0);
};
