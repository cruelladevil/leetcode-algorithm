/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const fibo = [1, 1];

  for (let i = 2; i <= n; i += 1) {
    fibo[i] = fibo[i - 2] + fibo[i - 1];
  }

  return fibo[n];
};
