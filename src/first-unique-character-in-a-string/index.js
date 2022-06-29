/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const UNIQUE = 1;
  const DUPLICATE = 2;

  const map = new Map();
  const n = s.length;

  for (let i = 0; i < n; i += 1) {
    const char = s.charAt(i);

    if (!map.has(char)) {
      map.set(char, UNIQUE);
    } else {
      map.set(char, DUPLICATE);
    }
  }

  for (let i = 0; i < n; i += 1) {
    const char = s.charAt(i);
    if (map.get(char) === UNIQUE) return i;
  }

  return -1;
};
