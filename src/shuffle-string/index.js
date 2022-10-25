/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const chars = [];

  indices.forEach((index, i) => {
    chars[index] = s.charAt(i);
  });

  return chars.join('');
};
