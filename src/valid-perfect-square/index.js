/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 1;
  let right = num;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const squareMiddle = middle ** 2;

    if (squareMiddle === num) return true;

    if (squareMiddle < num) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return false;
};
