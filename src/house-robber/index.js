/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let maxAtOneBefore = 0;
  let maxAtCurrent = 0;

  nums.forEach((num) => {
    const maxRobValue = Math.max(maxAtOneBefore + num, maxAtCurrent);
    maxAtOneBefore = maxAtCurrent;
    maxAtCurrent = maxRobValue;
  });

  return maxAtCurrent;
};
