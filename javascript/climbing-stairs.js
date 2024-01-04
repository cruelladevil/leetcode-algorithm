/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 2) return n;

  let prev = 1;
  let curr = 1;

  for (let i = 2; i <= n; i += 1) {
    [prev, curr] = [curr, prev + curr];
  }

  return curr;
};
