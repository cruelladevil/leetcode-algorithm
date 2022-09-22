/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let result = '';
  let word = '';

  for (let i = 0; i < s.length; i += 1) {
    const char = s.charAt(i);

    if (char === ' ') {
      result += word + char;
      word = '';
    } else {
      word = char + word;
    }
  }

  return result + word;
};
