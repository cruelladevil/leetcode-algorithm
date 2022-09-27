/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const orderMap = {};

  for (let i = 0; i < order.length; i += 1) {
    const char = order.charAt(i);
    orderMap[char] = i;
  }

  for (let i = 0; i < words.length - 1; i += 1) {
    const curr = words[i];
    const next = words[i + 1];

    for (let j = 0; j < curr.length; j += 1) {
      if (j >= next.length) return false;

      const currChar = curr.charAt(j);
      const nextChar = next.charAt(j);

      if (orderMap[currChar] > orderMap[nextChar]) {
        return false;
      } else if (orderMap[currChar] < orderMap[nextChar]) {
        break;
      }
    }
  }

  return true;
};
