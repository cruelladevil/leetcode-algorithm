/**
 * @param {number} x
 * @return {boolean}
 */
// String
var isPalindrome = function (x) {
  const numString = x.toString();
  let left = 0;
  let right = numString.length - 1;

  while (left <= right) {
    if (numString.charAt(left) !== numString.charAt(right)) {
      return false;
    }

    left += 1;
    right -= 1;
  }

  return true;
};

// Number
var isPalindrome = function (x) {
  if (x < 0) return false;

  let num = x;
  let reverse = 0;

  while (num > 0) {
    reverse = reverse * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return x === reverse;
};
