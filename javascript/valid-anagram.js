/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const sMap = {};
  const tMap = {};

  for (let i = 0; i < s.length; i += 1) {
    const sChar = s.charAt(i);
    const tChar = t.charAt(i);

    if (!sMap[sChar]) sMap[sChar] = 0;
    sMap[sChar] += 1;

    if (!tMap[tChar]) tMap[tChar] = 0;
    tMap[tChar] += 1;
  }

  const sMapKeys = Object.keys(sMap);

  for (let i = 0; i < sMapKeys.length; i += 1) {
    const char = sMapKeys[i];
    if (sMap[char] !== tMap[char]) return false;
  }

  return true;
};
