/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  const maxWordCount = sentences.reduce((maxCount, sentence) => {
    const wordCount = sentence.split(' ').length;
    return Math.max(maxCount, wordCount);
  }, 0);

  return maxWordCount;
};
