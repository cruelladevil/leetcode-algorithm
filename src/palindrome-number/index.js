/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const string = x.toString();
  const { length } = string;

  for (let i = 0; i < length / 2; i += 1) {
    if (string[i] !== string[length - 1 - i]) return false;
  }

  return true;
};
