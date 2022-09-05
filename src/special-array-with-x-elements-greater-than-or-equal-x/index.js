/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  const { length } = nums;
  const counts = Array.from({ length: length + 1 }, () => 0);

  nums.forEach((num) => {
    if (num > length) {
      counts[length] += 1;
    } else {
      counts[num] += 1;
    }
  });

  let x = length;

  for (let i = 0; i < length + 1; i += 1) {
    if (x === i) return i;

    x -= counts[i];
  }

  return -1;
};
