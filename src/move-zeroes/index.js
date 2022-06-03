/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let writePointer = 0;

  for (let readPointer = 0; readPointer < nums.length; readPointer += 1) {
    const value = nums[readPointer];

    nums[readPointer] = 0;

    if (value !== 0) {
      nums[writePointer] = value;
      writePointer += 1;
    }
  }
};
