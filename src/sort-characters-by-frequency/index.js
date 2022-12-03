/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const frequencyMap = {};

  for (let i = 0; i < s.length; i += 1) {
    const char = s.charAt(i);

    if (!frequencyMap[char]) frequencyMap[char] = 0;
    frequencyMap[char] += 1;
  }

  return Object.entries(frequencyMap)
    .sort(([, countA], [, countB]) => countB - countA)
    .reduce((acc, [char, count]) => {
      return acc + char.repeat(count);
    }, '');
};
