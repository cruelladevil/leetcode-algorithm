/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;

  for (let i = 0; i < 32; i += 1) {
    count += n & 1;
    n >>= 1;
  }

  return count;
};
