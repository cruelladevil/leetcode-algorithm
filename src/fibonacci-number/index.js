/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) return n;

  let previous = 0;
  let current = 1;

  for (let i = 2; i <= n; i += 1) {
    [previous, current] = [current, previous + current];
  }

  return current;
};
