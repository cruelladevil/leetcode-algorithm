/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) return false;

  let num = n;

  while (num > 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else if (num % 3 === 0) {
      num /= 3;
    } else if (num % 5 === 0) {
      num /= 5;
    } else {
      return false;
    }
  }

  return true;
};
