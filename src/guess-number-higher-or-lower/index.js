/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  const GUESS_IS_CORRECT = 0;
  const GUESS_IS_LOWER = 1;

  let left = 1;
  let right = n;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const guessResult = guess(middle);

    if (guessResult === GUESS_IS_CORRECT) return middle;

    if (guessResult === GUESS_IS_LOWER) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;
};
