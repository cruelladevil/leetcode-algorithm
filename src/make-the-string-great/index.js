/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    const char = s.charAt(i);
    const top = stack[stack.length - 1] || '';

    if (top.toLowerCase() === char.toLowerCase() && top !== char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
};
