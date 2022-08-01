/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  const isIsomorphic = (word, pattern) => {
    const map = new Map();
    const set = new Set();

    for (let i = 0; i < pattern.length; i += 1) {
      const wChar = word.charAt(i);
      const pChar = pattern.charAt(i);

      if (!map.has(wChar)) {
        if (set.has(pChar)) return false;
      } else {
        if (map.get(wChar) !== pChar) return false;
      }

      map.set(wChar, pChar);
      set.add(pChar);
    }

    return true;
  };

  return words.filter((word) => isIsomorphic(word, pattern));
};
