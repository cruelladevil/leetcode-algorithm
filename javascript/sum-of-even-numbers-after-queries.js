/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (nums, queries) {
  let sum = 0;

  nums.forEach((num) => {
    if (num % 2 === 0) sum += num;
  });

  const evenSums = [];

  queries.forEach(([value, index]) => {
    if (nums[index] % 2 === 0) sum -= nums[index];
    nums[index] += value;
    if (nums[index] % 2 === 0) sum += nums[index];
    evenSums.push(sum);
  });

  return evenSums;
};
