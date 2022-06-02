/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const result = [];
  let left = 0;
  let right = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    const squareLeft = nums[left] ** 2;
    const squareRight = nums[right] ** 2;

    if (squareLeft >= squareRight) {
      result[i] = squareLeft;
      left += 1;
    } else {
      result[i] = squareRight;
      right -= 1;
    }
  }

  return result;
};
