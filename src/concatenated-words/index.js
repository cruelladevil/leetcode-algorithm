/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
  const set = new Set(words);
  const memo = new Set();

  const isConcat = (word) => {
    if (memo.has(word)) return true;

    for (let i = 1; i < word.length; i += 1) {
      const prefix = word.slice(0, i);
      const suffix = word.slice(i);

      if (set.has(prefix)) {
        if (set.has(suffix) || isConcat(suffix)) {
          memo.add(word);
          return true;
        }
      }
    }

    return false;
  };

  return words.filter((word) => isConcat(word));
};
