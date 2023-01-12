/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const ranges = [];
  let left = 0;

  const buildRangeString = (start, end) => {
    if (start === end) {
      return String(nums[start]);
    }
    return nums[start] + '->' + nums[end];
  };

  for (let right = 0; right < nums.length; right += 1) {
    if (nums[right] + 1 !== nums[right + 1]) {
      ranges.push(buildRangeString(left, right));
      left = right + 1;
    }
  }

  return ranges;
};
