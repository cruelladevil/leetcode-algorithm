/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const map = {};

  words.forEach((word) => {
    if (!map[word]) map[word] = 0;
    map[word] += 1;
  });

  const countSort = Object.keys(map).sort((a, b) => {
    const countCompare = map[b] - map[a];

    if (countCompare === 0) {
      return a.localeCompare(b);
    } else {
      return countCompare;
    }
  });

  return countSort.slice(0, k);
};
