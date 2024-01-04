/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(' ');
  if (pattern.length !== words.length) return false;

  const map = new Map();
  const set = new Set();

  for (let i = 0; i < pattern.length; i += 1) {
    const char = pattern.charAt(i);
    const word = words[i];

    if (map.has(char) && map.get(char) !== word) {
      return false;
    } else if (!map.has(char) && set.has(word)) {
      return false;
    }

    map.set(char, word);
    set.add(word);
  }

  return true;
};
