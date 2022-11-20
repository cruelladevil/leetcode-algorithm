/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map = new Map();
  const set = new Set();

  for (let i = 0; i < s.length; i += 1) {
    const sChar = s.charAt(i);
    const tChar = t.charAt(i);

    if (map.has(sChar) && map.get(sChar) !== tChar) {
      return false;
    } else if (!map.has(sChar) && set.has(tChar)) {
      return false;
    }

    map.set(sChar, tChar);
    set.add(tChar);
  }

  return true;
};
