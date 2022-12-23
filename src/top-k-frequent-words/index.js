/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const countMap = words.reduce((map, word) => {
    map[word] = (map[word] || 0) + 1;
    return map;
  }, {});

  const countSorted = Object.keys(countMap).sort((a, b) => {
    if (countMap[a] === countMap[b]) {
      return a.localeCompare(b);
    } else {
      return countMap[b] - countMap[a];
    }
  });

  return countSorted.slice(0, k);
};
