/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n < 2) return n;

  let prev = 0;
  let curr = 1;
  let next = 1;

  for (let i = 3; i <= n; i += 1) {
    [prev, curr, next] = [curr, next, prev + curr + next];
  }

  return next;
};
