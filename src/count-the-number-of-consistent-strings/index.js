/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  const allowedSet = new Set(allowed);

  const hasEveryAllowed = (word) => {
    for (const char of word) {
      if (!allowedSet.has(char)) return false;
    }
    return true;
  };

  return words.reduce(
    (allowedCount, currWord) =>
      hasEveryAllowed(currWord) ? allowedCount + 1 : allowedCount,
    0,
  );
};
