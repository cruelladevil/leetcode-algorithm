/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let n = arr.length;
  let oddSubSum = 0;

  arr.forEach((num, i) => {
    const totalSubCount = (i + 1) * (n - i);
    oddSubSum += Math.ceil(totalSubCount / 2) * num;
  });

  return oddSubSum;
};
