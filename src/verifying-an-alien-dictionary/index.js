/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const makeOrderMap = (orderString) => {
    const n = orderString.length;
    const orderMap = {};

    for (let i = 0; i < n; i += 1) {
      const char = order.charAt(i);
      orderMap[char] = i;
    }

    return orderMap;
  };

  const orderMap = makeOrderMap(order);

  const orderCompare = (s1, s2) => {
    const lenS1 = s1.length;
    const lenS2 = s2.length;

    for (let i = 0; i < lenS1 && i < lenS2; i += 1) {
      const charS1 = s1.charAt(i);
      const charS2 = s2.charAt(i);

      if (charS1 !== charS2) {
        return orderMap[charS1] - orderMap[charS2];
      }
    }

    return lenS1 - lenS2;
  };

  const n = words.length;

  for (let i = 0; i < n - 1; i += 1) {
    if (orderCompare(words[i], words[i + 1]) > 0) {
      return false;
    }
  }

  return true;
};
