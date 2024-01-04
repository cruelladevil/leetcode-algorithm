/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let sign = 1;

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    if (num === 0) return 0;
    if (num < 0) sign *= -1;
  }

  return sign;
};
