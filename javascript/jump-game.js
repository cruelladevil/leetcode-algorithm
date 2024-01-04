/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let position = 0;

  for (let i = 0; i < nums.length; i += 1) {
    position = Math.max(position, i + nums[i]);

    const hasReached = position >= n - 1;
    const canNotReach = position <= i;

    if (hasReached) return true;
    if (canNotReach) return false;
  }

  return true;
};
