/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  let max = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      i += 1;
    } else {
      max = Math.max(max, j - i);
      j += 1;
    }
  }

  return max;
};
