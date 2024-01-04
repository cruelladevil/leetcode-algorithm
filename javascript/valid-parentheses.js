/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const pairMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    const char = s.charAt(i);
    const stackTop = stack[stack.length - 1];

    if (char === pairMap[stackTop]) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
