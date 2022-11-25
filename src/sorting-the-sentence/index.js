/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const words = s.split(' ');
  const sentence = [];

  words.forEach((word) => {
    const index = word.slice(-1);
    sentence[index - 1] = word.slice(0, -1);
  });

  return sentence.join(' ');
};
