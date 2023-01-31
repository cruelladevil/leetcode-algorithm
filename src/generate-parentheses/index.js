/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const OPEN = '(';
  const CLOSE = ')';
  const wellFormedParentheses = [];

  const backtrack = (string = '', openCount = 0, closeCount = 0) => {
    if (string.length === n * 2) {
      wellFormedParentheses.push(string);
      return;
    }

    if (openCount < n) {
      backtrack(string + OPEN, openCount + 1, closeCount);
    }
    if (closeCount < openCount) {
      backtrack(string + CLOSE, openCount, closeCount + 1);
    }
  };

  backtrack();

  return wellFormedParentheses;
};
