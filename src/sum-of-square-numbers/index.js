/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  for (let a = 0; a * a <= c; a += 1) {
    const b = Math.sqrt(c - a * a);

    if (Number.isInteger(b)) return true;
  }

  return false;
};
