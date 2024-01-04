/**
 * @param {string} s
 * @return {number}
 */
// for loop
var lengthOfLastWord = function (s) {
  let lastWord = '';

  for (let i = s.length - 1; i >= 0; i -= 1) {
    if (s.charAt(i) !== ' ') {
      lastWord = s.charAt(i) + lastWord;
    } else if (lastWord.length > 0) {
      return lastWord.length;
    }
  }

  return lastWord.length;
};

// RegExp
var lengthOfLastWord = function (s) {
  const wordList = s.match(/\w+/g);
  const lastWord = wordList[wordList.length - 1];

  return lastWord.length;
};
