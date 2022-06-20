/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const start = binarySearch(nums, target, (value, target) => value < target);
  const hasTarget = nums[start] === target;

  if (!hasTarget) return [-1, -1];

  const end = binarySearch(nums, target, (value, target) => value <= target);

  return [start, end - 1];
};

function binarySearch(arr, target, comparator) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const value = arr[middle];

    if (comparator(value, target)) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;
}
