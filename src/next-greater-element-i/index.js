/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const map = {};
  const stack = [];

  nums2.forEach((num2) => {
    while (stack.length > 0 && stack[stack.length - 1] < num2) {
      map[stack.pop()] = num2;
    }

    stack.push(num2);
  });

  return nums1.map((num1) => map[num1] || -1);
};
