/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sArr = Array.from(s);
  const tArr = Array.from(t);

  if (sArr.length !== tArr.length) return false;

  const sMap = {};

  sArr.forEach((char) => {
    if (!sMap[char]) sMap[char] = 0;
    sMap[char] += 1;
  });

  const tMap = {};

  tArr.forEach((char) => {
    if (!tMap[char]) tMap[char] = 0;
    tMap[char] += 1;
  });

  const sMapKeys = Object.keys(sMap);

  for (let i = 0; i < sMapKeys.length; i += 1) {
    const char = sMapKeys[i];
    if (sMap[char] !== tMap[char]) return false;
  }

  return true;
};
