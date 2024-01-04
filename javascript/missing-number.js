/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let number = nums.length;

  nums.forEach((num, i) => {
    number ^= i;
    number ^= num;
  });

  return number;
};
