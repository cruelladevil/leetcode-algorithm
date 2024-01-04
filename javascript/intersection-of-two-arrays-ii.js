/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const nums1Map = new Map();

  nums1.forEach((num) => {
    if (!nums1Map.has(num)) {
      nums1Map.set(num, 1);
    } else {
      const count = nums1Map.get(num);
      nums1Map.set(num, count + 1);
    }
  });

  const intersection = [];

  nums2.forEach((num) => {
    if (nums1Map.has(num) && nums1Map.get(num) > 0) {
      const count = nums1Map.get(num);
      nums1Map.set(num, count - 1);
      intersection.push(num);
    }
  });

  return intersection;
};
