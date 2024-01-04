/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const max = Math.max(word1.length, word2.length);
  let str = '';

  for (let i = 0; i < max; i += 1) {
    str += word1.charAt(i);
    str += word2.charAt(i);
  }

  return str;
};
