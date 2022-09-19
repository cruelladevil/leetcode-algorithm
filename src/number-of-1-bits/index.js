/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let num = n;
  let count = 0;

  while (num !== 0) {
    count += num & 1;
    num >>>= 1;
  }

  return count;
};
