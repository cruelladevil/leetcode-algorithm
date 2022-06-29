/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();

  for (let i = 0; i < magazine.length; i += 1) {
    const char = magazine.charAt(i);

    if (!map.has(char)) map.set(char, 0);

    map.set(char, map.get(char) + 1);
  }

  for (let i = 0; i < ransomNote.length; i += 1) {
    const char = ransomNote.charAt(i);

    if (!map.has(char) || map.get(char) === 0) return false;

    map.set(char, map.get(char) - 1);
  }

  return true;
};
