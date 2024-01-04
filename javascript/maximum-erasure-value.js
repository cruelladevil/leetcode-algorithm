/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  const visited = new Set();
  let maxSum = 0;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right += 1) {
    const number = nums[right];

    while (visited.has(number)) {
      visited.delete(nums[left]);
      sum -= nums[left];
      left += 1;
    }

    visited.add(number);
    sum += number;
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
};
